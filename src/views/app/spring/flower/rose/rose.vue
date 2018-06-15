<template>
	<div class="rose">
		玫瑰园 <br>
		<img src="../rose/rose_garden.jpg" class="rose_garden" alt="">
	</div>
</template>
<script>
export default {
	name: 'rose',
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
.rose {
	padding: 20px;
}
.rose_garden {
	margin: 20px;
	width: 400px;
	height: 600px;
}
</style>