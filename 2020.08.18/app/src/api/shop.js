import { request } from '../utils/request.js';
import { isPlainObject, hasOwnProperty } from '../utils/validata.js';
/*
    获取商品列表 
*/
export function getshopList(params) {
    // 验证params是否存在
    if (typeof params === undefined) {
        return axios.request.get('/goodList',)
    } else {
        // 验证params不能是一个空对象 
        return axios.request.get('/goodList', {
            params
        })
        // 两种区别就是写法不同
        // return request({
        //     url:"/goodList",
        //     methods:"get",
        //     data
        // })
    }

}

// 搜素商品接口 
export function getSearchList(params) {
    //  错误异常处理 params是否是一个对象 
    if (!isPlainObject(params)) {
        throw new Error('xueke request must be Object')
    }
    if (!hasOwnProperty(params, 'word') || params['word'].trim === '') {
        throw new Error ('xueke request word of params can not undefined')
    }
    if(typeof params['word'] != 'string'){
        throw new Error ('xueke typeof word must be string')
    }
 
    // 以上代码 在前期工作不建议写 
    return request.get('/search', {
        params
    })
}

// 获取商品详情 
export function getDetail(data){
    return request({
        url:'/detail',
        method:'get'
    })
}
