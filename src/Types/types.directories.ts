
// Parameters used to modify fetch for directories
export interface DirectoryFetchParams {
    countNumber?: number | string
    pageNumber?: number | string
    endpoint?: string
}

export interface EndpointFetchParams {
    endpoint: string
    filter: string
}

// Parameters / props used to fetch items like applications or licenses
export interface itemFetchParams {
    itemId: string | undefined
    apiPath: string | undefined
}

// Types for results from fetch for directories
export interface DirectoryResults {
    count?: number
    next?: null | string
    previous?: null | string
    results: any[]
}

// Types for Directory context
export interface DirectoryContextType {
    directories: Record<string, DirectoryResults>
    loading: boolean
}

// Types / Props for Directory folder
export interface DirectoryFolderProps {
    data: any
    endpoints: string[]
}

// Types / Props for application data inside Directory data
export interface applicationDataProps {
    base_id: string
    id_prefix: string
    name: string
    description: string
}

export interface providerDataPropTypes {
    base_id?: string
    id_prefix?: string
    created_time?: string
    last_modified_time?: string
    name: string
    description: string
    visibility?: string
    business_id: string
    provider_type: string
    full_address: string
    switch_phone: string
    general_email: string
    support_phone: string
    support_email: string
    additional_contact: string
    provider_user_contact: string
    extra_url: string
    related_contracts: contractDataPropTypes[]
    related_applications: applicationDataProps[]
    related_services: serviceDataProps[]
}

// Types / Props for Directory data
export interface DirectoryDataProps {
    name: string
    description: string
    base_id: string
    applications: applicationDataProps[]
    created_time: string
    last_modified_time: string
    id_prefix: string
}

export interface serviceDataProps {
    base_id?: string
    base_token?: string
    id_prefix?: string
    name: string
    description: string
    created_time?: string
    last_modified_time?: string
    service_status: string
    customership: customerDataProps[]
    criticality: string
    service_level: string
    service_type: string
    validity_type: string
    limitations: string
    product_owner: string
    service_holder: string
    provider_role: string
    provider_contact: string
    additional_contacts: string
    fileUrl: string | null
    contract: contractDataPropTypes | null
    provider: providerDataPropTypes | null
    related_services: serviceDataProps[]
    required_installations: applicationDataProps[]
    visibility: string
}

export interface integrationDataPropTypes {
    base_id?: string
    base_token?: string
    id_prefix?: string
    name: string
    description: string
    created_time?: string
    last_modified_time?: string
    server_platform: serverDataPropTypes | null
    environment_type: string
    visibility: string
}

export interface extendedDirectoryDataProps {
    name: string
    description: string
    base_id?: string
    applications: applicationDataProps[]
    servers: serverDataPropTypes[]
    services: serviceDataProps[]
    created_time?: string
    last_modified_time?: string
    id_prefix?: string
    visibility: string
}

export interface contractDataPropTypes {
    base_id?: string
    created_time?: string
    last_modified_time?: string
    id_prefix?: string
    visibility: string
    name: string
    description: string
    contract_number: string
    contract_type: string
    provider_contact: string
    invoices_per_year: number
    value_per_year: number
    place_of_use: string
    valid_from_date: string
    valid_until_date: string
    contract_continuation: string
    contract_decisions: string
    contract_holder: string
    fileUrl: string | null
    provider: providerDataPropTypes | null
    related_applications: applicationDataProps[]
}

export interface licenseDataPropTypes {
    base_id?: string
    id_prefix?: string
    visibility: string
    name: string
    description: string
    audits: string
    created_time?: string
    last_modified_time?: string
    valid_from_date: string
    valid_until_date: string
    license_type: string
    fileUrl: string | null
    contract: contractDataPropTypes | null
}

export interface DirectoryItemProps {
    data: applicationDataProps
}

export interface serverDataPropTypes {
    name: string
    description: string
    base_id?: string
    id_prefix?: string
    applications: applicationDataProps[]
    created_time?: string
    last_modified_time?: string
    visibility: string
    server_role: string
    customership: customerDataProps[]
    place_of_use: string
    product_owner: string
    server_model: string
    backup_data: string
    backup_device: string
    public_ip_addresses: string
    dns_names: string
    server_type: string
    environment_type: string
    dedicated: string
    maintenance_window: string
    device_criticality: string
    security_level: string
    service_level: string
    server_status: string
    install_date: string
    ip_address: string
    updates: string
    verification_practices: string
    recovery_practices_convalescence: string
    logging: string
    access_rights_management: string
    security_solutions: string
    external_rights: string
    domain_name: string
    sub_domain: string
    ip_address_type: string
    subnet_mask: string
    default_gateway: string
    mac_address: string
}

export interface licenseItemProps {
    name: string
    description: string
    base_id: string
    id_prefix?: string
    valid_from_date: string
    valid_until_date: string
    license_type?: string
    contract?: string
}

export interface appDependencyItemProps {
    name: string
    description: string
    base_id: string
    id_prefix: string
}

// Types / Props for extended Application data
export interface extendedApplicationDataProps {
    base_id?: string
    name: string
    visibility: string
    description: string
    created_time?: string
    last_modified_time?: string
    classification: string
    customership: customerDataProps[]
    application_status: string
    person_register: boolean
    personal_info_logging: boolean
    install_info: string
    keywords: string
    update_practice: string
    security_practice_monitoring: string
    recovery_practices_convalescence: string
    log_archives: string
    user_rights_management: string
    security_solutions: string
    product_owner: string
    application_holder: string
    admin_users: string
    liability_professional_users: string
    holder_extra_info: string
    provider: providerDataPropTypes | null
    provider_responsibility: string
    additional_contacts: string
    known_issues: string
    contract: null
    fileUrl: string | null
    license: licenseItemProps | null
    installed_server: serverDataPropTypes[]
    service_dependency: ServiceDependencyDataProps[]
    integration: IntegrationsDataProps[]
    application_dependency: appDependencyItemProps[]
}

export interface ServiceDependencyDataProps {
    name: string
    description: string
    id_prefix: string
    base_id: string
}

export interface customerDataProps {
    name: string
    description: string
    id_prefix: string
    base_id: string
}

export interface IntegrationsDataProps {
    name: string
    description: string
    id_prefix: string
    base_id: string
}
