<template>
	<div class="editor">
		editor
		<button @click="goBack">返回</button>
		<br>
		<router-link tag="button" to="/thirdchild">thirdchild</router-link>
		<br>
		<router-view></router-view>
	</div>
</template>
<script>
export default {
	name: 'editor',
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