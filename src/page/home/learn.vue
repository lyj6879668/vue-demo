<template>
    <div id="learn">
        <p>张三</p>
        <router-link v-for='(item,index) in list' :key='index' :to="`/learn/article`">{{item.name}}</router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [
                    {
                        id: '11',
                        name: '00000'
                    },{
                        id: '11',
                        name: '00000'
                    },{
                        id: '11',
                        name: '00000'
                    },
                ]
            }
        },
        methods: {

        }
    }
</script>