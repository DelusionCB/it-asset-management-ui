import React, {useState} from 'react';
import ApplicationFields from './ApplicationFields';
import FormSelection from '../CustomComponents/FormSelection';
import {Container, Row} from 'reactstrap';
import DirectoryFields from './DirectoryFields';

function FormFields (): JSX.Element {
    const [fieldType, setFieldType] = useState('application')

    const [disabled, isDisabled] = useState(false)

    function getEditFields (): JSX.Element {
        switch (fieldType) {
            case 'application':
                return (
                    <ApplicationFields
                        type={fieldType}
                        isDisabled={isDisabled}
                    />
                )
            case 'directory':
                return (
                    <DirectoryFields
                        type={fieldType}
                        isDisabled={isDisabled}
                    />
                )
            case 'license':
                return (
                    <div />
                    // <LicenseFields isDisabled={isDisabled} />
                )
            case 'server':
                return (
                    <div />
                    // <ServerFields isDisabled={isDisabled} />
                )
            case 'service':
                return (
                    <div />
                    // <ServiceFields isDisabled={isDisabled} />
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
                {getEditFields()}
            </Row>
        </Container>
    );
}

export default FormFields;
