import {Container} from 'reactstrap';
import React from 'react';
import {serverDataProps} from '../../../Types/types.directories';
import {DisplayArray, DisplayDescription, DisplayHeader, DisplayText} from '../../CustomComponents/DisplayComponents';

interface serverDisplayProps {
    values: serverDataProps
    t: any
    navigate: any
}

function ServerDisplay ({values, t, navigate}: serverDisplayProps): JSX.Element {
    return (
        <Container>
            <DisplayHeader t={t} label='server.srv' />

            <DisplayDescription t={t} label='server.description' />

            <DisplayText t={t} value={values.name} label='values.name' />
            <DisplayText t={t} value={values.description} label='values.description' />
            <DisplayText t={t} value={values.server_role} label='values.server_role' />
            <DisplayText t={t} value={values.operating_organization} label='values.operating_organization' />
            <DisplayText t={t} value={values.place_of_use} label='values.place_of_use_location' />

            <DisplayDescription t={t} label='server.info' />

            <DisplayText t={t} value={values.product_owner} label='values.product_owner_server' />
            <DisplayText t={t} value={values.server_model} label='values.server_model' />
            <DisplayText t={t} value={values.backup_data} label='values.backup_data' />
            <DisplayText t={t} value={values.backup_device} label='values.backup_device' />
            <DisplayText t={t} value={values.public_ip_addresses} label='values.public_ip_addresses' />
            <DisplayText t={t} value={values.dns_names} label='values.dns_names' />
            <DisplayText t={t} value={values.server_type} label='values.server_type' />
            <DisplayText t={t} value={values.environment_type} label='values.environment_type' />
            <DisplayText t={t} value={values.dedicated} label='values.dedicated' />
            <DisplayText t={t} value={values.maintenance_window} label='values.maintenance_window' />
            <DisplayText t={t} value={values.device_criticality} label='values.device_criticality' />
            <DisplayText t={t} value={values.security_level} label='values.security_level' />

            <DisplayDescription t={t} label='server.status' />

            <DisplayText t={t} value={values.status} label='values.status' />

            <DisplayDescription t={t} label='server.security' />

            <DisplayText t={t} value={values.install_date} label='values.install_date' />
            <DisplayText t={t} value={values.ip_address} label='values.ip_address' />
            <DisplayText t={t} value={values.updates} label='values.updates' />
            <DisplayText t={t} value={values.verification_practices} label='values.verification_practices' />
            <DisplayText t={t} value={values.recovery_practices_convalescence} label='values.recovery_practices_convalescence' />
            <DisplayText t={t} value={values.logging} label='values.logging' />
            <DisplayText t={t} value={values.access_rights_management} label='values.access_rights_management' />
            <DisplayText t={t} value={values.security_solutions} label='values.security_solutions' />
            <DisplayText t={t} value={values.external_rights} label='values.external_rights' />

            <DisplayDescription t={t} label='server.network' />

            <DisplayText t={t} value={values.domain_name} label='values.domain_name' />
            <DisplayText t={t} value={values.sub_domain} label='values.sub_domain' />
            <DisplayText t={t} value={values.ip_address_type} label='values.ip_address_type' />

            <DisplayText t={t} value={values.subnet_mask} label='values.subnet_mask' />
            <DisplayText t={t} value={values.default_gateway} label='values.default_gateway' />
            <DisplayText t={t} value={values.mac_address} label='values.mac_address' />

            <DisplayDescription t={t} label='server.apps' />

            <DisplayArray t={t} navigate={navigate} value={values.applications} label='values.applications' />

            {/* <DisplayDescription t={t} label='server.extra' /> */}

        </Container>
    )
}

export default ServerDisplay;
