import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Login from '@/views/login.vue'
import Index from '@/views/index.vue'
import Userlist from '@/views/userlist.vue'
import Articlelist from '@/views/article/articlelist.vue'
let router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: { name: 'index' },
        },
        {
            component: Login,
            name: 'login',
            path: '/login',
        },
        // 添加主页路由
        {
            component: Index,
            name: 'index',
            path: '/index',
            redirect: { name: 'userlist' },
            // 嵌套路由
            children: [
                // 嵌套没有  /
                {
                    component: Userlist,
                    name: 'userlist',
                    path: 'userlist',
                },
                {
                    component: Articlelist,
                    name: 'articlelist',
                    path: 'articlelist',
                },

            ],
        }
    ]
})

// 添加导航守卫
router.beforeEach((to, from, next) => {
    if (to.path == '/login') {
        // 表示如果去登录页面的话 随便去
        next()
    } else {
        // 如果不是去登录页面的话   获取token值 看看用户有没有登陆过
        let token = localStorage.getItem('heima_pc');
        if (token) {
            // 如果有token 就跳转
            next()
        } else {
            // 如果验证失败 就去登录页面
            next({
                path: '/login'
            })
        }

    }
})


export default router

