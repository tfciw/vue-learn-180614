<template>
	<div class="thirdchild">
		thirdchild
		<br> <button @click="goBack">返回</button>
	</div>
</template>
<script>
export default {
	name: 'thirdchild',
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