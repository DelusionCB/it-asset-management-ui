import React from 'react';
import {getEndpoint} from '../../Utils/routing';
import './index.scss'
import {Link} from 'react-router-dom';
import {gridPropTypes, itemPropTypes} from '../../Types/types.components';

function Item ({itemKey, item, t}: itemPropTypes): JSX.Element {
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
        <div className="col-xs-12 col-md-6 col-lg-4" key={itemKey}>
            <Link
                aria-label={`${t('redirect', {value: item.name})}`}
                className='link-item'
                to={`/${getEndpoint(item.id_prefix)}/${item.base_id}`}
            >
                <div className='item'>
                    <div>
                        {getIcon(item.id_prefix)}
                    </div>
                    <div>
                        <p>{item.name}</p>
                    </div>
                    <div>
                        <p>{`${item.description.slice(0, 20)}` + '...'}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

function ItemGrid ({items, t}: gridPropTypes): JSX.Element {
    return (
        <div className="row event-grid">
            {items.map((item, key) => <Item t={t} item={item} itemKey={key}/>)}
        </div>
    )
}

export default ItemGrid;
