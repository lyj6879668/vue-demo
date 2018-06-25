<template>
    <div id="user">
        <p>张三</p>
        <p @click="logout">退出</p>
    </div>
</template>

<script>
    export default {
        methods: {
            logout() {
                localStorage.clear()
                this.$store.state.isLogin = false
                this.$router.replace({path: '/login'})
            }
        }
    }
</script>