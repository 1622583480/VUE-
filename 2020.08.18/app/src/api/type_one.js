import { request } from "../utils/request.js";
export function getType_one(){
    // 获取商品一级分类 
    return request.get ({
        url:'/getTypeone',
        method:'get'
    })
}