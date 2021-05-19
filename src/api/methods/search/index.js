import httpClient, { methods } from '../../http-client'

export function searchByParams(params) {
    return httpClient({
        url: `/search/${params}`,
        method: methods.GET,
    })
}
