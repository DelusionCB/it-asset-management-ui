import axios from 'axios'
import get from 'lodash/get'

export class ApiClient {
    baseUrl = process.env.REACT_APP_API_KEY

    constructor (baseUrl: string) {
        this.baseUrl = baseUrl
    }

    getUrl = (endpoint: string): string => {
        const endsWithTrailingSlash = endpoint.substring(endpoint.length - 1) === '/'
        return `${this.baseUrl}/${endpoint}${endsWithTrailingSlash ? '' : ''}`
    }

    request = async ({
        method = '',
        endpoint = '',
        data = {},
    }): Promise<{data: any, status: any}> => {
        const dataOrParams = ['GET', 'DELETE'].includes(method.toUpperCase()) ? 'params' : 'data'
        return await axios
            .request({
                method,
                url: this.getUrl(endpoint),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                [dataOrParams]: data,
            })
            .then(response => ({
                data: get(response, 'data'),
                status: get(response, 'status'),
            }))
    }

    /**
     * Make a GET request into the API.
     * @param endpoint
     * @param data
     * @param config
     * @returns {Promise}
     */
    get = async (endpoint: string, data = {}, config = {}): Promise<{data: any, status: any}> => await this.request({
        method: 'GET',
        endpoint,
        data,
        ...config,
    })

    /**
     * Make a POST request into the API.
     * @param endpoint
     * @param data
     * @param config
     * @returns {Promise}
     */
    post = async (endpoint: string, data = {}, config = {}): Promise<{data: any, status: any}> => await this.request({
        method: 'POST',
        endpoint,
        data,
        ...config,
    })

    /**
     * Make a DELETE request into the API.
     * @param endpoint
     * @param data
     * @param config
     * @returns {Promise}
     */
    delete = async (endpoint: string, data = {}, config = {}): Promise<{data: any, status: any}> => await this.request({
        method: 'DELETE',
        endpoint,
        data,
        ...config,
    })

    /**
     * Make a PUT request into the API.
     * @param endpoint
     * @param data
     * @param config
     * @returns {Promise}
     */
    put = async (endpoint: string, data = {}, config = {}): Promise<{data: any, status: any}> => await this.request({
        method: 'PUT',
        endpoint,
        data,
        ...config,
    })

    /**
     * Make a PATCH request into the API.
     * @param endpoint
     * @param data
     * @param config
     * @returns {Promise}
     */
    patch = async (endpoint: string, data = {}, config = {}): Promise<{data: any, status: any}> => await this.request({
        method: 'PATCH',
        endpoint,
        data,
        ...config,
    })
}

export default new ApiClient(process.env.REACT_APP_API_KEY as string);
