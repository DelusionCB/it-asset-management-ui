import * as React from 'react';
import {Col, FormGroup, Input, Label} from 'reactstrap';
import {useTranslation} from 'react-i18next';
import './index.scss'
import {staticSelectPropTypes} from '../../Types/types.customComponents';

function StaticSelect ({label, validation, value, onChange, options, id, placeholder, disabled = false, invalid = false}: staticSelectPropTypes): JSX.Element {
    const {t} = useTranslation()

    function getOptions (options: string[]): JSX.Element[] {
        return options.map((value, index) => {
            return (
                <option key={index} value={value}>{t(`select.${value}`)}</option>
            )
        })
    }

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
                    type='select'
                    value={value}
                    onChange={(e) => { onChange(e); }}
                >
                    {getOptions(options)}
                </Input>
            </FormGroup>
        </Col>
    );
}

export default StaticSelect;
