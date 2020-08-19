import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入路由
Vue.config.productionTip = false

new Vue({
  router,
  store,

  // 调用 之前暴露的路由 这里是es6简写 挂载到Vue上面

  render: h => h(App)
}).$mount('#app');




// 生命周期函数 判断 是否有rander
//  rander 函数 


// .$mount('#app') 作用和el一样 指定根元素 
