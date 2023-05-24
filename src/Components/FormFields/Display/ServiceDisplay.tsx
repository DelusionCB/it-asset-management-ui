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

            <DisplayText t={t} value={values.name} label='service.values.name' />
            <DisplayStatus t={t} value={values.service_status} label='service.values.service_status' />
            <DisplayText t={t} value={values.description} label='service.values.description' />
            <DisplayObject t={t} navigate={navigate} value={values.contract} label='service.values.contract' />

            <DisplayStatus t={t} value={values.criticality} label='service.values.criticality' />
            <DisplayText t={t} value={values.service_level} label='service.values.service_level' />
            <DisplayStatus t={t} value={values.service_type} label='service.values.service_type' />
            <DisplayText t={t} value={values.limitations} label='service.values.limitations' />
            <DisplayArray t={t} navigate={navigate} value={values.related_services} label='service.values.related_services' />
            <DisplayArray t={t} navigate={navigate} value={values.required_installations} label='service.values.required_installations' />

            <DisplayDescription t={t} label='service.responsibility' />

            <DisplayText t={t} value={values.product_owner} label='service.values.product_owner' />
            <DisplayText t={t} value={values.service_holder} label='service.values.service_holder' />
            <DisplayObject t={t} navigate={navigate} value={values.provider} label='service.values.provider' />
            <DisplayText t={t} value={values.provider_role} label='service.values.provider_role' />
            <DisplayText t={t} value={values.provider_contact} label='service.values.provider_contact' />
            <DisplayText t={t} value={values.additional_contacts} label='service.values.additional_contacts' />

            <DisplayDescription t={t} label='service.extra' />

            <DisplayTextArray t={t} value={values.customership} label='service.values.customership' />
            <DisplayStatus t={t} value={values.validity_type} label='service.values.validity_type' />
            {/* <DisplayText t={t} value={values.fileUrl} label='values.fileUrl' /> */}

        </Container>
    )
}

export default ServiceDisplay;
