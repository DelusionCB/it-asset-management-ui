import React, {useEffect, useState} from 'react';
import {FormGroup, Label} from 'reactstrap';
import {useTranslation} from 'react-i18next';
import client from '../../Api/Client';
import AsyncSelect from 'react-select/async';
import './index.scss'
import {CustomSelectProps, MyOption} from './types.customcomps';

function CSelect ({label, value, onChange, endpoint, id, placeholder, disabled, invalid, isMulti = false}: CustomSelectProps): JSX.Element {
    const {t} = useTranslation()
    const [selectedValue, setValue] = useState<any>(isMulti ? [] : {})

    useEffect(() => {
        if (value !== undefined) {
            setValue(value)
        }
    })

    function onChangeValue (value?: MyOption | readonly MyOption[] | null): void {
        if (!isMulti) {
            if (value === null) {
                setValue({})
            } else {
                setValue(value)
                onChange(value, id)
            }
        } else {
            if (value === null) {
                setValue([])
            } else {
                setValue(value)
                onChange(value, id)
            }
        }
    }

    async function getDataOptions (input: string): Promise<any> {
        const queryParams = new URLSearchParams({
            name: `${input}`,
        }).toString()

        let request
        let options
        try {
            request = await client.get(`${endpoint}/?${queryParams}`)
            options = request.data.results
            return options.map((item: object) => {
                return ({
                    ...format(item),
                })
            })
        } catch (e: any) {
            throw Error(e)
        }
    }

    async function getOptions (input: string): Promise<any> {
        if (input.length > 2) {
            return await getDataOptions(input);
        }
    }

    function format (item: any): object {
        return (
            {
                value: item.base_id,
                label: item.name,
            }
        )
    }

    function getDefaultValue (): MyOption | MyOption[] | null {
        if (!selectedValue || Object.keys(selectedValue).length === 0) {
            return null
        }
        if (isMulti) {
            return selectedValue.map((item: any) => {
                return ({
                    label: item.label,
                    value: item.value,
                })
            })
        } else {
            return ({
                label: selectedValue.label,
                value: selectedValue.value,
            })
        }
    }

    function formatOption (item: MyOption): JSX.Element {
        return (
            <React.Fragment>
                {item.label}
            </React.Fragment>
        )
    }

    function optionsMessageValue (value: any): any {
        return value.inputValue.length > 2 ? t('search-no-results') : t('search-minimum-length')
    }

    return (
        <div>
            <FormGroup>
                <Label for={id}>
                    {t(label)}
                </Label>
                <AsyncSelect
                    aria-labelledby={id}
                    name={id}
                    inputId={id}
                    classNamePrefix='option-search'
                    isClearable={true}
                    value={getDefaultValue()}
                    loadOptions={getOptions}
                    onChange={onChangeValue}
                    formatOptionLabel={formatOption}
                    noOptionsMessage={(inputValue) => optionsMessageValue(inputValue)}
                    loadingMessage={() => `${t('loading')}`}
                    aria-label={`${t(placeholder)}`}
                    placeholder={`${t(placeholder)}`}
                    isDisabled={disabled}
                    aria-invalid={invalid}
                    isMulti={isMulti}
                />
            </FormGroup>
        </div>
    )
}

export default CSelect;
