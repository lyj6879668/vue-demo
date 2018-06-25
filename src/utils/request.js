import axios from 'axios'
import qs from 'qs'
import { Toast } from 'mint-ui'
// 创建axios实例
export const instance = axios.create({
    baseURL: 'http://192.168.5.237:8019/zzsb',
    timeout: 15000
})

// request拦截器
instance.interceptors.request.use(config => {
    return config
}, error => {
    // Do something with request error
    Promise.reject(error)
})

// respone拦截器
instance.interceptors.response.use(response => {
    const res = response.data
    if (res && res.error) {
        return Promise.reject(res.error)
    }
    return response
}, error => {
    // Message({
    //     message: error.message,
    //     type: 'error',
    //     duration: 5 * 1000
    // })
    Toast(err.message)

    return Promise.reject(error)
})

export const request = async(url = '', type = 'POST', data = {}) => {
    let result
    type = type.toUpperCase()
    if (type === 'GET') {
        await instance.get(url, { params: data })
            .then(res => {
                result = res.data
            })
    } else if (type === 'POST') {
        await instance.post(url, qs.stringify(data))
            .then(res => {
                result = res.data
            })
    }
    return result
}