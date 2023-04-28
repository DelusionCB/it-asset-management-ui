import React from 'react';
import {Button} from 'reactstrap';
import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import './index.scss'

function Back (): JSX.Element {
    const navigate = useNavigate();
    const {t} = useTranslation()

    return (
        <Button className='back-button' onClick={() => { navigate(-1); }}>
            <i className='bi bi-arrow-left' />
            {t('back')}
        </Button>
    );
}

export default Back;
