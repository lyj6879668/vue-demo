<template>
    <div id="article">
        <p>文章</p>
    </div>
</template>

<script>
    export default {
        methods: {
            init() {
                console.log('article')
            }
        },
        mounted() {
            this.init()
        }
    }
</script>
