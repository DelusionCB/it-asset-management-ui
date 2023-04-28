import React, {useState} from 'react';
import ApplicationForm from './Forms/ApplicationForm';
import FormSelection from '../CustomComponents/FormSelection';
import {Container, Row} from 'reactstrap';
import DirectoryForm from './Forms/DirectoryForm';

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
                    <div />
                    // <LicenseForm
                    // type={fieldType}
                    // isDisabled={isDisabled} />
                )
            case 'server':
                return (
                    <div />
                    // <ServerForm type={fieldType} isDisabled={isDisabled} />
                )
            case 'service':
                return (
                    <div />
                    // <ServiceForm type={fieldType} isDisabled={isDisabled} />
                )
            default:
                return (<div />)
        }
    }

    return (
        <Container>
            <Row>
                <FormSelection
                    onChange={(e) => { setFieldType(e); }}
                    selections={['application', 'directory', 'license', 'server', 'service']}
                    disabled={disabled}
                />
            </Row>
            <Row>
                {getFormFields()}
            </Row>
        </Container>
    );
}

export default FormFields;
