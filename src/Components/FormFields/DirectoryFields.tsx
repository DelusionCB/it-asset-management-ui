import React, {useEffect, useState} from 'react';
import {Row} from 'reactstrap';
import {
    directoryDefaultValues,
    extendedDirectoryDataProps,
} from '../../Types/types.directories';
import TextField from '../CustomComponents/TextField';
import CSelect from '../CustomComponents/CustomSelect';
import {handleDirectoryChange, handleDirectorySelect, debouncedCheck} from '../../Utils/helpers';
import {useTranslation} from 'react-i18next';
import ActionButtons from '../ActionButtons/ActionButtons';

interface FieldsStates {
    isDisabled: (is: boolean) => void
    type: string
}

function DirectoryFields ({isDisabled, type}: FieldsStates): JSX.Element {
    const [values, setValues] = useState<extendedDirectoryDataProps>(directoryDefaultValues)
    const {t} = useTranslation()

    function handleChange (e: React.ChangeEvent<HTMLInputElement>): void {
        handleDirectoryChange(e, values, setValues);
    }

    function handleSelect (value: {} | [] | undefined | null, id: string): void {
        handleDirectorySelect(value, id, values, setValues);
    }

    useEffect(() => {
        // Invoke debouncedCheck with updated values and directoryDefaultValues
        debouncedCheck(values, directoryDefaultValues, isDisabled);

        // Cleanup function to cancel the debounce on unmount
        return () => {
            debouncedCheck.cancel();
        };
    }, [values]);

    return (
        <>
            <Row>
                <h1>{t('directory.create')}</h1>
            </Row>
            <Row>
                <h2>{t('directory.description')}</h2>
            </Row>
            <Row>
                <TextField
                    id='name'
                    disabled={false}
                    invalid={false}
                    label={'values.name'}
                    onChange={(e) => { handleChange(e); }}
                    placeholder={'placeholder.name'}
                    value={values.name}
                />
            </Row>
            <Row>
                <TextField
                    id={'description'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'values.description'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.description'}
                    value={values.description}
                />
            </Row>
            <Row>
                <h2>{t('directory.dependency')}</h2>
            </Row>
            <Row>
                <CSelect
                    label={'values.applications'}
                    endpoint='application'
                    id={'applications'}
                    placeholder={'placeholder.applications'}
                    disabled={false}
                    invalid={false}
                    isMulti={true}
                    value={values.applications}
                    onChange={(value, id) => { handleSelect(value, id); }}
                />
            </Row>
            <Row>
                <CSelect
                    label={'values.servers'}
                    endpoint='server'
                    id={'servers'}
                    placeholder={'placeholder.servers'}
                    disabled={false}
                    invalid={false}
                    isMulti={true}
                    value={values.servers}
                    onChange={(value, id) => { handleSelect(value, id); }}
                />
            </Row>
            <Row>
                <CSelect
                    label={'values.services'}
                    endpoint='service'
                    id={'services'}
                    placeholder={'placeholder.services'}
                    disabled={false}
                    invalid={false}
                    isMulti={true}
                    value={values.services}
                    onChange={(value, id) => { handleSelect(value, id); }}
                />
            </Row>
            <ActionButtons
                values={values}
                actions={['create']}
                type={type}
            />
        </>
    );
}

export default DirectoryFields;
