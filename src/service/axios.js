import axios from 'axios'
// import qs from 'qs'
import {
    showLoading,
    hideLoading,
    responseHandle
} from './help'
import {
    message
} from 'ant-design-vue'

const isDev = process.env.NODE_ENV === 'development'

const baseURL = isDev ? 'http://192.168.22.39:8010' : ''

axios.defaults.timeout = 3000
axios.defaults.headers = {
    'Content-type': 'application/x-www-form-urlencoded'
}
const instance = axios.create({
    baseURL,
    transformRequest: [function (data) {
        // 将数据转换为表单数据
        // data = qs.stringify(data)
        console.log(data)
        return data
    }],
})

instance.interceptors.request.use(function (config) {
    showLoading()
    return config
}, function (error) {
    hideLoading()
    message.destroy()
    message.error('请求错误')
})

instance.interceptors.response.use(function (response) {
    hideLoading()
    responseHandle(response)
}, function (error) {
    hideLoading()
    message.destroy()
    message.error('网络错误')
})
export default instance