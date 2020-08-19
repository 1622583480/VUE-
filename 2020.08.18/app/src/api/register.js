import { request } from '../utils/request.js';

// 注册接口
export function onRegister(data) {
    return request({
        url: '/register',
        method: 'get',
        data,
    })
}