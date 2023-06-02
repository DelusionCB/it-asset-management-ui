import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import FormFields from '../../Components/FormFields/FormFields';
import './index.scss'

function ArchiveForms (): JSX.Element {
    const params = useLocation();
    const [loading, isLoading] = useState(true);
    const [mode, setMode] = useState('')

    useEffect(() => {
        isLoading(true)
        if (params.state) {
            setMode(params.state.action)
            isLoading(false)
        } else {
            setMode('create')
            isLoading(false)
        }
    }, [params]);

    return (
        <div className='formviewer'>
            <FormFields
                loading={loading}
                mode={mode}
                params={params}
            />
        </div>
    );
}

export default ArchiveForms;
