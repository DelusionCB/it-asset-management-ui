
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

// Default values for directory fetch results
export const DirectoryDefaultResults: DirectoryResults = {
    count: 0,
    next: null,
    previous: null,
    results: [],
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

// Types / Props for Directory data
export interface DirectoryDataProps {
    name: string
    description: string
    base_id: string
    applications: applicationDataProps[]
    created_time: string
    last_modified_time: string
    id_predix: string
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
    provider: null
    related_services: []
    required_installations: []
}

export const serviceDefaultValues: serviceDataProps = {
    name: '',
    description: '',
    service_status: '',
    operating_organization: '',
    criticality: '',
    service_level: '',
    service_type: '',
    validity_type: '',
    limitations: '',
    product_owner: '',
    service_holder: '',
    provider_role: '',
    provider_contact: '',
    additional_contacts: '',
    fileUrl: null,
    contract: '',
    provider: null,
    related_services: [],
    required_installations: [],
}

export interface extendedDirectoryDataProps {
    name: string
    description: string
    base_id?: string
    applications: applicationDataProps[]
    servers: serverItemProps[]
    services: serverItemProps[]
    created_time?: string
    last_modified_time?: string
    id_predix?: string
    visibility: string
}

export const directoryDefaultValues: extendedDirectoryDataProps = {
    name: '',
    description: '',
    applications: [],
    servers: [],
    services: [],
    visibility: 'published',
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

export interface serverItemProps {
    name: string
    description: string
    id: string
}

export interface licenseItemProps {
    name: string
    id: string
    valid_from_date: string
    valid_until_date: string
}

export interface appDependencyItemProps {
    name: string
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
    keywords?: string
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
    license?: licenseItemProps | null
    installed_server?: serverItemProps | null
    service_dependency: ServiceDependencyDataProps[]
    integration: IntegrationsDataProps[]
    application_dependency?: appDependencyItemProps | null
}

export interface ServiceDependencyDataProps {
    name: string
    description: string
}

export interface IntegrationsDataProps {
    name: string
    description: string
}

export const appDefaultValues: extendedApplicationDataProps = {
    name: '',
    description: '',
    visibility: 'published',
    classification: '',
    place_of_use: '',
    status: '',
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
    provider: '',
    provider_responsibility: '',
    additional_contacts: '',
    known_issues: '',
    contract: null,
    fileUrl: null,
    license: null,
    installed_server: null,
    service_dependency: [],
    integration: [],
    application_dependency: null,
}
