// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
// import $ from 'jquery'
import store from './store'

// css
import '@/assets/css/reset.css'

// common.js
// import '@/assets/js/common.js'

// mint-ui
import Mint, { Toast, Indicator } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
Vue.prototype.$toast = Toast
Vue.prototype.$indicator = Indicator

// 页面
import manaPage from '@/page/home/mana.vue'
import learnPage from '@/page/home/learn.vue'
import userPage from '@/page/home/user.vue'
Vue.component('mana-page', manaPage)
Vue.component('learn-page', learnPage)
Vue.component('user-page', userPage)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})