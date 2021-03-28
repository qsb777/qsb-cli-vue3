import http from '../service/http'
import requestAddress from './requestAddress'
import * as other from './other'


let ajax = {}
for (const key in requestAddress) {
    const aaa = build(key, requestAddress[key])
    ajax = {
        ...ajax,
        ...aaa
    }
}

function build(key, value) {
    return {
        [key]: (params, options) => {
            http.post(value, params, options)
        }
    }
}



Object.assign(ajax, other)



export default ajax