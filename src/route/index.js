import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Login from '@/views/login.vue'
let router = new VueRouter({
    routes: [

        {
            component: Login,
            name: 'login',
            path: '/login',
        }
    ]
})



export default router

