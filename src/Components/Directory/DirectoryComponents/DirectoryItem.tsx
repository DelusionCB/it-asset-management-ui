import React from 'react';
import {DirectoryItemProps} from '../../../Types/types.directories';
import {useNavigate} from 'react-router-dom'
import {Button} from 'reactstrap';
import {redirectTo} from '../../../Utils/routing';

function DirectoryItem ({data}: DirectoryItemProps): JSX.Element {
    const navigate = useNavigate()

    return (
        <div className='directory-item'>
            <div>
                <h2>{data.name}</h2>
                <small>{data.description}</small>
            </div>
            <div>
                <Button
                    className='item-button'
                    onClick={() => { redirectTo(navigate, data.id_prefix, data.base_id); }}
                >
                    <p>Siirry {data.name} tietoihin</p>
                    <i className='bi bi-arrow-right' />
                </Button>
            </div>
        </div>
    );
}

export default DirectoryItem;
