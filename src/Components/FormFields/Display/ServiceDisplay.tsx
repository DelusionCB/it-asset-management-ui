import {Container} from 'reactstrap';
import React from 'react';
import {
    DisplayArray,
    DisplayDescription,
    DisplayHeader,
    DisplayObject, DisplayStatus,
    DisplayText, DisplayTextArray,
} from '../../CustomComponents/DisplayComponents';
import './index.scss';
import {serviceDisplayPropTypes} from '../../../Types/types.displays';

function ServiceDisplay ({values, t, navigate}: serviceDisplayPropTypes): JSX.Element {
    return (
        <Container className='directory-wrapper'>

            <DisplayHeader t={t} label='service.ser' />

            <DisplayDescription t={t} label='service.description' />

            <DisplayText t={t} value={values.name} label='values.name' />
            <DisplayStatus t={t} value={values.service_status} label='values.service_status' />
            <DisplayText t={t} value={values.description} label='values.description' />
            <DisplayObject t={t} navigate={navigate} value={values.contract} label='values.contract' />

            <DisplayStatus t={t} value={values.criticality} label='values.criticality' />
            <DisplayText t={t} value={values.service_level} label='values.service_level' />
            <DisplayStatus t={t} value={values.service_type} label='values.service_type' />
            <DisplayText t={t} value={values.limitations} label='values.limitations' />
            <DisplayArray t={t} navigate={navigate} value={values.related_services} label='values.related_services' />
            <DisplayArray t={t} navigate={navigate} value={values.required_installations} label='values.required_installations' />

            <DisplayDescription t={t} label='service.responsibility' />

            <DisplayText t={t} value={values.product_owner} label='values.product_owner_service' />
            <DisplayText t={t} value={values.service_holder} label='values.service_holder' />
            <DisplayObject t={t} navigate={navigate} value={values.provider} label='values.provider' />
            <DisplayText t={t} value={values.provider_role} label='values.provider_role' />
            <DisplayText t={t} value={values.provider_contact} label='values.provider_contact' />
            <DisplayText t={t} value={values.additional_contacts} label='values.additional_contacts' />

            <DisplayDescription t={t} label='service.extra' />

            <DisplayTextArray t={t} value={values.customership} label='values.customership' />
            <DisplayStatus t={t} value={values.validity_type} label='values.validity_type' />
            {/* <DisplayText t={t} value={values.fileUrl} label='values.fileUrl' /> */}

        </Container>
    )
}

export default ServiceDisplay;
