import http from '../service/http'

export const dynamicApi = (url, data, options) => {
    return http.post(url, data, options)
}