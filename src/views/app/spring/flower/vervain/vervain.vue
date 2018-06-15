<template>
	<div class="vervain">
		重师马鞭草
		 <br>
		 <img src="../../../../../assets/cqnu_vervain.jpeg" height="480" width="640" class="cqnu_vervain" alt="">
	</div>
</template>
<script>
export default {
	name: 'vervain',
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
.vervain {
	padding: 20px;
}
.cqnu_vervain {
	margin: 20px;
}
</style>