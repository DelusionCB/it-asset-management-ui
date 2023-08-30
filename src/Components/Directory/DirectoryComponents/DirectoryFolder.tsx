import React from 'react';
import {DirectoryFolderProps} from '../../../Types/types.directories';
import DirectoryItem from './DirectoryItem';
import '../index.scss'
import {useTranslation} from 'react-i18next';

function DirectoryFolder ({data, endpoints}: DirectoryFolderProps): JSX.Element {
    const {t} = useTranslation()

    function returnFolders (): JSX.Element[] {
        return endpoints.reduce((acc: JSX.Element[], endpoint: string, index: number) => {
            const endpointData = data[endpoint];

            if (!Array.isArray(endpointData) || endpointData.length === 0) {
                acc.push(
                    <div className='directory-folder' key={index}>
                        <div className='directory-header'>
                            <h2>{t(`folder.${endpoint}`)}</h2>
                        </div>
                        <p>{t(`folder.no-data`)}</p>
                    </div>,
                );
            } else {
                const directoryItems = endpointData.reduce((innerAcc: JSX.Element[], item: any, innerIndex: number) => {
                    innerAcc.push(
                        <DirectoryItem data={item} key={`${index}-${innerIndex}`} />,
                    );
                    return innerAcc;
                }, []);

                acc.push(
                    <div className='directory-folder' key={index}>
                        <div className='directory-header'>
                            <h2>{t(`folder.${endpoint}`)}</h2>
                        </div>
                        {directoryItems}
                    </div>,
                );
            }

            return acc;
        }, []);
    }

    return (
        <>
            {returnFolders()}
        </>
    )
}

export default DirectoryFolder
