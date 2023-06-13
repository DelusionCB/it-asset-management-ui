import React, {useEffect, useState} from 'react';
import {Row} from 'reactstrap';
import {formTypes} from '../../../Types/types.forms';
import VisibilitySelector from '../../CustomComponents/VisibilitySelector';
import TextField from '../../CustomComponents/TextField';
import {serverDataPropTypes} from '../../../Types/types.directories';
import {serverDefaultValues} from '../../../Types/defaultValues';
import {useTranslation} from 'react-i18next';
import {
    debouncedCheck,
    handleClear, handleServerChange,
    handleServerSelect,
} from '../../../Utils/helpers';
import AsyncSelect from '../../CustomComponents/AsyncSelect';
import SearchableSelect from '../../CustomComponents/SearchableSelect';
import ActionButtons from '../../ActionButtons/ActionButtons';

function ServerForm ({isDisabled, type, mode, editValues}: formTypes): JSX.Element {
    const [values, setValues] = useState<serverDataPropTypes>(serverDefaultValues)
    const {t} = useTranslation()

    function handleChange (e: React.ChangeEvent<HTMLInputElement>): void {
        handleServerChange(e, values, setValues);
    }

    function handleSelect (value: {} | [] | undefined | null, id: string): void {
        handleServerSelect(value, id, values, setValues);
    }

    useEffect(() => {
        if (Object.keys(editValues).length !== 0 && (mode === 'edit' || mode === 'copy')) {
            setValues(editValues)
        }
    }, [editValues, mode])

    useEffect(() => {
        if (mode !== 'edit') {
            // Invoke debouncedCheck with updated values
            debouncedCheck(values, serverDefaultValues, isDisabled);

            // Cleanup function to cancel debounce on unmount
            return () => {
                debouncedCheck.cancel();
            };
        }
    }, [values]);

    useEffect(() => {
        if (values.visibility === 'hidden' || values.visibility === 'draft') {
            // Clear these fields if visibility is X -value
            handleClear<serverDataPropTypes>(
                values,
                [],
                ['applications'],
                setValues,
            )
        }
    }, [values.visibility])

    return (
        <>
            <Row>
                <h1>{t(`server.${mode}`)}</h1>
            </Row>
            <Row>
                <h2>{t('server.visibility')}</h2>
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
                <h2>{t('server.description')}</h2>
            </Row>
            <Row>
                <TextField
                    id='name'
                    disabled={false}
                    invalid={false}
                    label={'server.values.name'}
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
                    label={'server.values.description'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.description'}
                    value={values.description}
                />
            </Row>
            <Row>
                <TextField
                    id={'server_role'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'server.values.server_role'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.server_role'}
                    value={values.server_role}
                />
            </Row>
            <Row>
                <AsyncSelect
                    label={'server.values.customership'}
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
                <TextField
                    id={'place_of_use'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'server.values.place_of_use'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.place_of_use'}
                    value={values.place_of_use}
                />
            </Row>
            <Row>
                <h2>{t('server.info')}</h2>
            </Row>
            <Row>
                <TextField
                    id={'product_owner'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'server.values.product_owner'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.product_owner'}
                    value={values.product_owner}
                />
            </Row>
            <Row>
                <TextField
                    id={'server_model'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'server.values.server_model'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.server_model'}
                    value={values.server_model}
                />
            </Row>
            <Row>
                <TextField
                    id={'backup_data'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'server.values.backup_data'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.backup_data'}
                    value={values.backup_data}
                />
            </Row>
            <Row>
                <TextField
                    id={'backup_device'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'server.values.backup_device'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.backup_device'}
                    value={values.backup_device}
                />
            </Row>
            <Row>
                <TextField
                    id={'public_ip_addresses'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'server.values.public_ip_addresses'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.public_ip_addresses'}
                    value={values.public_ip_addresses}
                />
            </Row>
            <Row>
                <TextField
                    id={'dns_names'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'server.values.dns_names'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.dns_names'}
                    value={values.dns_names}
                />
            </Row>
            <Row>
                <TextField
                    id={'server_type'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'server.values.server_type'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.server_type'}
                    value={values.server_type}
                />
            </Row>
            <Row>
                <TextField
                    id={'environment_type'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'server.values.environment_type'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.environment_type'}
                    value={values.environment_type}
                />
            </Row>
            <Row>
                <TextField
                    id={'dedicated'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'server.values.dedicated'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.dedicated'}
                    value={values.dedicated}
                />
            </Row>
            <Row>
                <TextField
                    id={'maintenance_window'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'server.values.maintenance_window'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.maintenance_window'}
                    value={values.maintenance_window}
                />
            </Row>
            <Row>
                <TextField
                    id={'device_criticality'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'server.values.device_criticality'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.device_criticality'}
                    value={values.device_criticality}
                />
            </Row>
            <Row>
                <TextField
                    id={'security_level'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'server.values.security_level'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.security_level'}
                    value={values.security_level}
                />
            </Row>
            <Row>
                <TextField
                    id={'service_level'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'server.values.service_level'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.service_level'}
                    value={values.service_level}
                />
            </Row>
            <Row>
                <h2>{t('server.status')}</h2>
            </Row>
            <Row>
                <TextField
                    id={'server_status'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'server.values.server_status'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.server_status'}
                    value={values.server_status}
                />
            </Row>
            <Row>
                <h2>{t('server.security')}</h2>
            </Row>
            <Row>
                <TextField
                    id={'install_date'}
                    disabled={false}
                    invalid={false}
                    type='date'
                    label={'server.values.install_date'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.install_date'}
                    value={values.install_date}
                />
            </Row>
            <Row>
                <TextField
                    id={'ip_address'}
                    disabled={false}
                    invalid={false}
                    type='text'
                    label={'server.values.ip_address'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.ip_address'}
                    value={values.ip_address}
                />
            </Row>
            <Row>
                <TextField
                    id={'updates'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'server.values.updates'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.updates'}
                    value={values.updates}
                />
            </Row>
            <Row>
                <TextField
                    id={'verification_practices'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'server.values.verification_practices'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.verification_practices'}
                    value={values.verification_practices}
                />
            </Row>
            <Row>
                <TextField
                    id={'recovery_practices_convalescence'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'server.values.recovery_practices_convalescence'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.recovery_practices_convalescence'}
                    value={values.recovery_practices_convalescence}
                />
            </Row>
            <Row>
                <TextField
                    id={'logging'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'server.values.logging'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.logging'}
                    value={values.logging}
                />
            </Row>
            <Row>
                <TextField
                    id={'access_rights_management'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'server.values.access_rights_management'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.access_rights_management'}
                    value={values.access_rights_management}
                />
            </Row>
            <Row>
                <TextField
                    id={'security_solutions'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'server.values.security_solutions'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.security_solutions'}
                    value={values.security_solutions}
                />
            </Row>
            <Row>
                <TextField
                    id={'external_rights'}
                    disabled={false}
                    invalid={false}
                    type='textarea'
                    label={'server.values.external_rights'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.external_rights'}
                    value={values.external_rights}
                />
            </Row>
            <Row>
                <h2>{t('server.network')}</h2>
            </Row>
            <Row>
                <TextField
                    id={'domain_name'}
                    disabled={false}
                    invalid={false}
                    type='text'
                    label={'server.values.domain_name'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.domain_name'}
                    value={values.domain_name}
                />
            </Row>
            <Row>
                <TextField
                    id={'sub_domain'}
                    disabled={false}
                    invalid={false}
                    type='text'
                    label={'server.values.sub_domain'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.sub_domain'}
                    value={values.sub_domain}
                />
            </Row>
            <Row>
                <TextField
                    id={'ip_address_type'}
                    disabled={false}
                    invalid={false}
                    type='text'
                    label={'server.values.ip_address_type'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.ip_address_type'}
                    value={values.ip_address_type}
                />
            </Row>
            <Row>
                <TextField
                    id={'subnet_mask'}
                    disabled={false}
                    invalid={false}
                    type='text'
                    label={'server.values.subnet_mask'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.subnet_mask'}
                    value={values.subnet_mask}
                />
            </Row>
            <Row>
                <TextField
                    id={'default_gateway'}
                    disabled={false}
                    invalid={false}
                    type='text'
                    label={'server.values.default_gateway'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.default_gateway'}
                    value={values.default_gateway}
                />
            </Row>
            <Row>
                <TextField
                    id={'mac_address'}
                    disabled={false}
                    invalid={false}
                    type='text'
                    label={'server.values.mac_address'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.mac_address'}
                    value={values.mac_address}
                />
            </Row>
            <Row>
                <h2>{t('server.apps')}</h2>
            </Row>
            <Row>
                <SearchableSelect
                    label={'server.values.applications'}
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
            <ActionButtons
                values={values}
                type={type}
                mode={mode}
            />
        </>
    );
}

export default ServerForm;
