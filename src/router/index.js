import Vue from 'vue'
import Router from 'vue-router'
// 加载vuex
import store from '../store'

// 懒加载路由页面资源（减少应用体积，加快首次加载速度）
const login = () =>
    import ('@/page/login/login')
const home = () =>
    import ('@/page/home/home')
const mana = () =>
    import ('@/page/home/mana')
const learn = () =>
    import ('@/page/home/learn')
const user = () =>
    import ('@/page/home/user')
const daily = () =>
    import ('@/page/home/mana/daily')
const article = () =>
    import ('@/page/home/learn/article')


Vue.use(Router)

const router = new Router({
    mode: 'hash',
    scrollBehavior(to, from, savePosition) {
        if (savePosition) {
            return savePosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [{
            path: '/login',
            name: 'login',
            component: login,
            meta: {
                auth: false
            }
        },
        {
            path: '/',
            component: home,
            children: [{
                path: '/',
                name: '司法管理',
                component: mana
            }, {
                path: '/learn',
                name: '学习园地',
                component: learn,
                children: [{
                    path: '/article',
                    component: article
                }]
            }, {
                path: '/user',
                name: '我的',
                component: user
            }],
            meta: {
                auth: true
            }
        },
        {
            path: '/daily',
            component: daily,
            meta: {
                auth: true
            }
        }
    ]
})
router.beforeEach((to, from, next) => {
    // if (to.matched.some(m => m.meta.auth)) {
    //     if (store.state.isLogin) {
    //         next()
    //     } else {
    //         next({
    //             path: '/login',
    //         })
    //     }
    // } else {
    //     next()
    // }
    if (to.meta.auth) {
        if (store.state.loginToken) {
            next()
        } else {
            next({
                path: '/login'
            })
        }
    } else {
        next()
    }
})
export default router