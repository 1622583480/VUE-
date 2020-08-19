import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: "*", name: "ERROR", component: () => import('@/views/Error') },
  { path: "/", redirect: '/home' },
  {
    path: "/home",
    name: "Home",
    component: () => import('@/views/Home'),
    children: [
      {
        path: "/home/login",
        name: "Login",
        component: () => import('@/views/Login')
      },
      {
        path: "/home/register",
        name: "Register",
        component: () => import('../views/Register')
      },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
