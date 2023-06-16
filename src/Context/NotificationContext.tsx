import React, {createContext, useState} from 'react';

interface NotificationContextType {
    showNotification: (message: string) => void
    hideNotification: () => void
    show: boolean
    message: string
}

export const NotificationContext = createContext<NotificationContextType>({
    showNotification: () => {},
    hideNotification: () => {},
    show: false,
    message: '',
});

interface NotificationProviderProps {
    children: React.ReactNode
}

function NotificationProvider ({children}: NotificationProviderProps): JSX.Element {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');

    function showNotification (message: string): void {
        setShow(true);
        setMessage(message);

        setTimeout(() => {
            hideNotification();
        }, 5000);
    }

    function hideNotification (): void {
        setShow(false);
        setMessage('');
    }

    const contextValue: NotificationContextType = {
        showNotification,
        hideNotification,
        show,
        message,
    };

    return (
        <NotificationContext.Provider value={contextValue}>
            {children}
        </NotificationContext.Provider>
    );
}

export default NotificationProvider
