import React from 'react'
import {Button} from 'reactstrap';
import {useTranslation} from 'react-i18next';
import './index.scss'
import {postData} from '../../Api/Utils/archiveUtils';
import {useNavigate} from 'react-router-dom'
import {actionButtonPropTypes} from '../../Types/types.components';

function ActionButton ({values, action, type, mode, disabled = false}: actionButtonPropTypes): JSX.Element {
    const {t} = useTranslation()
    const navigate = useNavigate()

    function handleAction (): void {
        switch (action) {
            case 'create':
            case 'save':
                void postData(navigate, action, type, values)
                break;
            case 'edit':
                navigate(`/archive/${action}/${values.base_id}`, {
                    state: {
                        api: type,
                        id: values.base_id,
                        action,
                    },
                });
                window.scrollTo({top: 0, behavior: 'smooth'});
                break;
            case 'cancel':
                navigate(-1)
                window.scrollTo({top: 0, behavior: 'smooth'});
                break;
        }
    }

    return (
        <Button
            className='action-button'
            onClick={() => { handleAction(); }}
            disabled={disabled}
        >
            {t(`button.${action}`)}
        </Button>
    )
}

export default ActionButton
