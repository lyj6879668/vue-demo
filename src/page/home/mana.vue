<template>
    <div id="learn">
        <ul class="list">
            <li v-for='(item,index) in list' :key='index' @click="todetail(item.url)">
                <img :src='item.icon' alt="">
                <p>{{item.tit}}</p>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data() {
        return {
            list: [
                {
                    url: '/daily',
                    icon: '/static/img/logo.png',
                    tit: '每日抽检'
                },
                {
                    url: '/daily',
                    icon: '/static/img/logo.png',
                    tit: '通知通告'
                },
                {
                    url: '/daily',
                    icon: '/static/img/logo.png',
                    tit: '每周点名'
                },
                {
                    url: '/daily',
                    icon: '/static/img/logo.png',
                    tit: '社区服务'
                },
                {
                    url: '/daily',
                    icon: '/static/img/logo.png',
                    tit: '申请'
                },
                {
                    url: '/daily',
                    icon: '/static/img/logo.png',
                    tit: '留言板'
                }
            ]
        }
    },
    methods: {
        todetail(url) {
            console.log(url)
            this.$router.push({path: '/daily'})
        }
    }
}
</script>

<style lang="scss" scoped>
.list {
    margin: 30px auto 0;
    li {
        float: left;
        width: 25%;
        margin-bottom: 20px;
        img {
            margin: 0 auto;
            width: 24px;
            height: 24px;
        }
        p {
            font-size: 12px;
        }
    }
}
</style>
