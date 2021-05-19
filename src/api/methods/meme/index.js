import httpClient, { methods } from '../../http-client'

export function postMemeMethod(data) {
    return httpClient({
        url: '/meme/post',
        method: methods.POST,
        data,
    })
}

export function getMemesMethod(topic) {
    return httpClient(
        {
            url: `/meme/all/${topic}`,
            method: methods.GET,
        },
        false
    )
}
