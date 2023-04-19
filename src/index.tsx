import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
} from 'react-router-dom';
import App from './Views/App/App'
import DirectoryProvider from './Context/DirectoryContext';
import './i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <DirectoryProvider>
                <App />
            </DirectoryProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
