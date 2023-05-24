import {Container} from 'reactstrap';
import React from 'react';
import {
    DisplayArray,
    DisplayDescription,
    DisplayHeader, DisplayStatus,
    DisplayText, DisplayUrl,
} from '../../CustomComponents/DisplayComponents';
import './index.scss';
import {providerDisplayPropTypes} from '../../../Types/types.displays';

function ProviderDisplay ({values, t, navigate}: providerDisplayPropTypes): JSX.Element {
    return (
        <Container className='directory-wrapper'>

            <DisplayHeader t={t} label='provider.pro' />

            <DisplayDescription t={t} label='provider.description' />

            <DisplayText t={t} value={values.name} label='provider.values.name' />
            <DisplayText t={t} value={values.description} label='provider.values.description' />
            <DisplayText t={t} value={values.business_id} label='provider.values.business_id' />
            <DisplayStatus t={t} value={values.provider_type} label='provider.values.provider_type' />

            <DisplayDescription t={t} label='provider.contacts' />

            <DisplayText t={t} value={values.full_address} label='provider.values.full_address' />
            <DisplayText t={t} value={values.switch_phone} label='provider.values.switch_phone' />
            <DisplayText t={t} value={values.general_email} label='provider.values.general_email' />
            <DisplayText t={t} value={values.support_phone} label='provider.values.support_phone' />
            <DisplayText t={t} value={values.support_email} label='provider.values.support_email' />
            <DisplayText t={t} value={values.additional_contact} label='provider.values.additional_contact' />

            <DisplayDescription t={t} label='provider.dependency' />

            <DisplayArray value={values.related_services} navigate={navigate} t={t} label='provider.values.related_services' />
            <DisplayArray value={values.related_applications} navigate={navigate} t={t} label='provider.values.related_applications' />
            <DisplayArray value={values.related_contracts} navigate={navigate} t={t} label='provider.values.related_contracts' />
            <DisplayText value={values.provider_user_contact} t={t} label='provider.values.provider_user_contact' />

            <DisplayDescription t={t} label='provider.extra' />

            <DisplayUrl value={values.extra_url} t={t} label='provider.values.extra_url' />

        </Container>
    )
}

export default ProviderDisplay;
