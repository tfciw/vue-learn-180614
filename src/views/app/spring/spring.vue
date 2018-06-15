<template>
	<div class="spring">
		<div class="topNav">
			<router-link class="crumbNav" :class=" rightNav == 'flower' ? 'on' : '' " to="/flower">花</router-link>  /  
			<router-link class="crumbNav" :class=" rightNav == 'tree' ? 'on' : '' " to="/tree">树</router-link>  /  
		</div>
		<div>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>
<script>
export default {
	name: 'spring',
	data() {
		return {
			
		}
	},
	computed: {
		rightNav: function() {
			if(this.$route.matched.length >= 3) {
				return this.$route.matched[2].path.slice(1);
			}
		}
	}, //最开始这里是在data里面定义了一个rightNav，mounted根据$route赋值，但是随着路由的点击，加了on的会一直加上，刷新才有效，所以用到了计算属性computed
	methods: {
		goBack() {
			window.history.length > 1 ? this.$router.go(-1) : this.$router.push('');
		}
	}

}
</script>
<style scoped>
.crumbNav {
	color: orange;
	text-decoration: none;
}
.router-link-active, .on{
	font-weight: bold;
}
</style>