import httpClient, { methods } from '../../http-client'

export function getUserMethod(id) {
    return httpClient({
        url: `/user/${id}`,
        method: methods.GET,
    })
}
