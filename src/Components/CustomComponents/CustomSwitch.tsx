import React from 'react';
import {Col, FormGroup, Input, Label} from 'reactstrap';
import {useTranslation} from 'react-i18next';
import './index.scss'
import {CustomSwitchProps} from './types.customcomps';

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
