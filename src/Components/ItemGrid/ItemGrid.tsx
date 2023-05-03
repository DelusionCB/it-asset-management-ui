import {Button} from 'reactstrap';
import React from 'react';
import {redirectTo} from '../../Utils/routing';
import './index.scss'

interface objectItem {
    name: string
    description: string
    id_prefix: string
    base_id: string
}

interface itemProps {
    key: number
    item: objectItem
    t: any
    navigate: any
}

function Item ({key, item, t, navigate}: itemProps): JSX.Element {
    function getIcon (type: string): JSX.Element {
        let icon = ''
        switch (type) {
            case 'dir':
                icon = 'folder-fill'
                break;
            case 'app':
                icon = 'box-fill'
                break;
            case 'ser':
                icon = 'archive-fill'
                break;
            case 'srv':
                icon = 'server'
                break;
            case 'lcn':
                icon = 'file-earmark-person-fill'
                break;
            case 'pro':
                icon = 'briefcase-fill'
                break;
            case 'con':
                icon = 'file-earmark-text-fill'
                break;
        }
        return (<i className={`bi bi-${icon}`} />)
    }

    return (
        <div className="col-xs-12 col-md-6 col-lg-4" key={key}>
            <div className='item'>
                <div>
                    {getIcon(item.id_prefix)}
                </div>
                <div>
                    {item.name}
                </div>
                <div>
                    {item.description.slice(0, 20) + '...'}
                </div>
                <div>
                    <Button
                        className='redirect-button'
                        role='link'
                        aria-label={t('redirect', {value: item.name})}
                        onClick={() => { redirectTo(navigate, item.id_prefix, item.base_id) }}
                    >
                        <span>{t('redirect', {value: item.name})}</span>
                        <i className='bi bi-arrow-right' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

interface gridItems {
    items: objectItem[]
    navigate: any
    t: any
}

function ItemGrid ({items, t, navigate}: gridItems): JSX.Element {
    return (
        <div className="row event-grid">
            {items.map((item, key) => <Item t={t} navigate={navigate} item={item} key={key}/>)}
        </div>
    )
}

export default ItemGrid;
