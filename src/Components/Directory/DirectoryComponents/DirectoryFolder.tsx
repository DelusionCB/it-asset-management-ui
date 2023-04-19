import React, {useState} from 'react';
import {Button, Collapse} from 'reactstrap';
import {useTranslation} from 'react-i18next';
import {applicationDataProps, DirectoryDataProps, DirectoryFolderProps} from '../../../Types/types.directories';
import DirectoryItem from './DirectoryItem';
import '../index.scss'

function DirectoryFolder ({data}: DirectoryFolderProps): JSX.Element {
    const {t} = useTranslation()
    const [isOpen, setOpen] = useState<any>(null)

    function openCollapse (key: number): void {
        if (isOpen === key) {
            setOpen(null);
        } else {
            setOpen(key);
        }
    }

    function returnFolders (): JSX.Element[] {
        const elements: JSX.Element[] = data.results.reduce((acc: JSX.Element[], curr: DirectoryDataProps, key: number) => {
            acc.push(
                <div className='directory-folder' key={key}>
                    <Button
                        aria-expanded={isOpen === key}
                        aria-label={`${t(isOpen === key ? 'opened-collapse' : 'closed-expand')} ${curr.name}`}
                        className='-button'
                        id={`${key}-collapse-button`}
                        disabled={!curr.applications.length}
                        onClick={() => {
                            openCollapse(key);
                        }}
                    >
                        {curr.applications.length
                            ? <>
                                <p>{curr.name}</p>
                                <small>{curr.description}</small>
                                <i aria-hidden className={isOpen === key ? 'bi bi-arrow-up' : 'bi bi-arrow-down'}/>
                            </>
                            : <>
                                <p>{curr.name}</p>
                                <small>Tällä kansiolla ei ole sovelluksia</small>
                                <i aria-hidden className='bi bi-x-circle'/>
                            </>
                        }
                    </Button>
                    <Collapse className='-collapse' isOpen={isOpen === key}>
                        {curr.applications.reduce((acc: JSX.Element[], curr: applicationDataProps) => {
                            acc.push(
                                <DirectoryItem
                                    data={curr}
                                    key={key}
                                />,
                            )
                            return acc
                        }, [])}
                    </Collapse>
                </div>,
            )
            return acc
        }, []);
        if (!elements.length) {
            elements.push(
                <div key={Math.random()}>
                    <h1>Ei kansioita joita näyttää</h1>
                </div>,
            )
        }
        return elements
    }

    return (
        <>
            {returnFolders()}
        </>
    )
}

export default DirectoryFolder
