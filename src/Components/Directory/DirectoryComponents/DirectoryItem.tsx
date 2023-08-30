import React from 'react';
import {DirectoryItemProps} from '../../../Types/types.directories';
import {useNavigate} from 'react-router-dom'
import {Button} from 'reactstrap';
import {redirectTo} from '../../../Utils/routing';

function DirectoryItem ({data}: DirectoryItemProps): JSX.Element {
    const navigate = useNavigate()

    return (
        <div className='directory-item'>
            <Button
                className='item-button'
                onClick={() => { redirectTo(navigate, data.id_prefix, data.base_id); }}
            >
                <p>{data.name}</p>
                <i className='bi bi-arrow-right' />
            </Button>
        </div>
    );
}

export default DirectoryItem;
