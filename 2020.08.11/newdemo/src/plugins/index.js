import Vue from 'vue';
import Axios from 'axios';
Vue.use(Axios);

let axios = Axios.create({
     // create 是自定义配置新建一个ajax请求
     baseURL:'https://www.ekings.net/xggy/a/',
     timeout:3000,
    //  请求超过1000毫秒后未响应代表请求失败;
    
})
export default axios