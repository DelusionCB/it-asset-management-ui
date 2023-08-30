import React, {useContext} from 'react';
import {DirectoryContext} from '../../Context/DirectoryContext';
import {DirectoryContextType} from '../../Types/types.directories';
import DirectoryFolder from './DirectoryComponents/DirectoryFolder';
import './index.scss'
import {Spinner} from 'reactstrap';

function Directory (): JSX.Element {
    const {directories, loading} = useContext(DirectoryContext) as DirectoryContextType;
    const endpoints = ['application', 'directory', 'license', 'server', 'service', 'integration', 'provider'];
    if (loading) {
        return (
            <Spinner animation="border" role="status">
                Ladataan...
            </Spinner>
        );
    } else {
        return (
            <div className='directory-container'>
                <DirectoryFolder
                    data={directories}
                    endpoints={endpoints}
                />
            </div>
        )
    }
}

export default Directory;
