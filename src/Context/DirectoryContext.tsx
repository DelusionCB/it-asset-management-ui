import * as React from 'react';
import {
    DirectoryContextType,
    DirectoryResults,
} from '../Types/types.directories';
import {getDirectories} from '../Api/Utils/fetchUtils';
import {useEffect} from 'react';

export const DirectoryContext = React.createContext<DirectoryContextType | null>(null);

interface ProviderProps {
    children?: React.ReactNode
}

const directoryDefaultResults: Record<string, DirectoryResults> = {};

function DirectoryProvider ({children}: ProviderProps): JSX.Element {
    const [directories, setDirectories] = React.useState<Record<string, DirectoryResults>>(directoryDefaultResults);
    const [loading, setLoading] = React.useState(true)

    const updateContext = async (pageNumber?: number, countNumber?: number, endpoint?: string): Promise<void> => {
        if (!endpoint) return;
        setLoading(true)
        await getDirectories({pageNumber, countNumber, endpoint}).then((res) => {
            setDirectories((prevDirectories) => ({
                ...prevDirectories,
                [endpoint]: res.results,
            }));
        });
    };

    useEffect(() => {
        const endpoints = ['application', 'directory', 'license', 'server', 'service', 'integration', 'provider'];

        const updateContextPromises = endpoints.map(async (endpoint) => { await updateContext(1, 6, endpoint); });

        Promise.all(updateContextPromises)
            .then(() => {
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error updating contexts:', error);
                setLoading(false);
            });
    }, []);

    return (
        <DirectoryContext.Provider value={{directories, loading}}>
            {children}
        </DirectoryContext.Provider>
    )
}

export default DirectoryProvider;
