import {Container} from 'reactstrap';
import React from 'react';
import {serviceDataProps} from '../../../Types/types.directories';
import {
    DisplayArray,
    DisplayDescription,
    DisplayHeader,
    DisplayObject,
    DisplayText,
} from '../../CustomComponents/DisplayComponents';
import './index.scss';

interface serviceDisplayProps {
    values: serviceDataProps
    t: any
    navigate: any
}

function ServiceDisplay ({values, t, navigate}: serviceDisplayProps): JSX.Element {
    return (
        <Container className='directory-wrapper'>

            <DisplayHeader t={t} label='service.ser' />

            <DisplayDescription t={t} label='service.description' />

            <DisplayText t={t} value={values.name} label='values.name' />
            <DisplayText t={t} value={values.service_status} label='values.service_status' />
            <DisplayText t={t} value={values.description} label='values.description' />
            <DisplayText t={t} value={values.contract} label='values.contract' />

            <DisplayText t={t} value={values.criticality} label='values.criticality' />
            <DisplayText t={t} value={values.service_level} label='values.service_level' />
            <DisplayText t={t} value={values.service_type} label='values.service_type' />
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

            <DisplayText t={t} value={values.operating_organization} label='values.operating_organization' />
            <DisplayText t={t} value={values.validity_type} label='values.validity_type' />
            {/* <DisplayText t={t} value={values.fileUrl} label='values.fileUrl' /> */}

        </Container>
    )
}

export default ServiceDisplay;
