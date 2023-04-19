import * as React from 'react';
import {
    DirectoryContextType,
    DirectoryResults,
    DirectoryDefaultResults,
} from '../Types/types.directories';
import {getDirectories} from '../Api/Utils/fetchUtils';
import {useEffect} from 'react';

export const DirectoryContext = React.createContext<DirectoryContextType | null>(null);

interface ProviderProps {
    children?: React.ReactNode
}

const DirectoryProvider: React.FC<ProviderProps> = ({children}) => {
    const [directories, setDirectories] = React.useState<DirectoryResults>(DirectoryDefaultResults);

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
};

export default DirectoryProvider;
