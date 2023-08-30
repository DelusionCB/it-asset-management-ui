import React from 'react';
import Directory from '../../Components/Directory/Directory';
import './index.scss'
import {useTranslation} from 'react-i18next';

function Homepage (): JSX.Element {
    const {t} = useTranslation()
    return (
        <div className='container home-container'>
            <div className='container-md'>
                <h1>{t('home.header')}</h1>
                <p>
                    Mappi-järjestelmä auttaa hallinnoimaan sopimuksia, sovelluksia, palvelinasioita ja arkistoa.
                </p>
            </div>
            <Directory />
        </div>
    );
}

export default Homepage;
