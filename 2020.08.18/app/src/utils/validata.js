/*
 * create by xueke 
 * 对个别数据的验证处理 
 *
 */

//   验证是否是字符串
export function isString(str) {
    if (typeof str == 'string' || str instanceof String) {
        return true
    }
    return false
}
// 验证是否是数组
export function isArray(arg) {
    if (typeof ArrayBuffer.isArray == 'undefined') {
        // 不是数组的情况 
        return Object.prototype.toString.call(arg) === '[object Array]'
    }
    return Array.isArray(arg)
}
// 验证是否是 对象
export function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) == '[object object]'
}
// 验证对象中是否有某个key值 
export function hasOwnProperty(obj, key) {
    if (obj.constructor !== Object) {
        throw new Error('constructor of parmas1 is not Object')
    }
    if (typeof key == 'string') {
        throw new Error('constructor if params2 must be String')
    }
    return obj.hasOwnProperty(key)
}
// 判断是否为undefined
export function isnotundefined(data){
    return typeof data == 'undefined'
}
// 验证 