import React, {useContext, useEffect} from 'react';
import {NotificationContext} from '../../Context/NotificationContext';
import {useTranslation} from 'react-i18next';
import './index.scss'

const Notification = (): JSX.Element => {
    const {hideNotification, show, message} = useContext(NotificationContext);
    const {t} = useTranslation()

    useEffect(() => {
        // Hide the notification after 5 seconds (5000ms)
        const timer = setTimeout(() => {
            hideNotification();
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    function getIcon (message: string): JSX.Element {
        let icon = ''
        switch (message) {
            case 'status.save':
            case 'status.create':
                icon = 'check-circle-fill'
                break;
            case 'status.delete':
                icon = 'trash3-fill'
                break;
            case 'status.error':
                icon = 'bug-fill'
                break;
            case 'status.authorization':
                icon = 'person-fill-exclamation'
                break;
        }
        return (<i className={`bi bi-${icon}`} />)
    }
    return (
        <>
            {show &&
                <dialog open={show} className='notification'>
                    <div>
                        {getIcon(message)}
                        <h1 role='status' className='notification-message'>{t(message)}</h1>
                    </div>
                </dialog>
            }
        </>
    );
};

export default Notification;
