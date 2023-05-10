
// Parameters used to modify fetch for directories
export interface DirectoryFetchParams {
    countNumber?: number | string
    pageNumber?: number | string
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
    count: number
    next: null | string
    previous: null | string
    results: DirectoryDataProps[]
}

// Types for Directory context
export interface DirectoryContextType {
    directories: DirectoryResults
    updateContext: (pageNumber?: number, countNumber?: number) => void
}

// Types / Props for Directory folder
export interface DirectoryFolderProps {
    data: DirectoryResults
}

// Types / Props for application data inside Directory data
export interface applicationDataProps {
    base_id: string
    id_prefix: string
    name: string
    description: string
}

export interface providerDataPropTypes {
    base_id: string
    id_prefix: string
    name: string
    description: string
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
    operating_organization: string
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
    contract: string
    provider: providerDataPropTypes | null
    related_services: []
    required_installations: []
    visibility: string
}

export interface extendedDirectoryDataProps {
    name: string
    description: string
    base_id?: string
    applications: applicationDataProps[]
    servers: serverDataProps[]
    services: serviceDataProps[]
    created_time?: string
    last_modified_time?: string
    id_prefix?: string
    visibility: string
}

export interface contractDataProps {
    name: string
    description: string
    base_id?: string
    created_time?: string
    last_modified_time?: string
    placeholder: string
    id_prefix?: string
    visibility: string
}

export interface LicenseDataProps {
    base_id?: string
    id_prefix?: string
    name: string
    description: string
    created_time?: string
    last_modified_time?: string
    valid_from_date: string
    valid_until_date: string
    license_type: string
    fileUrl: string | null
    contract: string
}

export interface DirectoryItemProps {
    data: applicationDataProps
}

export interface serverDataProps {
    name: string
    description: string
    base_id?: string
    id_prefix?: string
    applications: applicationDataProps[]
    created_time?: string
    last_modified_time?: string
    visibility: string
    server_role: string
    operating_organization: string
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
    status: string
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
    place_of_use: string
    status: string
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
    provider: string
    provider_responsibility: string
    additional_contacts: string
    known_issues: string
    contract: null
    fileUrl: string | null
    license: licenseItemProps | null
    installed_server: serverDataProps | null
    service_dependency: ServiceDependencyDataProps[]
    integration: IntegrationsDataProps[]
    application_dependency: appDependencyItemProps | null
}

export interface ServiceDependencyDataProps {
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
