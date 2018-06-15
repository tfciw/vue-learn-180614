<template>
	<div class="tree">
		tree
		<br>
		<img src="./tree.jpg" height="853" width="1200" alt="" class="tree_jpg">
	</div>
</template>
<script>
export default {
	name: 'tree',
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
.tree_jpg {
	margin: 20px;
}
</style>