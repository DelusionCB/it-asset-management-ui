import {Container} from 'reactstrap';
import React from 'react';
import {
    DisplayArray,
    DisplayDescription,
    DisplayHeader, DisplayObject,
    DisplayStatus,
    DisplayText,
} from '../../CustomComponents/DisplayComponents';
import './index.scss';
import {contractDisplayPropTypes} from '../../../Types/types.displays';

function ContractDisplay ({values, t, navigate}: contractDisplayPropTypes): JSX.Element {
    return (
        <Container className='directory-wrapper'>

            <DisplayHeader t={t} label='contract.con' />

            <DisplayDescription t={t} label='contract.description' />

            <DisplayText t={t} value={values.name} label='contract.values.name' />

            <DisplayText t={t} value={values.description} label='contract.values.description' />

            <DisplayText t={t} value={values.contract_number} label='contract.values.contract_number' />

            <DisplayStatus t={t} value={values.contract_type} label='contract.values.contract_type' />

            <DisplayText t={t} value={values.contract_continuation} label='contract.values.contract_continuation' />

            <DisplayText t={t} value={values.contract_decisions} label='contract.values.contract_decisions' />

            <DisplayText t={t} value={values.contract_holder} label='contract.values.contract_holder' />

            <DisplayText t={t} value={values.provider_contact} label='contract.values.provider_contact' />

            <DisplayText t={t} value={values.invoices_per_year} label='contract.values.invoices_per_year' />

            <DisplayText t={t} value={values.value_per_year} label='contract.values.value_per_year' />

            <DisplayText t={t} value={values.place_of_use} label='contract.values.place_of_use' />

            <DisplayText t={t} value={values.valid_from_date} label='contract.values.valid_from_date' />

            <DisplayText t={t} value={values.valid_until_date} label='contract.values.valid_until_date' />

            <DisplayObject navigate={navigate} t={t} value={values.provider} label='contract.values.provider' />

            <DisplayArray value={values.related_applications} navigate={navigate} t={t} label='contract.values.related_applications' />
        </Container>
    )
}

export default ContractDisplay;
