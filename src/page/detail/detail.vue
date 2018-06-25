<template>
	<div id="detail">
		<h2 @click="toindex">This is detail page</h2>
	</div>
</template>
<script>
export default {
    name: 'detail',
    data() {
        return {}
    },
    watch: {
        $route(to, from) {
            if (this.$route.path.includes('detail')) {
                this.init()
			}
        }
    },
    methods: {
        toindex() {
            this.$router.push({ path: '/index' })
        },
        get_id() {
			console.log(this.$route.params.id, this.$route.params.type)
			this.$store.state.peomsg.id = this.$route.params.id
        },
        init() {
            this.get_id()
        }
    },
    mounted() {
        this.init()
    }
}
</script>
<style scoped>
</style>
