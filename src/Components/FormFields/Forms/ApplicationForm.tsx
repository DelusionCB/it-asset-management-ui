import React, {useEffect, useState} from 'react';
import {extendedApplicationDataProps} from '../../../Types/types.directories';
import {appDefaultValues} from '../../../Types/defaultValues';
import TextField from '../../CustomComponents/TextField';
import {Row} from 'reactstrap';
import SearchableSelect from '../../CustomComponents/SearchableSelect';
import CSwitch from '../../CustomComponents/CustomSwitch';
import {
    debouncedCheck,
    handleApplicationChange,
    handleApplicationSelect, handleClear,
} from '../../../Utils/helpers';
import {useTranslation} from 'react-i18next';
import ActionButtons from '../../ActionButtons/ActionButtons';
import VisibilitySelector from '../../CustomComponents/VisibilitySelector';
import {formTypes} from '../../../Types/types.forms';
import StaticSelect from '../../CustomComponents/StaticSelect';
import AsyncSelect from '../../CustomComponents/AsyncSelect';

function ApplicationForm ({isDisabled, type, mode, editValues}: formTypes): JSX.Element {
    const [values, setValues] = useState<extendedApplicationDataProps>(appDefaultValues)
    const {t} = useTranslation()

    function handleChange (e: React.ChangeEvent<HTMLInputElement>, isSwitch: boolean = false): void {
        handleApplicationChange(e, isSwitch, values, setValues);
    }

    function handleSelect (value: {} | [] | undefined | null, id: string): void {
        handleApplicationSelect(value, id, values, setValues);
    }

    useEffect(() => {
        if (Object.keys(editValues).length !== 0 && (mode === 'edit' || mode === 'copy')) {
            setValues(editValues)
        }
        if (Object.keys(editValues).length !== 0 && mode === 'create') {
            setValues(appDefaultValues)
        }
    }, [editValues, mode])

    useEffect(() => {
        if (mode !== 'edit') {
            // Invoke debouncedCheck with updated values
            debouncedCheck(values, appDefaultValues, isDisabled);

            // Cleanup function to cancel debounce on unmount
            return () => {
                debouncedCheck.cancel();
            };
        }
    }, [values]);

    useEffect(() => {
        if (values.visibility === 'hidden' || values.visibility === 'draft') {
            // Clear these fields if visibility is X -value
            handleClear<extendedApplicationDataProps>(
                values,
                ['contract', 'license', 'provider'],
                ['service_dependency', 'integration', 'application_dependency', 'installed_server', 'customership'],
                setValues,
            )
        }
    }, [values.visibility])

    return (
        <>
            <Row>
                <h1>{t(`application.${mode}`)}</h1>
            </Row>
            <Row>
                <h2>{t('application.visibility')}</h2>
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
                <h2>{t('application.description')}</h2>
            </Row>
            <Row>
                <TextField
                    id='name'
                    disabled={false}
                    invalid={false}
                    label={'application.values.name'}
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
                    label={'application.values.description'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.description'}
                    value={values.description}
                />
            </Row>
            <Row>
                <StaticSelect
                    id={'classification'}
                    disabled={false}
                    invalid={false}
                    label={'application.values.classification'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.classification'}
                    value={values.classification}
                    options={['tosi', 'tori', 'infra']}
                />
            </Row>
            <Row>
                <AsyncSelect
                    label={'application.values.customership'}
                    endpoint='customership'
                    id={'customership'}
                    placeholder={'placeholder.customership'}
                    disabled={values.visibility === 'hidden' || values.visibility === 'draft'}
                    invalid={false}
                    isMulti={true}
                    isSearchable={false}
                    value={values.customership}
                    onChange={(value, id) => { handleSelect(value, id); }}
                />
            </Row>
            <Row>
                <CSwitch
                    id={'person_register'}
                    disabled={false}
                    invalid={false}
                    value={values.person_register}
                    label={'application.values.person_register'}
                    onChange={(e) => { handleChange(e, true) }}
                />
            </Row>
            <Row>
                <CSwitch
                    id={'personal_info_logging'}
                    disabled={false}
                    invalid={false}
                    value={values.personal_info_logging}
                    label={'application.values.personal_info_logging'}
                    onChange={(e) => { handleChange(e, true) }}
                />
            </Row>
            <Row>
                <TextField
                    id={'install_info'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'application.values.install_info'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.install_info'}
                    value={values.install_info}
                />
            </Row>
            <Row>
                {/*
                <TextField
                    id={'keywords'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'application.values.keywords'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.keywords'}
                    value={values.keywords}
                />
                */}
            </Row>
            <Row>
                <StaticSelect
                    id={'application_status'}
                    disabled={false}
                    invalid={false}
                    label={'application.values.application_status'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.application_status'}
                    value={values.application_status}
                    options={['in_deployment', 'in_use', 'unused', 'shutdown', 'archived', 'undefined', 'unreleased', 'deleted']}
                />
            </Row>
            <Row>
                <TextField
                    id={'log_archives'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'application.values.log_archives'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.log_archives'}
                    value={values.log_archives}
                />
            </Row>
            <Row>
                <h2>{t('application.dependency')}</h2>
            </Row>
            <Row>
                <SearchableSelect
                    label={'application.values.installed_server'}
                    endpoint='server'
                    id={'installed_server'}
                    placeholder={'placeholder.server'}
                    disabled={values.visibility === 'hidden' || values.visibility === 'draft'}
                    invalid={false}
                    isMulti={true}
                    value={values.installed_server}
                    onChange={(value, id) => { handleSelect(value, id); }}
                />
            </Row>
            <Row>
                <SearchableSelect
                    label={'application.values.service_dependency'}
                    endpoint='service'
                    id={'service_dependency'}
                    placeholder={'placeholder.service_dependency'}
                    disabled={values.visibility === 'hidden' || values.visibility === 'draft'}
                    invalid={false}
                    isMulti={true}
                    value={values.service_dependency}
                    onChange={(value, id) => { handleSelect(value, id); }}
                />
            </Row>
            <Row>
                <SearchableSelect
                    label={'application.values.integration'}
                    endpoint='integration'
                    id={'integration'}
                    placeholder={'placeholder.integration'}
                    disabled={false}
                    invalid={false}
                    isMulti={true}
                    value={values.integration}
                    onChange={(value, id) => { handleSelect(value, id); }}
                />
            </Row>
            <Row>
                <SearchableSelect
                    label={'application.values.license'}
                    endpoint='license'
                    id={'license'}
                    placeholder={'placeholder.license'}
                    disabled={values.visibility === 'hidden' || values.visibility === 'draft'}
                    invalid={false}
                    isMulti={false}
                    value={values.license}
                    onChange={(value, id) => { handleSelect(value, id); }}
                />
            </Row>
            <Row>
                <SearchableSelect
                    label={'application.values.application_dependency'}
                    endpoint='application'
                    id={'application_dependency'}
                    placeholder={'placeholder.application_dependency'}
                    disabled={values.visibility === 'hidden' || values.visibility === 'draft'}
                    invalid={false}
                    isMulti={true}
                    value={values.application_dependency}
                    onChange={(value, id) => { handleSelect(value, id); }}
                />
            </Row>
            <Row>
                <h2>{t('application.continuity')}</h2>
            </Row>
            <Row>
                <TextField
                    id={'update_practice'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'application.values.update_practice'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.update_practice'}
                    value={values.update_practice}
                />
            </Row>
            <Row>
                <TextField
                    id={'security_practice_monitoring'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'application.values.security_practice_monitoring'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.security_practice_monitoring'}
                    value={values.security_practice_monitoring}
                />
            </Row>
            <Row>
                <TextField
                    id={'recovery_practices_convalescence'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'application.values.recovery_practices_convalescence'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.recovery_practices_convalescence'}
                    value={values.recovery_practices_convalescence}
                />
            </Row>
            <Row>
                <TextField
                    id={'user_rights_management'}
                    disabled={false}
                    invalid={false}
                    type='text'
                    label={'application.values.user_rights_management'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.user_rights_management'}
                    value={values.user_rights_management}
                />
            </Row>
            <Row>
                <TextField
                    id={'security_solutions'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'application.values.security_solutions'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.security_solutions'}
                    value={values.security_solutions}
                />
            </Row>
            <Row>
                <h2>{t('application.responsibility')}</h2>
            </Row>
            <Row>
                <TextField
                    id={'product_owner'}
                    disabled={false}
                    invalid={false}
                    type='text'
                    label={'application.values.product_owner'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.product_owner'}
                    value={values.product_owner}
                />
            </Row>
            <Row>
                <TextField
                    id={'application_holder'}
                    disabled={false}
                    invalid={false}
                    type='text'
                    label={'application.values.application_holder'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.application_holder'}
                    value={values.application_holder}
                />
            </Row>
            <Row>
                <TextField
                    id={'admin_users'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'application.values.admin_users'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.admin_users'}
                    value={values.admin_users}
                />
            </Row>
            <Row>
                <TextField
                    id={'liability_professional_users'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'application.values.liability_professional_users'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.liability_professional_users'}
                    value={values.liability_professional_users}
                />
            </Row>
            <Row>
                <TextField
                    id={'holder_extra_info'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'application.values.holder_extra_info'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.holder_extra_info'}
                    value={values.holder_extra_info}
                />
            </Row>
            <Row>
                <SearchableSelect
                    label={'application.values.provider'}
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
                    id={'provider_responsibility'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'application.values.provider_responsibility'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.provider_responsibility'}
                    value={values.provider_responsibility}
                />
            </Row>
            <Row>
                <TextField
                    id={'additional_contacts'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'application.values.additional_contacts'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.additional_contacts'}
                    value={values.additional_contacts}
                />
            </Row>
            <Row>
                <h2>{t('application.extra')}</h2>
            </Row>
            <Row>
                <TextField
                    id={'known_issues'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'application.values.known_issues'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.known_issues'}
                    value={values.known_issues}
                />
            </Row>
            <Row>
                <TextField
                    id={'fileUrl'}
                    disabled={true}
                    invalid={false}
                    type='file'
                    label={'application.values.fileUrl'}
                    onChange={() => { }}
                    placeholder={'placeholder.fileUrl'}
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

export default ApplicationForm;
