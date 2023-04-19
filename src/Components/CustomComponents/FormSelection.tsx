import React, {useEffect, useState} from 'react';
import {FormGroup, Input, Label} from 'reactstrap';
import {useTranslation} from 'react-i18next';
import './index.scss'

interface CustomSelectionProps {
    onChange: (e: string) => void
    selections: string[]
    disabled: boolean
}

function FormSelection ({onChange, selections, disabled = false}: CustomSelectionProps): JSX.Element {
    const {t} = useTranslation()
    const [selected, setSelected] = useState('application')

    function changeSelection (e: React.ChangeEvent<HTMLInputElement>): void {
        setSelected(e.target.name)
    }

    useEffect(() => {
        onChange(selected)
    }, [selected])

    function getSelection (): JSX.Element[] {
        return selections.map((value, index) => {
            return (
                <div key={index}>
                    <FormGroup check>
                        <Label check for={`${value}-${index}`}>
                            {t(`radios.${value}`)}
                        </Label>
                        <Input
                            aria-disabled={disabled}
                            disabled={disabled}
                            id={`${value}-${index}`}
                            name={value}
                            checked={value === selected}
                            type='radio'
                            onChange={(e) => {
                                changeSelection(e);
                            }}
                        />
                    </FormGroup>
                </div>
            )
        })
    }

    return (
        <div className='selection-wrapper'>
            <div className='selection-header'>
                <h1>Valitse arkistoinnin tyyppi</h1>
            </div>
            <div className='selection-radios'>
                {getSelection()}
            </div>
        </div>
    );
}

export default FormSelection;
