import {Container} from 'reactstrap';
import React from 'react';
import {
    DisplayArray,
    DisplayDescription,
    DisplayHeader,
    DisplayText,
    DisplayTextArray,
} from '../../CustomComponents/DisplayComponents';
import './index.scss';
import {serverDisplayPropTypes} from '../../../Types/types.displays';

function ServerDisplay ({values, t, navigate}: serverDisplayPropTypes): JSX.Element {
    return (
        <Container className='directory-wrapper'>
            <DisplayHeader t={t} label='server.srv' />

            <DisplayDescription t={t} label='server.description' />

            <DisplayText t={t} value={values.name} label='server.values.name' />
            <DisplayText t={t} value={values.description} label='server.values.description' />
            <DisplayText t={t} value={values.server_role} label='server.values.server_role' />
            <DisplayTextArray t={t} value={values.customership} label='server.values.customership' />
            <DisplayText t={t} value={values.place_of_use} label='server.values.place_of_use' />

            <DisplayDescription t={t} label='server.info' />

            <DisplayText t={t} value={values.product_owner} label='server.values.product_owner' />
            <DisplayText t={t} value={values.server_model} label='server.values.server_model' />
            <DisplayText t={t} value={values.backup_data} label='server.values.backup_data' />
            <DisplayText t={t} value={values.backup_device} label='server.values.backup_device' />
            <DisplayText t={t} value={values.public_ip_addresses} label='server.values.public_ip_addresses' />
            <DisplayText t={t} value={values.dns_names} label='server.values.dns_names' />
            <DisplayText t={t} value={values.server_type} label='server.values.server_type' />
            <DisplayText t={t} value={values.environment_type} label='server.values.environment_type' />
            <DisplayText t={t} value={values.dedicated} label='server.values.dedicated' />
            <DisplayText t={t} value={values.maintenance_window} label='server.values.maintenance_window' />
            <DisplayText t={t} value={values.device_criticality} label='server.values.device_criticality' />
            <DisplayText t={t} value={values.security_level} label='server.values.security_level' />
            <DisplayText t={t} value={values.service_level} label='server.values.service_level' />

            <DisplayDescription t={t} label='server.status' />

            <DisplayText t={t} value={values.server_status} label='server.values.server_status' />

            <DisplayDescription t={t} label='server.security' />

            <DisplayText t={t} value={values.install_date} label='server.values.install_date' />
            <DisplayText t={t} value={values.ip_address} label='server.values.ip_address' />
            <DisplayText t={t} value={values.updates} label='server.values.updates' />
            <DisplayText t={t} value={values.verification_practices} label='server.values.verification_practices' />
            <DisplayText t={t} value={values.recovery_practices_convalescence} label='server.values.recovery_practices_convalescence' />
            <DisplayText t={t} value={values.logging} label='server.values.logging' />
            <DisplayText t={t} value={values.access_rights_management} label='server.values.access_rights_management' />
            <DisplayText t={t} value={values.security_solutions} label='server.values.security_solutions' />
            <DisplayText t={t} value={values.external_rights} label='server.values.external_rights' />

            <DisplayDescription t={t} label='server.network' />

            <DisplayText t={t} value={values.domain_name} label='server.values.domain_name' />
            <DisplayText t={t} value={values.sub_domain} label='server.values.sub_domain' />
            <DisplayText t={t} value={values.ip_address_type} label='server.values.ip_address_type' />

            <DisplayText t={t} value={values.subnet_mask} label='server.values.subnet_mask' />
            <DisplayText t={t} value={values.default_gateway} label='server.values.default_gateway' />
            <DisplayText t={t} value={values.mac_address} label='server.values.mac_address' />

            <DisplayDescription t={t} label='server.apps' />

            <DisplayArray t={t} navigate={navigate} value={values.applications} label='server.values.applications' />

            {/* <DisplayDescription t={t} label='server.extra' /> */}

        </Container>
    )
}

export default ServerDisplay;
