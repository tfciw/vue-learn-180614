<template>
	<div class="membercenter">
		membercenter
	</div>
</template>
<script>
export default {
	name: 'membercenter',
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
.membercenter {
	height: 100%;
	background: lightyellow;
}
</style>