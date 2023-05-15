import React, {useEffect, useState} from 'react';
import {FormGroup, Label} from 'reactstrap';
import {useTranslation} from 'react-i18next';
import client from '../../Api/Client';
import './index.scss'
import {MyOption, asyncSelectPropTypes} from '../../Types/types.customComponents';
import Select from 'react-select/base';

function AsyncSelect ({label, value, onChange, endpoint, id, placeholder, disabled, invalid, isMulti = false, isSearchable = false}: asyncSelectPropTypes): JSX.Element {
    const {t} = useTranslation()
    const [selectedValue, setValue] = useState<any>(isMulti ? [] : {})
    const [fetchedOptions, setOptions] = useState<any>([])
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        if (value !== undefined) {
            setValue(value)
        }
    })

    useEffect(() => {
        void getDataOptions()
    }, [])

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

    function onInputChange (input: string): void {
        setInputValue(input)
    }

    async function getDataOptions (): Promise<any> {
        let request
        let options
        try {
            request = await client.get(`${endpoint}`)
            options = request.data.results
            setOptions(options.map((item: any) => format(item)))
        } catch (e: any) {
            throw Error(e)
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

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const onMenuOpen = () => { setIsMenuOpen(true); };
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const onMenuClose = () => { setIsMenuOpen(false); };

    return (
        <div>
            <FormGroup>
                <Label for={id}>
                    {t(label)}
                </Label>
                <Select
                    aria-labelledby={id}
                    name={id}
                    inputId={id}
                    classNamePrefix='option-search'
                    isClearable={true}
                    value={getDefaultValue()}
                    options={fetchedOptions}
                    onChange={onChangeValue}
                    onInputChange={onInputChange}
                    inputValue={inputValue}
                    formatOptionLabel={formatOption}
                    aria-label={`${t(placeholder)}`}
                    placeholder={`${t(placeholder)}`}
                    isDisabled={disabled}
                    aria-invalid={invalid}
                    isMulti={isMulti}
                    isSearchable={isSearchable}
                    onMenuOpen={onMenuOpen}
                    onMenuClose={onMenuClose}
                    menuIsOpen={isMenuOpen}
                />
            </FormGroup>
        </div>
    )
}

export default AsyncSelect;
