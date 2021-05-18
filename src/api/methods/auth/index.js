import httpClient, { methods } from '../../http-client'

export function signUp(data) {
    return httpClient({
        url: '/user/sign-up',
        method: methods.POST,
        data,
    })
}

