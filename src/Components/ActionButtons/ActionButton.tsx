import React from 'react'
import {Button} from 'reactstrap';
import {useTranslation} from 'react-i18next';
import './index.scss'
import {postData} from '../../Api/Utils/archiveUtils';
import {useNavigate} from 'react-router-dom'

interface ActionButtonProps {
    values: object
    action: string
    type: string
}

function ActionButton ({values, action, type}: ActionButtonProps): JSX.Element {
    const {t} = useTranslation()
    const navigate = useNavigate()

    function handleAction (): void {
        switch (action) {
            case 'create' || 'edit':
                void postData(navigate, action, type, values)
                break;
            case 'copy':

                break;
        }
    }

    return (
        <Button
            className='action-button'
            onClick={() => { handleAction(); }}
        >
            {t(`${type}.${action}`)}
        </Button>
    )
}

export default ActionButton
