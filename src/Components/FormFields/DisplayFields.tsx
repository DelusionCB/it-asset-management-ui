import React from 'react';
import {
    contractDataProps,
    extendedApplicationDataProps, extendedDirectoryDataProps,
    LicenseDataProps, serverDataProps, serviceDataProps,
} from '../../Types/types.directories';
import ApplicationDisplay from './Display/ApplicationDisplay';
import DirectoryDisplay from './Display/DirectoryDisplay';
import LicenseDisplay from './Display/LicenseDisplay';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';
import ServiceDisplay from './Display/ServiceDisplay';
import ServerDisplay from './Display/ServerDisplay';
import './index.scss'
import ContractDisplay from './Display/ContractDisplay';

interface displayFieldsProps<T> {
    type: 'application' | 'directory' | 'license' | 'server' | 'service' | 'contract' | 'nopath' | string
    item: T
    loading: boolean
}

function DisplayFields<T extends extendedApplicationDataProps | extendedDirectoryDataProps | LicenseDataProps | serverDataProps | serviceDataProps | contractDataProps> ({type, item, loading}: displayFieldsProps<T>): JSX.Element {
    const {t} = useTranslation()
    const navigate = useNavigate()

    function getFields (): JSX.Element {
        switch (type) {
            case 'application':
                return (
                    <ApplicationDisplay navigate={navigate} t={t} values={item as extendedApplicationDataProps} />
                )
            case 'directory':
                return (
                    <DirectoryDisplay navigate={navigate} t={t} values={item as extendedDirectoryDataProps} />
                )
            case 'license':
                return (
                    <LicenseDisplay navigate={navigate} t={t} values={item as LicenseDataProps} />
                )
            case 'server':
                return (
                    <ServerDisplay navigate={navigate} t={t} values={item as serverDataProps} />
                )
            case 'service':
                return (
                    <ServiceDisplay navigate={navigate} t={t} values={item as serviceDataProps} />
                )
            case 'contract':
                return (
                    <ContractDisplay navigate={navigate} t={t} values={item as contractDataProps} />
                )
            case 'nopath':
                return (
                    <div />
                )
            default:
                return (
                    <div />
                )
        }
    }
    return (
        <div className='display-fields'>
            {!loading && getFields()}
        </div>
    );
}

export default DisplayFields;
