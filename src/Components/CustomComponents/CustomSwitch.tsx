import React from 'react';
import {Col, FormGroup, Input, Label} from 'reactstrap';
import {useTranslation} from 'react-i18next';
import './index.scss'

interface CustomSwitchProps {
    value: boolean
    label: string
    validation?: object
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    id: string
    disabled: boolean
    invalid?: boolean

}

function CSwitch ({value, label, validation, onChange, id, disabled, invalid}: CustomSwitchProps): JSX.Element {
    const {t} = useTranslation()

    return (
        <Col className='switches'>
            <FormGroup switch>
                <Label check for={id}>
                    {t(label)}
                </Label>
                <Input
                    aria-checked={value}
                    id={id}
                    disabled={disabled}
                    invalid={invalid}
                    aria-invalid={invalid}
                    name={id}
                    type='switch'
                    checked={value}
                    onChange={(e) => { onChange(e); }}
                />
            </FormGroup>
        </Col>
    );
}

export default CSwitch;
