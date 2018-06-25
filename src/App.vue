<template>
	<div id="app">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {}
	},
	methods: {
		init() {
			if(localStorage.loginName && localStorage.password) {
				this.$store.state.isLogin = true
			}
		}
	},
	mounted() {
		this.init()
	}
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;
    /* margin-top: 60px; */
}
</style>
