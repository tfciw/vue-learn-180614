<template>
	<div class="autumn">
		秋天 - autumn
		<br>
		<img src="./autumn.jpg" height="667" class="autumn_jpg" width="1000" alt="">
		<br>
	</div>
</template>
<script>
export default {
	name: 'autumn',
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
.autumn {
	padding: 20px;
}
.autumn_jpg {
	margin: 20px;
}
</style>