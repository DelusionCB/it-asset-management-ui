import * as React from 'react';
import {Col, FormGroup, Input, Label} from 'reactstrap';
import {useTranslation} from 'react-i18next';
import './index.scss'

interface TextFieldProps {
    label: string
    validation?: object
    value?: string | undefined
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: 'text' | 'file' | 'textarea'
    id: string
    placeholder: string
    disabled: boolean
    invalid: boolean
}

function TextField ({label, validation, value, onChange, type, id, placeholder, disabled = false, invalid = false}: TextFieldProps): JSX.Element {
    const {t} = useTranslation()
    return (
        <Col className='textfield'>
            <FormGroup>
                <Label for={id}>
                    {t(label)}
                </Label>
                <Input
                    id={id}
                    disabled={disabled}
                    invalid={invalid}
                    aria-invalid={invalid}
                    name={id}
                    placeholder={`${t(placeholder)}`}
                    type={type}
                    value={value}
                    onChange={(e) => { onChange(e); }}
                />
            </FormGroup>
        </Col>
    );
}

export default TextField;
