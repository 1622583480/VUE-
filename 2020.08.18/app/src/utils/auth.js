/**
 * 处理token的 
 */
const Tokenkey = 'Admin-Token'

export function getToken(){ //查
    // 获取用户Tokken
    return sessionStorage.getItem(Token)
}
export function setToken(token){ // 改
    // 存储用户Token
    return sessionStorage.setItem(Token,token)
}   
export function removeToken(){ // 删 
    // 删除用户Token
    return sessionStorage.removeItem(Tokenkey)
}
