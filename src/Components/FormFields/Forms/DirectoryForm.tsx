import React, {useEffect, useState} from 'react';
import {Row} from 'reactstrap';
import {
    extendedDirectoryDataProps,
} from '../../../Types/types.directories';
import {directoryDefaultValues} from '../../../Types/defaultValues';
import TextField from '../../CustomComponents/TextField';
import SearchableSelect from '../../CustomComponents/SearchableSelect';
import {handleDirectoryChange, handleDirectorySelect, debouncedCheck, handleClear} from '../../../Utils/helpers';
import {useTranslation} from 'react-i18next';
import ActionButtons from '../../ActionButtons/ActionButtons';
import VisibilitySelector from '../../CustomComponents/VisibilitySelector';
import {formTypes} from '../../../Types/types.forms';

function DirectoryForm ({isDisabled, type, mode, editValues}: formTypes): JSX.Element {
    const [values, setValues] = useState<extendedDirectoryDataProps>(directoryDefaultValues)
    const {t} = useTranslation()

    function handleChange (e: React.ChangeEvent<HTMLInputElement>): void {
        handleDirectoryChange(e, values, setValues);
    }

    function handleSelect (value: {} | [] | undefined | null, id: string): void {
        handleDirectorySelect(value, id, values, setValues);
    }

    useEffect(() => {
        if (Object.keys(editValues).length !== 0 && (mode === 'edit' || mode === 'copy')) {
            setValues(editValues)
        }
        if (Object.keys(editValues).length !== 0 && mode === 'create') {
            setValues(directoryDefaultValues)
        }
    }, [editValues, mode])

    useEffect(() => {
        if (mode !== 'edit') {
            // Invoke debouncedCheck with updated values
            debouncedCheck(values, directoryDefaultValues, isDisabled);

            // Cleanup function to cancel debounce on unmount
            return () => {
                debouncedCheck.cancel();
            };
        }
    }, [values]);

    useEffect(() => {
        if (values.visibility === 'hidden' || values.visibility === 'draft') {
            handleClear<extendedDirectoryDataProps>(
                values,
                [],
                ['applications', 'servers', 'services'],
                setValues,
            )
        }
    }, [values.visibility])

    return (
        <>
            <Row>
                <h1>{t(`directory.${mode}`)}</h1>
            </Row>
            <Row>
                <h2>{t('directory.visibility')}</h2>
            </Row>
            <Row>
                <VisibilitySelector
                    value={values.visibility}
                    onChange={(e) => { handleChange(e); }}
                    disabled={false}
                    id='visibility'
                    label={'values.visibility'}
                    invalid={false}
                    options={['draft', 'hidden', 'published']}
                    placeholder={'placeholder.visibility'}
                />
            </Row>
            <Row>
                <h2>{t('directory.description')}</h2>
            </Row>
            <Row>
                <TextField
                    id='name'
                    disabled={false}
                    invalid={false}
                    label={'directory.values.name'}
                    onChange={(e) => { handleChange(e); }}
                    placeholder={'placeholder.name'}
                    value={values.name}
                    type='text'
                />
            </Row>
            <Row>
                <TextField
                    id={'description'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'directory.values.description'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.description'}
                    value={values.description}
                />
            </Row>
            <Row>
                <h2>{t('directory.dependency')}</h2>
            </Row>
            <Row>
                <SearchableSelect
                    label={'directory.values.applications'}
                    endpoint='application'
                    id={'applications'}
                    placeholder={'placeholder.applications'}
                    disabled={values.visibility === 'hidden' || values.visibility === 'draft'}
                    invalid={false}
                    isMulti={true}
                    value={values.applications}
                    onChange={(value, id) => { handleSelect(value, id); }}
                />
            </Row>
            <Row>
                <SearchableSelect
                    label={'directory.values.servers'}
                    endpoint='server'
                    id={'servers'}
                    placeholder={'placeholder.servers'}
                    disabled={values.visibility === 'hidden' || values.visibility === 'draft'}
                    invalid={false}
                    isMulti={true}
                    value={values.servers}
                    onChange={(value, id) => { handleSelect(value, id); }}
                />
            </Row>
            <Row>
                <SearchableSelect
                    label={'directory.values.services'}
                    endpoint='service'
                    id={'services'}
                    placeholder={'placeholder.services'}
                    disabled={values.visibility === 'hidden' || values.visibility === 'draft'}
                    invalid={false}
                    isMulti={true}
                    value={values.services}
                    onChange={(value, id) => { handleSelect(value, id); }}
                />
            </Row>
            <ActionButtons
                values={values}
                type={type}
                mode={mode}
            />
        </>
    );
}

export default DirectoryForm;
