import React, {useEffect, useState} from 'react';
import ApplicationForm from './Forms/ApplicationForm';
import ArchiveSelection from '../CustomComponents/ArchiveSelection';
import {Container, Row, Spinner} from 'reactstrap';
import DirectoryForm from './Forms/DirectoryForm';
import ServiceForm from './Forms/ServiceForm';
import IntegrationForm from './Forms/IntegrationForm';
import ServerForm from './Forms/ServerForm';
import LicenseForm from './Forms/LicenseForm';
import ProviderForm from './Forms/ProviderForm';
import {setData} from '../../Utils/helpers';

interface formPropTypes {
    loading: boolean
    mode: string
    params: any
}

function FormFields ({loading, mode, params}: formPropTypes): JSX.Element {
    const [fieldType, setFieldType] = useState('application')
    const [disabled, isDisabled] = useState(false)
    const [editValues, setEditValues] = useState<any>({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        if (!loading && (mode === 'edit' || mode === 'copy')) {
            setData(setEditValues, setFieldType, setLoading, params, mode)
        } else if (!loading && mode === 'create') {
            setLoading(false)
        }
    }, [mode])

    function getFormFields (): JSX.Element {
        switch (fieldType) {
            case 'application':
                return (
                    <ApplicationForm
                        type={fieldType}
                        isDisabled={isDisabled}
                        mode={mode}
                        editValues={editValues}
                    />
                )
            case 'directory':
                return (
                    <DirectoryForm
                        type={fieldType}
                        isDisabled={isDisabled}
                        mode={mode}
                        editValues={editValues}
                    />
                )
            case 'license':
                return (
                    <LicenseForm
                        type={fieldType}
                        isDisabled={isDisabled}
                        mode={mode}
                        editValues={editValues}
                    />
                )
            case 'server':
                return (
                    <ServerForm
                        type={fieldType}
                        isDisabled={isDisabled}
                        mode={mode}
                        editValues={editValues}
                    />
                )
            case 'integration':
                return (
                    <IntegrationForm
                        type={fieldType}
                        isDisabled={isDisabled}
                        mode={mode}
                        editValues={editValues}
                    />
                )
            case 'service':
                return (
                    <ServiceForm
                        type={fieldType}
                        isDisabled={isDisabled}
                        mode={mode}
                        editValues={editValues}
                    />
                )
            case 'provider':
                return (
                    <ProviderForm
                        type={fieldType}
                        isDisabled={isDisabled}
                        mode={mode}
                        editValues={editValues}
                    />
                )
            default:
                return (<div/>)
        }
    }
    if (isLoading && mode === '') {
        return (
            <Spinner animation="border" role="status">
                    Ladataan...
            </Spinner>
        )
    } else {
        return (
            <Container>
                {mode === 'create' &&
                    <Row>
                        <ArchiveSelection
                            onChange={(e) => {
                                setFieldType(e);
                            }}
                            selections={['application', 'directory', 'license', 'server', 'service', 'integration', 'provider']}
                            disabled={disabled}
                            label='select-archive'
                        />
                    </Row>
                }
                <Row>
                    {!isLoading && getFormFields()}
                </Row>
            </Container>
        );
    }
}

export default FormFields;
