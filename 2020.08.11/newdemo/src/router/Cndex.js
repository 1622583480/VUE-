import Vue from 'Vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

let routes = [
    {
        path:'/Hello',
        component
    }
];
const router = new VueRouter({
    routes,
})

export default router