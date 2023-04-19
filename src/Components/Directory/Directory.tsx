import React, {useContext} from 'react';
import {DirectoryContext} from '../../Context/DirectoryContext';
import {DirectoryContextType} from '../../Types/types.directories';
import DirectoryFolder from './DirectoryComponents/DirectoryFolder';
import './index.scss'

function Directory (): JSX.Element {
    const {directories} = useContext(DirectoryContext) as DirectoryContextType;
    return (
        <div>
            <div className='directory-container'>
                <DirectoryFolder
                    data={directories}
                />
            </div>
        </div>
    );
}

export default Directory;
