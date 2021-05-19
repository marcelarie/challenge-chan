import httpClient, { methods } from '../../http-client'

export function postMemeMethod(data) {
    return httpClient({
        url: '/meme/post',
        method: methods.POST,
        data,
    })
}

export function getMemesMethod() {
    return httpClient(
        {
            url: '/meme/all',
            method: methods.GET,
        },
        false
    )
}
