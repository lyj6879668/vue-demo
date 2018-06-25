import { request } from '@/utils/request'

// 登录
export function getLogin({ loginName, password, sbm }) {
    let res = request('/apiqmt/sys/qmtXsmZzsbUser/login', 'POST', { loginName, password, sbm })
    return res
}