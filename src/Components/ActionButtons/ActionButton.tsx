import React, {useContext, useState} from 'react'
import {Button} from 'reactstrap';
import {useTranslation} from 'react-i18next';
import './index.scss'
import {deleteData, postData} from '../../Api/Utils/archiveUtils';
import {useNavigate} from 'react-router-dom'
import {actionButtonPropTypes} from '../../Types/types.components';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import {NotificationContext} from '../../Context/NotificationContext';

function ActionButton ({values, action, type, disabled = false}: actionButtonPropTypes): JSX.Element {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const {t} = useTranslation()
    const navigate = useNavigate()
    const {showNotification} = useContext(NotificationContext);

    function handleAction (): void {
        switch (action) {
            case 'create':
            case 'save':
                void postData(navigate, action, type, values, showNotification)
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
            case 'delete':
                setShowConfirmation(true);
                break;
            case 'copy':
                navigate(`/archive/${action}/new`, {
                    state: {
                        api: type,
                        id: values.base_id,
                        action,
                    },
                });
                break;
        }
    }

    function handleConfirm (): void {
        switch (action) {
            case 'delete':
                void deleteData(navigate, action, type, values.base_id, showNotification)
        }
    }

    return (
        <>
            {showConfirmation && (
                <ConfirmationModal
                    onConfirm={() => { handleConfirm() }}
                    onCancel={() => { setShowConfirmation(false); }}
                    values={values}
                    t={t}
                    type={type}
                />
            )}
            <Button
                className='action-button'
                onClick={() => { handleAction(); }}
                disabled={disabled}
            >
                {t(`button.${action}`)}
            </Button>
        </>
    )
}

export default ActionButton
