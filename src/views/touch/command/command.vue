<template>
	<div class="command">
		command
	</div>
</template>
<script>
export default {
	name: 'command',
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
.command {
	height: 100%;
	background: lightgreen;
}
</style>