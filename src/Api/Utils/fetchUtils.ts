import client from '../Client';
import {DirectoryFetchParams, EndpointFetchParams, itemFetchParams} from '../../Types/types.directories';

export async function getDirectories ({pageNumber = 1, countNumber = 6}: DirectoryFetchParams): Promise<any> {
    const queryParams = new URLSearchParams({
        page: `${pageNumber}`,
        count: `${countNumber}`,
    }).toString()

    try {
        const {data} = await client.get(`directory/?${queryParams}`)
        return data
    } catch (e: any) {
        throw Error(e)
    }
}

export async function getItemData ({itemId, apiPath}: itemFetchParams): Promise<any> {
    try {
        const {data} = await client.get(`${apiPath}/${itemId}`)
        return data
    } catch (e: any) {
        throw Error(e)
    }
}

export async function getEndpointData ({endpoint, filter}: EndpointFetchParams): Promise<any> {
    const queryParams = new URLSearchParams({
        name: `${filter}`,
    }).toString()
    try {
        const {data} = await client.get(`${endpoint}/?${queryParams}`)
        return data
    } catch (e: any) {
        throw Error(e)
    }
}
