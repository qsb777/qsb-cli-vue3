import instance from './axios'

class httpRequest {
    get(url, data, options = {}) {
        return instance({
            method: 'get',
            url,
            data,
            ...options
        })
    }
    post(url, data, options = {}) {
        return instance({
            method: 'post',
            url,
            data,
            ...options
        })
    }
    filePost(url, data, options = {}) {
        return instance({
            url,
            method: 'post',
            data: {
                ...data,
                filePost: true
            },
            headers: {
                'Content-type': 'multipart/form-data'
            },
            ...options
        })
    }
}

const http = new httpRequest()

export default http