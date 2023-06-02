import client from '../Client';

type formatValues = Record<string, any>;

function mapUIDataToAPIFormat (type: string, values: Record<string, any>): Object {
    const obj: formatValues = {}
    switch (type) {
        case 'application':
            // General data
            obj.name = values.name
            obj.description = values.description
            obj.classification = values.classification
            obj.status = values.status
            obj.person_register = values.person_register
            obj.personal_info_logging = values.personal_info_logging
            obj.install_info = values.install_info
            obj.update_practice = values.update_practice
            obj.security_practice_monitoring = values.security_practice_monitoring
            obj.recovery_practices_convalescence = values.recovery_practices_convalescence
            obj.log_archives = values.log_archives
            obj.user_rights_management = values.user_rights_management
            obj.security_solutions = values.security_solutions
            obj.product_owner = values.product_owner
            obj.application_holder = values.application_holder
            obj.admin_users = values.admin_users
            obj.liability_professional_users = values.liability_professional_users
            obj.holder_extra_info = values.holder_extra_info
            obj.provider_responsibility = values.provider_responsibility
            obj.additional_contacts = values.additional_contacts
            obj.known_issues = values.known_issues
            obj.visibility = values.visibility

            if (!values.fileUrl) {
                obj.fileUrl = null
            } else {
                obj.fileUrl = values.fileUrl
            }
            if (!values.license) {
                obj.license = null
            } else {
                obj.license = values.license.value
            }
            if (!values.contract) {
                obj.contract = null
            } else {
                obj.contract = values.contract.value
            }

            if (!values.provider) {
                obj.provider = null
            } else {
                obj.provider = values.provider.value
            }

            if (!values.keywords) {
                obj.keywords = []
            } else {
                obj.keywords = values.keywords.map((item: any) => item.value)
            }

            if (!values.installed_server) {
                obj.installed_server = []
            } else {
                obj.installed_server = values.installed_server.map((item: any) => item.value)
            }
            if (!values.application_dependency) {
                obj.application_dependency = []
            } else {
                obj.application_dependency = values.application_dependency.map((item: any) => item.value)
            }
            if (values.service_dependency.length === 0) {
                obj.service_dependency = []
            } else {
                obj.service_dependency = values.service_dependency.map((item: any) => item.value)
            }
            if (values.customership.length === 0) {
                obj.customership = []
            } else {
                obj.customership = values.customership.map((item: any) => item.value)
            }
            if (values.integration.length === 0) {
                obj.integration = []
            } else {
                obj.integration = values.integration.map((item: any) => item.value)
            }

            if (values.created_time) {
                obj.created_time = values.created_time
            }
            if (values.last_modified_time) {
                obj.last_modified_time = values.last_modified_time
            }
            if (values.base_id) {
                obj.base_id = values.base_id
            }
            break;
        case 'directory':
            // General data
            obj.name = values.name
            obj.description = values.description
            obj.visibility = values.visibility

            // Arrays
            if (values.applications.length === 0) {
                obj.applications = []
            } else {
                obj.applications = values.applications.map((item: any) => item.value)
            }
            if (values.servers.length === 0) {
                obj.servers = []
            } else {
                obj.servers = values.servers.map((item: any) => item.value)
            }
            if (values.services.length === 0) {
                obj.services = []
            } else {
                obj.services = values.services.map((item: any) => item.value)
            }

            if (values.created_time) {
                obj.created_time = values.created_time
            }
            if (values.last_modified_time) {
                obj.last_modified_time = values.last_modified_time
            }
            if (values.base_id) {
                obj.base_id = values.base_id
            }
            break;
        case 'service':
            // General data
            obj.name = values.name
            obj.description = values.description
            obj.visibility = values.visibility

            obj.service_status = values.service_status
            obj.criticality = values.criticality
            obj.service_level = values.service_level
            obj.service_type = values.service_type
            obj.validity_type = values.validity_type
            obj.limitations = values.limitations
            obj.product_owner = values.product_owner
            obj.service_holder = values.service_holder
            obj.provider_role = values.provider_role
            obj.provider_contact = values.provider_contact
            obj.additional_contacts = values.additional_contacts

            if (values.customership.length === 0) {
                obj.customership = []
            } else {
                obj.customership = values.customership.map((item: any) => item.value)
            }

            if (values.related_services.length === 0) {
                obj.related_services = []
            } else {
                obj.related_services = values.related_services.map((item: any) => item.value)
            }

            if (values.required_installations.length === 0) {
                obj.required_installations = []
            } else {
                obj.required_installations = values.required_installations.map((item: any) => item.value)
            }

            if (!values.provider) {
                obj.provider = null
            } else {
                obj.provider = values.provider.value
            }

            if (!values.contract) {
                obj.contract = null
            } else {
                obj.contract = values.contract.value
            }

            if (values.created_time) {
                obj.created_time = values.created_time
            }
            if (values.last_modified_time) {
                obj.last_modified_time = values.last_modified_time
            }
            if (values.base_id) {
                obj.base_id = values.base_id
            }
            if (values.id_prefix) {
                obj.id_prefix = values.id_prefix
            }
            break;
        case 'server':
            // General data
            obj.name = values.name
            obj.description = values.description
            obj.visibility = values.visibility

            obj.server_role = values.server_role
            obj.service_level = values.service_level
            obj.place_of_use = values.place_of_use
            obj.product_owner = values.product_owner
            obj.server_model = values.server_model
            obj.backup_data = values.backup_data
            obj.backup_device = values.backup_device
            obj.public_ip_addresses = values.public_ip_addresses
            obj.dns_names = values.dns_names
            obj.server_type = values.server_type
            obj.environment_type = values.environment_type
            obj.dedicated = values.dedicated
            obj.maintenance_window = values.maintenance_window
            obj.device_criticality = values.device_criticality
            obj.security_level = values.security_level
            obj.server_status = values.server_status
            obj.install_date = values.install_date
            obj.ip_address = values.ip_address
            obj.updates = values.updates
            obj.verification_practices = values.verification_practices
            obj.recovery_practices_convalescence = values.recovery_practices_convalescence
            obj.logging = values.logging
            obj.access_rights_management = values.access_rights_management
            obj.security_solutions = values.security_solutions
            obj.external_rights = values.external_rights
            obj.domain_name = values.domain_name
            obj.sub_domain = values.sub_domain
            obj.ip_address_type = values.ip_address_type
            obj.subnet_mask = values.subnet_mask
            obj.default_gateway = values.default_gateway
            obj.mac_address = values.mac_address

            if (values.applications.length === 0) {
                obj.applications = []
            } else {
                obj.applications = values.applications.map((item: any) => item.value)
            }

            if (values.customership.length === 0) {
                obj.customership = []
            } else {
                obj.customership = values.customership.map((item: any) => item.value)
            }

            if (values.created_time) {
                obj.created_time = values.created_time
            }
            if (values.last_modified_time) {
                obj.last_modified_time = values.last_modified_time
            }
            if (values.base_id) {
                obj.base_id = values.base_id
            }
            if (values.id_prefix) {
                obj.id_prefix = values.id_prefix
            }
            break;
        case 'integration':
            // General data
            obj.name = values.name
            obj.description = values.description
            obj.visibility = values.visibility
            obj.environment_type = values.environment_type

            if (!values.server_platform) {
                obj.server_platform = null
            } else {
                obj.server_platform = values.server_platform.value
            }

            if (values.created_time) {
                obj.created_time = values.created_time
            }
            if (values.last_modified_time) {
                obj.last_modified_time = values.last_modified_time
            }
            if (values.base_id) {
                obj.base_id = values.base_id
            }
            if (values.id_prefix) {
                obj.id_prefix = values.id_prefix
            }
            break;
        case 'provider':
            // General data
            obj.name = values.name
            obj.description = values.description
            obj.visibility = values.visibility

            obj.business_id = values.business_id
            obj.provider_type = values.provider_type
            obj.full_address = values.full_address
            obj.switch_phone = values.switch_phone
            obj.general_email = values.general_email
            obj.support_phone = values.support_phone
            obj.support_email = values.support_email
            obj.additional_contact = values.additional_contact
            obj.provider_user_contact = values.provider_user_contact
            obj.extra_url = values.extra_url

            if (values.related_contracts.length === 0) {
                obj.related_contracts = []
            } else {
                obj.related_contracts = values.related_contracts.map((item: any) => item.value)
            }

            if (values.related_applications.length === 0) {
                obj.related_applications = []
            } else {
                obj.related_applications = values.related_applications.map((item: any) => item.value)
            }

            if (values.related_services.length === 0) {
                obj.related_services = []
            } else {
                obj.related_services = values.related_services.map((item: any) => item.value)
            }

            if (values.created_time) {
                obj.created_time = values.created_time
            }
            if (values.last_modified_time) {
                obj.last_modified_time = values.last_modified_time
            }
            if (values.base_id) {
                obj.base_id = values.base_id
            }
            if (values.id_prefix) {
                obj.id_prefix = values.id_prefix
            }
            break;
        case 'license':
            // General data
            obj.name = values.name
            obj.description = values.description
            obj.visibility = values.visibility
            obj.valid_from_date = values.valid_from_date
            obj.valid_until_date = values.valid_until_date
            obj.license_type = values.license_type
            obj.audits = values.audits

            if (!values.contract) {
                obj.contract = null
            } else {
                obj.contract = values.contract.value
            }

            if (values.created_time) {
                obj.created_time = values.created_time
            }
            if (values.last_modified_time) {
                obj.last_modified_time = values.last_modified_time
            }
            if (values.base_id) {
                obj.base_id = values.base_id
            }
            if (values.id_prefix) {
                obj.id_prefix = values.id_prefix
            }
            break;
    }
    return obj
}

export function mapAPIDataToUIFormat (type: string, values: Record<string, any>): Object {
    const obj: formatValues = {}
    switch (type) {
        case 'application':
            // General data
            obj.name = values.name
            obj.description = values.description
            obj.classification = values.classification
            obj.status = values.status
            obj.person_register = values.person_register
            obj.personal_info_logging = values.personal_info_logging
            obj.install_info = values.install_info
            obj.update_practice = values.update_practice
            obj.security_practice_monitoring = values.security_practice_monitoring
            obj.recovery_practices_convalescence = values.recovery_practices_convalescence
            obj.log_archives = values.log_archives
            obj.user_rights_management = values.user_rights_management
            obj.security_solutions = values.security_solutions
            obj.product_owner = values.product_owner
            obj.application_holder = values.application_holder
            obj.admin_users = values.admin_users
            obj.liability_professional_users = values.liability_professional_users
            obj.holder_extra_info = values.holder_extra_info
            obj.provider_responsibility = values.provider_responsibility
            obj.additional_contacts = values.additional_contacts
            obj.known_issues = values.known_issues
            obj.visibility = values.visibility

            if (!values.fileUrl) {
                obj.fileUrl = null
            } else {
                obj.fileUrl = values.fileUrl
            }
            if (!values.license) {
                obj.license = null
            } else {
                obj.license = {value: values.license.base_id, label: values.license.name}
            }
            if (!values.contract) {
                obj.contract = null
            } else {
                obj.contract = {value: values.contract.base_id, label: values.contract.name}
            }

            if (!values.provider) {
                obj.provider = null
            } else {
                obj.provider = {value: values.provider.base_id, label: values.provider.name}
            }

            if (!values.keywords) {
                obj.keywords = []
            } else {
                obj.keywords = values.keywords.map((item: any) => ({
                    label: item.name,
                    value: item.base_id,
                }));
            }

            if (!values.installed_server) {
                obj.installed_server = []
            } else {
                obj.installed_server = values.installed_server.map((item: any) => ({
                    label: item.name,
                    value: item.base_id,
                }));
            }
            if (!values.application_dependency) {
                obj.application_dependency = []
            } else {
                obj.application_dependency = values.application_dependency.map((item: any) => ({
                    label: item.name,
                    value: item.base_id,
                }));
            }
            if (values.service_dependency.length === 0) {
                obj.service_dependency = []
            } else {
                obj.service_dependency = values.service_dependency.map((item: any) => ({
                    label: item.name,
                    value: item.base_id,
                }));
            }
            if (values.customership.length === 0) {
                obj.customership = []
            } else {
                obj.customership = values.customership.map((item: any) => ({
                    label: item.name,
                    value: item.base_id,
                }));
            }
            if (values.integration.length === 0) {
                obj.integration = []
            } else {
                obj.integration = values.integration.map((item: any) => ({
                    label: item.name,
                    value: item.base_id,
                }));
            }

            if (values.created_time) {
                obj.created_time = values.created_time
            }
            if (values.last_modified_time) {
                obj.last_modified_time = values.last_modified_time
            }
            if (values.base_id) {
                obj.base_id = values.base_id
            }
            break;
        case 'directory':
            // General data
            obj.name = values.name
            obj.description = values.description
            obj.visibility = values.visibility

            // Arrays
            if (values.applications.length === 0) {
                obj.applications = [];
            } else {
                obj.applications = values.applications.map((item: any) => ({
                    label: item.name,
                    value: item.base_id,
                }));
            }

            if (values.servers.length === 0) {
                obj.servers = [];
            } else {
                obj.servers = values.servers.map((item: any) => ({
                    label: item.name,
                    value: item.base_id,
                }));
            }

            if (values.services.length === 0) {
                obj.services = [];
            } else {
                obj.services = values.services.map((item: any) => ({
                    label: item.name,
                    value: item.base_id,
                }));
            }

            if (values.created_time) {
                obj.created_time = values.created_time
            }
            if (values.last_modified_time) {
                obj.last_modified_time = values.last_modified_time
            }
            if (values.base_id) {
                obj.base_id = values.base_id
            }
            break;
        case 'service':
            // General data
            obj.name = values.name
            obj.description = values.description
            obj.visibility = values.visibility

            obj.service_status = values.service_status
            obj.criticality = values.criticality
            obj.service_level = values.service_level
            obj.service_type = values.service_type
            obj.validity_type = values.validity_type
            obj.limitations = values.limitations
            obj.product_owner = values.product_owner
            obj.service_holder = values.service_holder
            obj.provider_role = values.provider_role
            obj.provider_contact = values.provider_contact
            obj.additional_contacts = values.additional_contacts

            // Arrays
            if (values.customership.length === 0) {
                obj.customership = [];
            } else {
                obj.customership = values.customership.map((item: any) => ({
                    label: item.name,
                    value: item.base_id,
                }));
            }

            if (values.related_services.length === 0) {
                obj.related_services = [];
            } else {
                obj.related_services = values.related_services.map((item: any) => ({
                    label: item.name,
                    value: item.base_id,
                }));
            }

            if (values.required_installations.length === 0) {
                obj.required_installations = [];
            } else {
                obj.required_installations = values.required_installations.map((item: any) => ({
                    label: item.name,
                    value: item.base_id,
                }));
            }

            if (!values.provider) {
                obj.provider = null
            } else {
                obj.provider = {value: values.provider.base_id, label: values.provider.name}
            }

            if (!values.contract) {
                obj.contract = null
            } else {
                obj.contract = {value: values.contract.base_id, label: values.contract.name}
            }

            if (values.created_time) {
                obj.created_time = values.created_time
            }
            if (values.last_modified_time) {
                obj.last_modified_time = values.last_modified_time
            }
            if (values.base_id) {
                obj.base_id = values.base_id
            }
            if (values.id_prefix) {
                obj.id_prefix = values.id_prefix
            }
            break;
        case 'server':
            // General data
            obj.name = values.name
            obj.description = values.description
            obj.visibility = values.visibility

            obj.server_role = values.server_role
            obj.service_level = values.service_level
            obj.place_of_use = values.place_of_use
            obj.product_owner = values.product_owner
            obj.server_model = values.server_model
            obj.backup_data = values.backup_data
            obj.backup_device = values.backup_device
            obj.public_ip_addresses = values.public_ip_addresses
            obj.dns_names = values.dns_names
            obj.server_type = values.server_type
            obj.environment_type = values.environment_type
            obj.dedicated = values.dedicated
            obj.maintenance_window = values.maintenance_window
            obj.device_criticality = values.device_criticality
            obj.security_level = values.security_level
            obj.server_status = values.server_status
            obj.install_date = values.install_date
            obj.ip_address = values.ip_address
            obj.updates = values.updates
            obj.verification_practices = values.verification_practices
            obj.recovery_practices_convalescence = values.recovery_practices_convalescence
            obj.logging = values.logging
            obj.access_rights_management = values.access_rights_management
            obj.security_solutions = values.security_solutions
            obj.external_rights = values.external_rights
            obj.domain_name = values.domain_name
            obj.sub_domain = values.sub_domain
            obj.ip_address_type = values.ip_address_type
            obj.subnet_mask = values.subnet_mask
            obj.default_gateway = values.default_gateway
            obj.mac_address = values.mac_address

            // Arrays
            if (values.applications.length === 0) {
                obj.applications = [];
            } else {
                obj.applications = values.applications.map((item: any) => ({
                    label: item.name,
                    value: item.base_id,
                }));
            }

            if (values.customership.length === 0) {
                obj.customership = [];
            } else {
                obj.customership = values.customership.map((item: any) => ({
                    label: item.name,
                    value: item.base_id,
                }));
            }

            if (values.created_time) {
                obj.created_time = values.created_time
            }
            if (values.last_modified_time) {
                obj.last_modified_time = values.last_modified_time
            }
            if (values.base_id) {
                obj.base_id = values.base_id
            }
            if (values.id_prefix) {
                obj.id_prefix = values.id_prefix
            }
            break;
        case 'integration':
            // General data
            obj.name = values.name
            obj.description = values.description
            obj.visibility = values.visibility
            obj.environment_type = values.environment_type

            if (!values.server_platform) {
                obj.server_platform = null
            } else {
                obj.server_platform = {value: values.server_platform.base_id, label: values.server_platform.name}
            }

            if (values.created_time) {
                obj.created_time = values.created_time
            }
            if (values.last_modified_time) {
                obj.last_modified_time = values.last_modified_time
            }
            if (values.base_id) {
                obj.base_id = values.base_id
            }
            if (values.id_prefix) {
                obj.id_prefix = values.id_prefix
            }
            break;
        case 'provider':
            // General data
            obj.name = values.name
            obj.description = values.description
            obj.visibility = values.visibility

            obj.business_id = values.business_id
            obj.provider_type = values.provider_type
            obj.full_address = values.full_address
            obj.switch_phone = values.switch_phone
            obj.general_email = values.general_email
            obj.support_phone = values.support_phone
            obj.support_email = values.support_email
            obj.additional_contact = values.additional_contact
            obj.provider_user_contact = values.provider_user_contact
            obj.extra_url = values.extra_url

            // Arrays
            if (values.related_contracts.length === 0) {
                obj.related_contracts = [];
            } else {
                obj.related_contracts = values.related_contracts.map((item: any) => ({
                    label: item.name,
                    value: item.base_id,
                }));
            }

            if (values.related_applications.length === 0) {
                obj.related_applications = [];
            } else {
                obj.related_applications = values.related_applications.map((item: any) => ({
                    label: item.name,
                    value: item.base_id,
                }));
            }

            if (values.related_services.length === 0) {
                obj.related_services = [];
            } else {
                obj.related_services = values.related_services.map((item: any) => ({
                    label: item.name,
                    value: item.base_id,
                }));
            }

            if (values.created_time) {
                obj.created_time = values.created_time
            }
            if (values.last_modified_time) {
                obj.last_modified_time = values.last_modified_time
            }
            if (values.base_id) {
                obj.base_id = values.base_id
            }
            if (values.id_prefix) {
                obj.id_prefix = values.id_prefix
            }
            break;
        case 'license':
            // General data
            obj.name = values.name
            obj.description = values.description
            obj.visibility = values.visibility
            obj.valid_from_date = values.valid_from_date
            obj.valid_until_date = values.valid_until_date
            obj.license_type = values.license_type
            obj.audits = values.audits

            if (!values.contract) {
                obj.contract = null
            } else {
                obj.contract = {value: values.contract.base_id, label: values.contract.name}
            }

            if (values.created_time) {
                obj.created_time = values.created_time
            }
            if (values.last_modified_time) {
                obj.last_modified_time = values.last_modified_time
            }
            if (values.base_id) {
                obj.base_id = values.base_id
            }
            if (values.id_prefix) {
                obj.id_prefix = values.id_prefix
            }
            break;
    }
    return obj
}

export async function postData (navigate: Function, action: string, endpoint: string, values: any): Promise<void> {
    let data;

    const preparedValues = mapUIDataToAPIFormat(endpoint, values)

    try {
        const response = action === 'save'
            ? await client.put(`${endpoint}/${values.base_id}/`, preparedValues)
            : await client.post(`${endpoint}/`, preparedValues)
        data = response.data;
    } catch (e: any) {
        throw Error(e)
    } finally {
        navigate(`/${endpoint}/${data.base_id}`, {
            state: {
                api: endpoint,
                id: data.base_id,
            },
        });
    }
}
