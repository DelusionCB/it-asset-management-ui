import React, {useEffect, useState} from 'react';
import {Row} from 'reactstrap';
import {
    serviceDataProps,
} from '../../../Types/types.directories';
import {serviceDefaultValues} from '../../../Types/defaultValues';
import TextField from '../../CustomComponents/TextField';
import SearchableSelect from '../../CustomComponents/SearchableSelect';
import {
    debouncedCheck,
    handleClear,
    handleServiceChange, handleServiceSelect,
} from '../../../Utils/helpers';
import {useTranslation} from 'react-i18next';
import ActionButtons from '../../ActionButtons/ActionButtons';
import VisibilitySelector from '../../CustomComponents/VisibilitySelector';
import {formTypes} from '../../../Types/types.forms';
import StaticSelect from '../../CustomComponents/StaticSelect';
import AsyncSelect from '../../CustomComponents/AsyncSelect';

function ServiceForm ({isDisabled, type, mode, editValues}: formTypes): JSX.Element {
    const [values, setValues] = useState<serviceDataProps>(serviceDefaultValues)
    const {t} = useTranslation()

    function handleChange (e: React.ChangeEvent<HTMLInputElement>): void {
        handleServiceChange(e, values, setValues);
    }

    function handleSelect (value: {} | [] | undefined | null, id: string): void {
        handleServiceSelect(value, id, values, setValues);
    }

    useEffect(() => {
        if (Object.keys(editValues).length !== 0 && (mode === 'edit' || mode === 'copy')) {
            setValues(editValues)
        }
        if (Object.keys(editValues).length !== 0 && mode === 'create') {
            setValues(serviceDefaultValues)
        }
    }, [editValues, mode])

    useEffect(() => {
        if (mode !== 'edit') {
            // Invoke debouncedCheck with updated values
            debouncedCheck(values, serviceDefaultValues, isDisabled);

            // Cleanup function to cancel debounce on unmount
            return () => {
                debouncedCheck.cancel();
            };
        }
    }, [values]);

    useEffect(() => {
        if (values.visibility === 'hidden' || values.visibility === 'draft') {
            handleClear<serviceDataProps>(
                values,
                ['contract', 'provider'],
                ['related_services', 'required_installations'],
                setValues,
            )
        }
    }, [values.visibility])

    return (
        <>
            <Row>
                <h1>{t(`service.${mode}`)}</h1>
            </Row>
            <Row>
                <h2>{t('service.visibility')}</h2>
            </Row>
            <Row>
                <VisibilitySelector
                    value={values.visibility}
                    onChange={(e) => { handleChange(e); }}
                    disabled={false}
                    id='visibility'
                    label={'service.values.visibility'}
                    invalid={false}
                    options={['draft', 'hidden', 'published']}
                    placeholder={'placeholder.visibility'}
                />
            </Row>
            <Row>
                <h2>{t('service.description')}</h2>
            </Row>
            <Row>
                <TextField
                    id='name'
                    disabled={false}
                    invalid={false}
                    label={'service.values.name'}
                    onChange={(e) => { handleChange(e); }}
                    placeholder={'placeholder.name'}
                    value={values.name}
                    type='text'
                />
            </Row>
            <Row>
                <StaticSelect
                    id={'service_status'}
                    disabled={false}
                    invalid={false}
                    label={'service.values.service_status'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.service_status'}
                    value={values.service_status}
                    options={['in_deployment', 'in_use', 'unused', 'shutdown', 'archived', 'undefined', 'unreleased', 'deleted']}
                />
            </Row>
            <Row>
                <TextField
                    id={'description'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'service.values.description'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.description'}
                    value={values.description}
                />
            </Row>
            <Row>
                <SearchableSelect
                    label={'service.values.contract'}
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
            <Row>
                <StaticSelect
                    id={'criticality'}
                    disabled={false}
                    invalid={false}
                    label={'service.values.criticality'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.criticality'}
                    value={values.criticality}
                    options={['critical', 'high', 'normal', 'low', 'noclass']}
                />
            </Row>
            <Row>
                <TextField
                    id={'service_level'}
                    disabled={false}
                    invalid={false}
                    type='text'
                    label={'service.values.service_level'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.service_level'}
                    value={values.service_level}
                />
            </Row>
            <Row>
                <StaticSelect
                    id={'service_type'}
                    disabled={false}
                    invalid={false}
                    label={'service.values.service_type'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.service_type'}
                    value={values.service_type}
                    options={['onpremises', 'iaas', 'paas', 'caas', 'faas', 'saas', 'other']}
                />
            </Row>
            <Row>
                <TextField
                    id={'limitations'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'service.values.limitations'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.limitations'}
                    value={values.limitations}
                />
            </Row>
            <Row>
                <SearchableSelect
                    label={'service.values.related_services'}
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
                    label={'service.values.required_installations'}
                    endpoint='application'
                    id={'required_installations'}
                    placeholder={'placeholder.required_installations'}
                    disabled={values.visibility === 'hidden' || values.visibility === 'draft'}
                    invalid={false}
                    isMulti={true}
                    value={values.required_installations}
                    onChange={(value, id) => { handleSelect(value, id); }}
                />
            </Row>
            <Row>
                <h2>{t('service.responsibility')}</h2>
            </Row>
            <Row>
                <TextField
                    id={'product_owner'}
                    disabled={false}
                    invalid={false}
                    type='text'
                    label={'service.values.product_owner'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.product_owner'}
                    value={values.product_owner}
                />
            </Row>
            <Row>
                <TextField
                    id={'service_holder'}
                    disabled={false}
                    invalid={false}
                    type='text'
                    label={'service.values.service_holder'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.service_holder'}
                    value={values.service_holder}
                />
            </Row>
            <Row>
                <SearchableSelect
                    label={'service.values.provider'}
                    endpoint='provider'
                    id={'provider'}
                    placeholder={'placeholder.provider'}
                    disabled={values.visibility === 'hidden' || values.visibility === 'draft'}
                    invalid={false}
                    isMulti={false}
                    value={values.provider}
                    onChange={(value, id) => { handleSelect(value, id); }}
                />
            </Row>
            <Row>
                <TextField
                    id={'provider_role'}
                    disabled={false}
                    invalid={false}
                    type='text'
                    label={'service.values.provider_role'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.provider_role'}
                    value={values.provider_role}
                />
            </Row>
            <Row>
                <TextField
                    id={'provider_contact'}
                    disabled={false}
                    invalid={false}
                    type='text'
                    label={'service.values.provider_contact'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.provider_contact'}
                    value={values.provider_contact}
                />
            </Row>
            <Row>
                <TextField
                    id={'additional_contacts'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'service.values.additional_contacts'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.additional_contacts'}
                    value={values.additional_contacts}
                />
            </Row>
            <Row>
                <h2>{t('service.extra')}</h2>
            </Row>
            <Row>
                <AsyncSelect
                    label={'service.values.customership'}
                    endpoint='customership'
                    id={'customership'}
                    placeholder={'placeholder.customership'}
                    disabled={false}
                    invalid={false}
                    isMulti={true}
                    isSearchable={false}
                    value={values.customership}
                    onChange={(value, id) => { handleSelect(value, id); }}
                />
            </Row>
            <Row>
                <StaticSelect
                    id={'validity_type'}
                    disabled={false}
                    invalid={false}
                    label={'service.values.validity_type'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.validity_type'}
                    value={values.validity_type}
                    options={['ongoing', 'temporary']}
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

export default ServiceForm;
