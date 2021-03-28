import store from '../store'
import {
    message
} from 'ant-design-vue'

let needLoadingCount = 0

function showLoading() {
    if (needLoadingCount === 0) {
        store.commit('loadingControl', true)
    }
    needLoadingCount++
}

function hideLoading() {
    if (needLoadingCount <= 0) return
    needLoadingCount--
    if (needLoadingCount === 0) {
        store.commit('loadingControl', false)
    }
}

function responseHandle(res) {
    if (res.status === 200) {
        return res.data
    } else {
        switch (res.status) {
            case 10001:
                message.error('请求错误')
                break;

            default:
                break;
        }

    }
}


export {
    showLoading,
    hideLoading,
    responseHandle
}