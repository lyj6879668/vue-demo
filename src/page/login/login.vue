<template>
    <div id="login">
        <ul>
            <li>
                <label for="">账号</label>
                <input type="text" v-model="loginName">
            </li>
            <li>
                <label for="">密码</label>
                <input type="passowrd" v-model="password">
            </li>
        </ul>
        <button @click="login">登录</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'login',
    data() {
        return {
            loginName: '',
            password: ''
        }
    },
    watch: {
        $route(to, from) {
            if (this.$route.path.includes('login')) {
                this.init()
            }
        }
    },
    methods: {
        ...mapActions(['get_login_data']),
        login() {
            let params = {
                loginName: this.loginName,
                password: this.password
            }
            if (this.loginName && this.password) {
                this.get_login_data(params).then(() => {
                    // localStorage.loginName = this.loginName
                    // localStorage.password = this.password
                    // this.$store.state.isLogin = true
                    // this.$router.replace({ path: '/' })
                })
            } else {
                Toast('请输入账号和密码')
            }
        },
        init() {
            if (this.$store.state.isLogin) {
                this.$router.replace({ path: '/' })
            }
        }
    },
    mounted() {
        this.init()
    }
}
</script>