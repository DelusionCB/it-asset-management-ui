import {
    contractDataProps, DirectoryResults,
    extendedApplicationDataProps,
    extendedDirectoryDataProps,
    LicenseDataProps, providerDataPropTypes,
    serverDataProps, serviceDataProps,
} from './types.directories';

export const appDefaultValues: extendedApplicationDataProps = {
    name: '',
    description: '',
    visibility: 'published',
    classification: 'tosi',
    customership: [],
    application_status: 'undefined',
    person_register: false,
    personal_info_logging: false,
    install_info: '',
    keywords: '',
    update_practice: '',
    security_practice_monitoring: '',
    recovery_practices_convalescence: '',
    log_archives: '',
    user_rights_management: '',
    security_solutions: '',
    product_owner: '',
    application_holder: '',
    admin_users: '',
    liability_professional_users: '',
    holder_extra_info: '',
    provider: null,
    provider_responsibility: '',
    additional_contacts: '',
    known_issues: '',
    contract: null,
    fileUrl: null,
    license: null,
    installed_server: [],
    service_dependency: [],
    integration: [],
    application_dependency: [],
}

export const licenseDefaultValues: LicenseDataProps = {
    base_id: '',
    id_prefix: '',
    name: '',
    description: '',
    created_time: '',
    last_modified_time: '',
    valid_from_date: '',
    valid_until_date: '',
    license_type: '',
    fileUrl: null,
    contract: '',
}

export const serverDefaultValues: serverDataProps = {
    name: '',
    description: '',
    base_id: '',
    id_prefix: '',
    applications: [],
    created_time: '',
    last_modified_time: '',
    visibility: '',
    server_role: '',
    service_level: '',
    operating_organization: '',
    place_of_use: '',
    product_owner: '',
    server_model: '',
    backup_data: '',
    backup_device: '',
    public_ip_addresses: '',
    dns_names: '',
    server_type: '',
    environment_type: '',
    dedicated: '',
    maintenance_window: '',
    device_criticality: '',
    security_level: '',
    status: '',
    install_date: '',
    ip_address: '',
    updates: '',
    verification_practices: '',
    recovery_practices_convalescence: '',
    logging: '',
    access_rights_management: '',
    security_solutions: '',
    external_rights: '',
    domain_name: '',
    sub_domain: '',
    ip_address_type: '',
    subnet_mask: '',
    default_gateway: '',
    mac_address: '',
}

export const contractDefaultValues: contractDataProps = {
    name: '',
    description: '',
    placeholder: '',
    visibility: 'published',
}

export const directoryDefaultValues: extendedDirectoryDataProps = {
    name: '',
    description: '',
    applications: [],
    servers: [],
    services: [],
    visibility: 'published',
}

export const providerDefaultValues: providerDataPropTypes = {
    name: '',
    description: '',
    visibility: 'published',
    business_id: '',
    provider_type: 'inhouse',
    full_address: '',
    switch_phone: '',
    general_email: '',
    support_phone: '',
    support_email: '',
    additional_contact: '',
    provider_user_contact: '',
    extra_url: '',
    related_contracts: [],
    related_applications: [],
    related_services: [],
}

export const serviceDefaultValues: serviceDataProps = {
    name: '',
    description: '',
    service_status: 'undefined',
    customership: [],
    criticality: 'normal',
    service_level: '',
    service_type: 'other',
    validity_type: 'ongoing',
    limitations: '',
    product_owner: '',
    service_holder: '',
    provider_role: '',
    provider_contact: '',
    additional_contacts: '',
    fileUrl: null,
    contract: null,
    provider: null,
    related_services: [],
    required_installations: [],
    visibility: 'published',
}

export const directoryDefaultResults: DirectoryResults = {
    count: 0,
    next: null,
    previous: null,
    results: [],
}
