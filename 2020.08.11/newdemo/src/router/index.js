import Vue from 'vue'
import VueRouter from 'vue-router'  // 路由插件 这是一个独立的插件 插件不使用是不生效的 
// import ListItem from "../components/TabSwitch/ListItem/index.vue"


Vue.use(VueRouter); // 这一行就是在Vue上使用路由插件 
// Vue.use();  就是调用使用已经引入的插件 官方插件和第三方插件 
// 一般来说npm 安装的插件 axios  等等等 都需要use调用 



  const routes = [
  // {
  //   path: '/ListItem /:UserName/:ID',
  //   name: 'ListItem',
  //   component: ListItem
  // },
  {
    path:"/",
    redirect:'./index/home'
  },
  {
    path:"/index",
    component:()=>import('../views/index/'),
    children:[
      {path:'home',component:()=>import('../views/home')},
      {path:"find",component:()=>import('../views/find')},
      {path:"adress",component:()=>import('../views/adress')},
      {path:"mine",component:()=>import('../views/mine')}
    ]
    // 当然也可以最上面引入 然后写法不同
    // 只不过一个是同步加载 一个是异步加载 
    // 异步加载组件 路由懒加载 可以解决页面首屏卡顿问题 

    // 页面组件异步加载  因为页面组件由多个组件 
    // 构成 容易阻塞太卡 所以使用异步加载
    // 其他组件同步加载 
  },
  {
    path:'/register',
    component:()=>import('../views/register')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // 这里也是es6简写 routes:routes 
})

export default router
// 暴露 router 实例化对象 在引入本js文件的文件可以直接使用此变量 
