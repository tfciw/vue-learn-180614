<template>
	<div class="find">
		find <br>
		find <br>
		find <br>
		find <br>
		find <br>
		find <br>
		find <br>
		find <br>
		find <br>
		find <br>
		find <br>
		find <br>
		find <br>
		find <br>
		find <br>
		find <br>
		find <br>
		find <br>
		find <br>
		find <br>
		find <br>
		find <br>
		find <br>
		find <br>
		find <br>
		find <br>
		find <br>
		find <br>
		find <br>
	</div>
</template>
<script>
export default {
	name: 'find',
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
.find {
	height: 100%;
	background: lightblue;
	overflow: scroll;
}
.find::-webkit-scrollbar {
	display: none;
}
</style>