<template>
	<div class="flower">
		<div class="left">
			<router-link tag="div" class="navItem" to="/rose">rose</router-link>
			<router-link tag="div" class="navItem" to="/vervain">vervain</router-link>
		</div>
		<div class="right">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
export default {
	name: 'flower',
	data() {
		return {
			
		}
	},
	methods: {
		goBack() {
			window.history.length > 1 ? this.$router.go(-1) : this.$router.push('');
		}
	}

}
</script>
<style scoped>
.flower {
	display: flex;
}
.left {
	padding-top: 40px;
	width: 200px;
	border-right: 1px solid #000;
}
.right {
	flex: 1;
}
.navItem {
	line-height: 40px;
	padding-left: 20px;
	cursor: pointer;
	margin-bottom: 20px;
}
.router-link-active {
	background: lightblue;
}
</style>