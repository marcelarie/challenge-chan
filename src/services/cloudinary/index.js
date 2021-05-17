async function uploadFile(files) {
    const formData = new FormData()
    formData.append('file', file[0])
    formData.append('upload-preset', 'xdxp8hzf')

    const url = 'https://api.cloudinary.com/v1_1/challenge-chan/image/upload'
    const config = {
        headers: { 'content-type': 'multipart/form-data' },
    }

    const result = await axios.post(url, formData, config)
    console.log(result)
}

export default uploadFile
