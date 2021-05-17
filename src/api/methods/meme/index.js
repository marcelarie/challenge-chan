import httpClient, { methods } from '../../http-client'

export function postMeme(data) {
    return httpClient({
        url: '/meme/post',
        method: methods.POST,
        data,
    })
}
