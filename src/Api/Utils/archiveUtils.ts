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
            obj.place_of_use = values.place_of_use
            obj.status = values.status
            obj.person_register = values.person_register
            obj.personal_info_logging = values.personal_info_logging
            obj.install_info = values.install_info
            obj.keywords = values.keywords
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
            obj.provider = values.provider
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
            if (!values.installed_server) {
                obj.installed_server = null
            } else {
                obj.installed_server = values.installed_server.value
            }
            if (!values.application_dependency) {
                obj.application_dependency = null
            } else {
                obj.application_dependency = values.application_dependency.value
            }
            if (values.service_dependency.length === 0) {
                obj.service_dependency = []
            } else {
                obj.service_dependency = values.service_dependency.map((item: any) => item.value)
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
            if (values.id) {
                obj.id = values.id
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
    }
    return obj
}

export async function postData (navigate: Function, action: string, endpoint: string, values: object): Promise<void> {
    let data;

    const preparedValues = mapUIDataToAPIFormat(endpoint, values)

    try {
        const response = action === 'edit'
            ? await client.put(`${endpoint}/`, preparedValues)
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
