import axios from '../plugins/index'
export function Personal(data) {
    return axios.post('/weixinview/grxx',{
        data
    })
}
export function Disciplinary() {
    return axios.post('/weixinview/wjcf',{
       "loginname":"184038592"
    })
}
