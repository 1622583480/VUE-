import Vue from 'vue';
// 所有 使用第三方的 插件 本地的和npm的 

 import loading from './plugins/loading'
// loading 是一个变量 赋值为loading/index.js 暴露的内容 
    
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

Vue.use(loading)