<template>
    <div id="home">
        <!-- <mt-tab-container class="page-tabbar-container" v-model="selected">
            <mt-tab-container-item id="司法管理">
                <mana-page></mana-page>
            </mt-tab-container-item>
            <mt-tab-container-item id="学习园地">
                <learn-page></learn-page>
            </mt-tab-container-item>
            <mt-tab-container-item id="我的">
                <user-page></user-page>
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="司法管理">
                <img slot="icon" src="/static/img/logo.png"> 司法管理
            </mt-tab-item>
            <mt-tab-item id="学习园地">
                <img slot="icon" src="/static/img/logo.png"> 学习园地
            </mt-tab-item>
            <mt-tab-item id="我的">
                <img slot="icon" src="/static/img/logo.png"> 我的
            </mt-tab-item>
        </mt-tabbar> -->

        <div class="buttom-bar">
            <router-link v-for='(item,index) in this.$router.options.routes[1].children' :key='index' :to="item.path">{{item.name}}</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {}
    },
    watch: {
        $route(to, from) {}
    },
    methods: {
        init() {}
    },
    mounted() {
        this.init()
    }
}
</script>

<style lang="scss" scoped>
#home {
    .buttom-bar {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 25rem;
        height: 25rem;
        a {
            float: left;
            width: 33.3%;
        }
    }
}
</style>
