import React, {useEffect, useState} from 'react';
import {Row} from 'reactstrap';
import {formTypes} from '../../../Types/types.forms';
import {providerDataPropTypes} from '../../../Types/types.directories';
import {providerDefaultValues} from '../../../Types/defaultValues';
import {useTranslation} from 'react-i18next';
import {debouncedCheck, handleProviderChange, handleProviderSelect, handleClear} from '../../../Utils/helpers';
import VisibilitySelector from '../../CustomComponents/VisibilitySelector';
import TextField from '../../CustomComponents/TextField';
import StaticSelect from '../../CustomComponents/StaticSelect';
import SearchableSelect from '../../CustomComponents/SearchableSelect';
import ActionButtons from '../../ActionButtons/ActionButtons';

function ProviderForm ({isDisabled, type, mode, editValues}: formTypes): JSX.Element {
    const [values, setValues] = useState<providerDataPropTypes>(providerDefaultValues)
    const {t} = useTranslation()

    function handleChange (e: React.ChangeEvent<HTMLInputElement>): void {
        handleProviderChange(e, values, setValues);
    }

    function handleSelect (value: {} | [] | undefined | null, id: string): void {
        handleProviderSelect(value, id, values, setValues);
    }

    useEffect(() => {
        if (Object.keys(editValues).length !== 0 && mode === 'edit') {
            setValues(editValues)
        }
    }, [editValues, mode])

    useEffect(() => {
        if (mode !== 'edit') {
            // Invoke debouncedCheck with updated values
            debouncedCheck(values, providerDefaultValues, isDisabled);

            // Cleanup function to cancel debounce on unmount
            return () => {
                debouncedCheck.cancel();
            };
        }
    }, [values]);

    useEffect(() => {
        if (values.visibility === 'hidden' || values.visibility === 'draft') {
            // Clear these fields if visibility is X -value
            handleClear<providerDataPropTypes>(
                values,
                [],
                ['related_services', 'related_applications', 'related_contracts'],
                setValues,
            )
        }
    }, [values.visibility])

    return (
        <>
            <Row>
                <h1>{t(`provider.${mode}`)}</h1>
            </Row>
            <Row>
                <h2>{t('provider.visibility')}</h2>
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
                <h2>{t('provider.description')}</h2>
            </Row>
            <Row>
                <TextField
                    id='name'
                    disabled={false}
                    invalid={false}
                    label={'provider.values.name'}
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
                    label={'provider.values.description'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.description'}
                    value={values.description}
                />
            </Row>
            <Row>
                <TextField
                    id={'business_id'}
                    disabled={false}
                    invalid={false}
                    type='text'
                    label={'provider.values.business_id'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.business_id'}
                    value={values.business_id}
                />
            </Row>
            <Row>
                <StaticSelect
                    id={'provider_type'}
                    disabled={false}
                    invalid={false}
                    label={'provider.values.provider_type'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.provider_type'}
                    value={values.provider_type}
                    options={['framework', 'inhouse']}
                />
            </Row>
            <Row>
                <h2>{t('provider.contacts')}</h2>
            </Row>
            <Row>
                <TextField
                    id={'full_address'}
                    disabled={false}
                    invalid={false}
                    type='text'
                    label={'provider.values.full_address'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.full_address'}
                    value={values.full_address}
                />
            </Row>
            <Row>
                <TextField
                    id={'switch_phone'}
                    disabled={false}
                    invalid={false}
                    type='text'
                    label={'provider.values.switch_phone'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.switch_phone'}
                    value={values.switch_phone}
                />
            </Row>
            <Row>
                <TextField
                    id={'general_email'}
                    disabled={false}
                    invalid={false}
                    type='email'
                    label={'provider.values.general_email'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.general_email'}
                    value={values.general_email}
                />
            </Row>
            <Row>
                <TextField
                    id={'support_phone'}
                    disabled={false}
                    invalid={false}
                    type='text'
                    label={'provider.values.support_phone'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.support_phone'}
                    value={values.support_phone}
                />
            </Row>
            <Row>
                <TextField
                    id={'support_email'}
                    disabled={false}
                    invalid={false}
                    type='email'
                    label={'provider.values.support_email'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.support_email'}
                    value={values.support_email}
                />
            </Row>
            <Row>
                <TextField
                    id={'additional_contact'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'provider.values.additional_contact'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.additional_contact'}
                    value={values.additional_contact}
                />
            </Row>
            <Row>
                <h2>{t('provider.dependency')}</h2>
            </Row>
            <Row>
                <SearchableSelect
                    label={'provider.values.related_services'}
                    endpoint='service'
                    id={'related_services'}
                    placeholder={'placeholder.related_services'}
                    disabled={values.visibility === 'hidden' || values.visibility === 'draft'}
                    invalid={false}
                    isMulti={true}
                    value={values.related_services}
                    onChange={(value, id) => { handleSelect(value, id); }}
                />
            </Row>
            <Row>
                <SearchableSelect
                    label={'provider.values.related_applications'}
                    endpoint='application'
                    id={'related_applications'}
                    placeholder={'placeholder.related_applications'}
                    disabled={values.visibility === 'hidden' || values.visibility === 'draft'}
                    invalid={false}
                    isMulti={true}
                    value={values.related_applications}
                    onChange={(value, id) => { handleSelect(value, id); }}
                />
            </Row>
            <Row>
                <SearchableSelect
                    label={'provider.values.related_contracts'}
                    endpoint='contract'
                    id={'related_contracts'}
                    placeholder={'placeholder.related_contracts'}
                    disabled={values.visibility === 'hidden' || values.visibility === 'draft'}
                    invalid={false}
                    isMulti={true}
                    value={values.related_contracts}
                    onChange={(value, id) => { handleSelect(value, id); }}
                />
            </Row>
            <Row>
                <TextField
                    id={'provider_user_contact'}
                    disabled={false}
                    invalid={false}
                    type='text'
                    label={'provider.values.provider_user_contact'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.provider_user_contact'}
                    value={values.provider_user_contact}
                />
            </Row>
            <Row>
                <h2>{t('provider.extra')}</h2>
            </Row>
            <Row>
                <TextField
                    id={'extra_url'}
                    disabled={false}
                    invalid={false}
                    type='text'
                    label={'provider.values.extra_url'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.extra_url'}
                    value={values.extra_url}
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

export default ProviderForm;
