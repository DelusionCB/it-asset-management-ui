import React, {useState} from 'react';
import ApplicationForm from './Forms/ApplicationForm';
import ArchiveSelection from '../CustomComponents/ArchiveSelection';
import {Container, Row} from 'reactstrap';
import DirectoryForm from './Forms/DirectoryForm';
import ServiceForm from './Forms/ServiceForm';
import IntegrationForm from './Forms/IntegrationForm';
import ServerForm from './Forms/ServerForm';
import LicenseForm from './Forms/LicenseForm';
import ProviderForm from './Forms/ProviderForm';

function FormFields (): JSX.Element {
    const [fieldType, setFieldType] = useState('application')

    const [disabled, isDisabled] = useState(false)

    function getFormFields (): JSX.Element {
        switch (fieldType) {
            case 'application':
                return (
                    <ApplicationForm
                        type={fieldType}
                        isDisabled={isDisabled}
                    />
                )
            case 'directory':
                return (
                    <DirectoryForm
                        type={fieldType}
                        isDisabled={isDisabled}
                    />
                )
            case 'license':
                return (
                    <LicenseForm
                        type={fieldType}
                        isDisabled={isDisabled} />
                )
            case 'server':
                return (
                    <ServerForm
                        type={fieldType}
                        isDisabled={isDisabled}
                    />
                )
            case 'integration':
                return (
                    <IntegrationForm
                        type={fieldType}
                        isDisabled={isDisabled}
                    />
                )
            case 'service':
                return (
                    <ServiceForm
                        type={fieldType}
                        isDisabled={isDisabled}
                    />
                )
            case 'provider':
                return (
                    <ProviderForm
                        type={fieldType}
                        isDisabled={isDisabled}
                    />
                )
            default:
                return (<div />)
        }
    }

    return (
        <Container>
            <Row>
                <ArchiveSelection
                    onChange={(e) => { setFieldType(e); }}
                    selections={['application', 'directory', 'license', 'server', 'service', 'integration', 'provider']}
                    disabled={disabled}
                    label='select-archive'
                />
            </Row>
            <Row>
                {getFormFields()}
            </Row>
        </Container>
    );
}

export default FormFields;
