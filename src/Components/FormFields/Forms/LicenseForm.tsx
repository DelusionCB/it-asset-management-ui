import React, {useEffect, useState} from 'react';
import {Row} from 'reactstrap';
import {formTypes} from '../../../Types/types.forms';
import {licenseDataPropTypes} from '../../../Types/types.directories';
import {licenseDefaultValues} from '../../../Types/defaultValues';
import {useTranslation} from 'react-i18next';
import {debouncedCheck, handleLicenseChange, handleLicenseSelect, handleClear} from '../../../Utils/helpers';
import VisibilitySelector from '../../CustomComponents/VisibilitySelector';
import TextField from '../../CustomComponents/TextField';
import SearchableSelect from '../../CustomComponents/SearchableSelect';
import ActionButtons from '../../ActionButtons/ActionButtons';
import StaticSelect from '../../CustomComponents/StaticSelect';

function LicenseForm ({isDisabled, type, mode, editValues}: formTypes): JSX.Element {
    const [values, setValues] = useState<licenseDataPropTypes>(licenseDefaultValues)
    const {t} = useTranslation()

    function handleChange (e: React.ChangeEvent<HTMLInputElement>): void {
        handleLicenseChange(e, values, setValues);
    }

    function handleSelect (value: {} | [] | undefined | null, id: string): void {
        handleLicenseSelect(value, id, values, setValues);
    }

    useEffect(() => {
        if (Object.keys(editValues).length !== 0 && (mode === 'edit' || mode === 'copy')) {
            setValues(editValues)
        }
        if (Object.keys(editValues).length !== 0 && mode === 'create') {
            setValues(licenseDefaultValues)
        }
    }, [editValues, mode])

    useEffect(() => {
        if (mode !== 'edit') {
            // Invoke debouncedCheck with updated values
            debouncedCheck(values, licenseDefaultValues, isDisabled);

            // Cleanup function to cancel debounce on unmount
            return () => {
                debouncedCheck.cancel();
            };
        }
    }, [values]);

    useEffect(() => {
        if (values.visibility === 'hidden' || values.visibility === 'draft') {
            // Clear these fields if visibility is X -value
            handleClear<licenseDataPropTypes>(
                values,
                ['contract'],
                [],
                setValues,
            )
        }
    }, [values.visibility])

    return (
        <>
            <Row>
                <h1>{t(`license.${mode}`)}</h1>
            </Row>
            <Row>
                <h2>{t('license.visibility')}</h2>
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
                <h2>{t('license.description')}</h2>
            </Row>
            <Row>
                <TextField
                    id='name'
                    disabled={false}
                    invalid={false}
                    label={'license.values.name'}
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
                    label={'license.values.description'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.description'}
                    value={values.description}
                />
            </Row>
            <Row>
                <TextField
                    id={'valid_from_date'}
                    disabled={false}
                    invalid={false}
                    type='date'
                    label={'license.values.valid_from_date'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.valid_from_date'}
                    value={values.valid_from_date}
                />
            </Row>
            <Row>
                <TextField
                    id={'valid_until_date'}
                    disabled={false}
                    invalid={false}
                    type='date'
                    label={'license.values.valid_until_date'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.valid_until_date'}
                    value={values.valid_until_date}
                />
            </Row>
            <Row>
                <TextField
                    id={'audits'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'license.values.audits'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.audits'}
                    value={values.audits}
                />
            </Row>
            <Row>
                <StaticSelect
                    id={'license_type'}
                    disabled={false}
                    invalid={false}
                    label={'license.values.license_type'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.license_type'}
                    value={values.license_type}
                    options={['ea', 'ees', 'sa', 'sce', 'oracle', 'other']}
                />
            </Row>
            <Row>
                <SearchableSelect
                    label={'license.values.contract'}
                    endpoint='contract'
                    id={'contract'}
                    placeholder={'placeholder.contract'}
                    disabled={values.visibility === 'hidden' || values.visibility === 'draft'}
                    invalid={false}
                    isMulti={false}
                    value={values.contract}
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

export default LicenseForm;
