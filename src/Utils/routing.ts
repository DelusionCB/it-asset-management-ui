
export function getEndpoint (endpoint: string): string {
    let path
    switch (endpoint) {
        case 'app':
            path = 'application'
            break;
        case 'dir':
            path = 'directory'
            break;
        case 'lcn':
            path = 'license'
            break;
        case 'con':
            path = 'contract'
            break;
        case 'srv':
            path = 'server'
            break;
        case 'ser':
            path = 'service'
            break;
        case 'pro':
            path = 'provider'
            break;
        case 'int':
            path = 'integration'
            break;
        default:
            path = ''
            break;
    }
    return path
}

export function redirectTo (navigate: Function, endpoint: string = '', e: string = ''): void {
    navigate(`/${getEndpoint(endpoint)}/${e}`, {
        state: {
            path: getEndpoint(endpoint),
            id: e,
            api: getEndpoint(endpoint),
        },
    });
}
// /:action/:id
export function redirectToAction (navigate: Function, action: string, id: string = 'new'): void {
    navigate(`/archive/${action}/${id}`, {
        state: {
            action,
            id,
        },
    });
}
