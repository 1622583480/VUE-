import Vue from 'vue' // 导入vue 前面的变量名随意
// 这里引入的 都是相对路径 默认导入node_modules里面的
import App from './App.vue'  
import './assets/font_hz52tovspc/iconfont.css'  
import './assets/font/iconfont.css'
// import 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1'
import './assets/font-icon字体图标库/css/font-awesome.css'

// 上方都是引入

// 设置为开发环境 
Vue.config.productionTip = false

// 实例化一个vue对象 
// 整个项目一般来说都只有一个vue实例
new Vue({

  render: h => h(App),  //渲染app.vue组件
}).$mount('#app') // el指定根模板 
