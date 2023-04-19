import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

// Import all translation files
import finnish from './Assets/Translations/Finnish/fi.json'

void i18next
    .use(initReactI18next)
    .init({
        fallbackLng: 'fi',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            fi: {translation: finnish},
        },
    });

export default i18next;
