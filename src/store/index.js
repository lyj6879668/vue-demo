import Vue from 'vue'
import Vuex from 'vuex'
import { getLogin } from '@/api'

Vue.use(Vuex)

const state = {
    loginToken: false
}

const getters = {

}

const mutations = {
    save_login(state) {
        state.loginToken = true
    }
}

const actions = {
    // 获取登录数据
    async get_login_data({ commit }, params) {
        return new Promise((resolve, reject) => {
            getLogin(params)
                .then(res => {
                    if (res.data) {
                        resolve(res.data)
                    } else {
                        // reject(new Error('nothing data'))
                        reject(res)
                    }
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
    // 获取用户数据

    // 获取列表数据
}


export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})