<template>
	<div class="activity">
		activity <br>
		<router-link tag="button" to="/editor">editor</router-link> <br>
		<router-link tag="button" to="/editors">activity - editors</router-link> <br>
		{{ $route.params.username }}
		<router-view></router-view>
	</div>
</template>
<script>
export default {
	name: 'activity',
	data() {
		return {

		}
	}

}
</script>