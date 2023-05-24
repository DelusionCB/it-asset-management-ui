import React from 'react';
import {
    contractDataPropTypes,
    extendedApplicationDataProps, extendedDirectoryDataProps, integrationDataPropTypes,
    licenseDataPropTypes, providerDataPropTypes, serverDataPropTypes, serviceDataProps,
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
import ProviderDisplay from './Display/ProviderDisplay';
import IntegrationDisplay from './Display/IntegrationDisplay';

interface displayFieldsProps<T> {
    type: 'application' | 'directory' | 'license' | 'server' | 'service' | 'contract' | 'provider' | 'integration' | 'nopath' | string
    item: T
    loading: boolean
}

function DisplayFields<T extends
extendedApplicationDataProps |
extendedDirectoryDataProps |
licenseDataPropTypes |
serverDataPropTypes |
serviceDataProps |
contractDataPropTypes |
providerDataPropTypes |
integrationDataPropTypes
>
({
    type,
    item,
    loading,
}: displayFieldsProps<T>): JSX.Element {
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
                    <LicenseDisplay navigate={navigate} t={t} values={item as licenseDataPropTypes} />
                )
            case 'server':
                return (
                    <ServerDisplay navigate={navigate} t={t} values={item as serverDataPropTypes} />
                )
            case 'service':
                return (
                    <ServiceDisplay navigate={navigate} t={t} values={item as serviceDataProps} />
                )
            case 'contract':
                return (
                    <ContractDisplay navigate={navigate} t={t} values={item as contractDataPropTypes} />
                )
            case 'provider':
                return (
                    <ProviderDisplay navigate={navigate} t={t} values={item as providerDataPropTypes} />
                )
            case 'integration':
                return (
                    <IntegrationDisplay navigate={navigate} t={t} values={item as integrationDataPropTypes} />
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
