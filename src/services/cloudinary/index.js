import axios from 'axios'
async function uploadFile(file) {
    const formData = new FormData()
    formData.append('upload_preset', 'bex3u0ru')
    formData.append('file', file, file.name)
    formData.forEach((d) => console.log(d))

    const url = 'https://api.cloudinary.com/v1_1/challenge-chan/image/upload'
    const config = {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'content-type': 'multipart/form-data',
        },
    }

    const result = await axios.post(url, formData, config)
    return result
}

export default uploadFile
