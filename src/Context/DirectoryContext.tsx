import * as React from 'react';
import {
    DirectoryContextType,
    DirectoryResults,
} from '../Types/types.directories';
import {directoryDefaultResults} from '../Types/defaultValues';
import {getDirectories} from '../Api/Utils/fetchUtils';
import {useEffect} from 'react';

export const DirectoryContext = React.createContext<DirectoryContextType | null>(null);

interface ProviderProps {
    children?: React.ReactNode
}

function DirectoryProvider ({children}: ProviderProps): JSX.Element {
    const [directories, setDirectories] = React.useState<DirectoryResults>(directoryDefaultResults);

    const updateContext = (pageNumber?: number, countNumber?: number): void => {
        void getDirectories({pageNumber, countNumber}).then((res) => {
            setDirectories(res)
        })
    }

    useEffect(() => {
        updateContext();
    }, [])

    return (
        <DirectoryContext.Provider value={{directories, updateContext}}>
            {children}
        </DirectoryContext.Provider>
    )
}

export default DirectoryProvider;
