import React, {useEffect, useState} from 'react';
import {Row} from 'reactstrap';
import {formTypes} from '../../../Types/types.forms';
import VisibilitySelector from '../../CustomComponents/VisibilitySelector';
import {integrationDataPropTypes} from '../../../Types/types.directories';
import {integrationDefaultValues} from '../../../Types/defaultValues';
import {useTranslation} from 'react-i18next';
import {
    debouncedCheck,
    handleClear,
    handleIntegrationChange, handleIntegrationSelect,
} from '../../../Utils/helpers';
import TextField from '../../CustomComponents/TextField';
import StaticSelect from '../../CustomComponents/StaticSelect';
import ActionButtons from '../../ActionButtons/ActionButtons';
import SearchableSelect from '../../CustomComponents/SearchableSelect';

function IntegrationForm ({isDisabled, type, mode, editValues}: formTypes): JSX.Element {
    const [values, setValues] = useState<integrationDataPropTypes>(integrationDefaultValues)
    const {t} = useTranslation()

    function handleChange (e: React.ChangeEvent<HTMLInputElement>): void {
        handleIntegrationChange(e, values, setValues);
    }

    function handleSelect (value: {} | [] | undefined | null, id: string): void {
        handleIntegrationSelect(value, id, values, setValues);
    }

    useEffect(() => {
        if (Object.keys(editValues).length !== 0 && (mode === 'edit' || mode === 'copy')) {
            setValues(editValues)
        }
        if (Object.keys(editValues).length !== 0 && mode === 'create') {
            setValues(integrationDefaultValues)
        }
    }, [editValues, mode])

    useEffect(() => {
        if (mode !== 'edit') {
            // Invoke debouncedCheck with updated values
            debouncedCheck(values, integrationDefaultValues, isDisabled);

            // Cleanup function to cancel debounce on unmount
            return () => {
                debouncedCheck.cancel();
            };
        }
    }, [values]);

    useEffect(() => {
        if (values.visibility === 'hidden' || values.visibility === 'draft') {
            // Clear these fields if visibility is X -value
            handleClear<integrationDataPropTypes>(
                values,
                ['server_platform'],
                [],
                setValues,
            )
        }
    }, [values.visibility])

    return (
        <>
            <Row>
                <h1>{t(`integration.${mode}`)}</h1>
            </Row>
            <Row>
                <h2>{t('integration.visibility')}</h2>
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
                    label={'integration.values.name'}
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
                    label={'integration.values.description'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.description'}
                    value={values.description}
                />
            </Row>
            <Row>
                <SearchableSelect
                    label={'integration.values.server_platform'}
                    endpoint='server'
                    id={'server_platform'}
                    placeholder={'placeholder.server_platform'}
                    disabled={values.visibility === 'hidden' || values.visibility === 'draft'}
                    invalid={false}
                    isMulti={false}
                    value={values.server_platform}
                    onChange={(value, id) => { handleSelect(value, id); }}
                />
            </Row>
            <Row>
                <StaticSelect
                    id={'environment_type'}
                    disabled={false}
                    invalid={false}
                    label={'integration.values.environment_type'}
                    onChange={(e) => { handleChange(e) }}
                    placeholder={'placeholder.environment_type'}
                    value={values.environment_type}
                    options={['dev', 'test', 'stage', 'prod']}
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

export default IntegrationForm;
