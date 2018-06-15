<template>
	<div class="liveRouter">
		liveRouter
		<br>
		articleId: {{articleId}}
		<button @click="goBack" v-if="articleId == 6">返回</button>
		<router-link v-if="articleId != 6" tag="a" to="/liveRouter/articleId/6">articleId = 6</router-link>
	</div>
</template>
<script>
export default {
	name: 'liveRouter',
	data() {
		return {
			
		}
	},
	computed: {
		articleId: function() {
			return this.$route.params.articleId
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
.liveRouter {
	padding: 20px;
}
</style>