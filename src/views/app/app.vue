<template>
	<div class="appMain" id="appMain" @keydown="handle">
		<div class="leftNav">
			<img src="../../assets/logo.png" height="150px" width="150px" class="logo" alt="">
			<router-link tag="div" class="navItem" :class=" rightNav == 'spring' ? 'on' : '' " to="/spring">spring</router-link>
			<!-- <router-link tag="div" class="navItem" to="/summer">summer</router-link> -->
			<router-link tag="div" class="navItem" to="/autumn">autumn</router-link>
			<router-link tag="div" class="navItem" to="/liveRouter/articleId/5">动态路由</router-link> 
		</div>
		<div class="rightContainer">
			<div class="crumbMenu">{{ crumbMenu }}</div> {{arrow}} {{fn}}
			<transition :name=" 'pop-' + (direction == 'forward' ? 'in' : 'out') ">
				<router-view style="padding: 10px;background: lightyellow;overflow:hidden;"></router-view>
			</transition>
		</div>
	</div>
</template>
<script>
import dataList from './data/addText.json';
import router from '../../router';
export default {
	name: 'appMain',
	data() {
		return {
			list: ['spring', 'autumn', 'liveRouter/articleId/:articleId'],
			direction: 'forward'
		}
	},
	beforeCreate() {
		router.beforeEach((to, from, next) => {
			let toIndex = to.matched[1].path.slice(1); //
			let fromIndex = from.matched[1].path.slice(1);
			this.list.forEach((item, index) => {
				if(item == toIndex) {
					toIndex = index
				}
				if(item == fromIndex) {
					fromIndex = index
				}
			})
			if(fromIndex > toIndex) {
				this.direction = 'back'
			} else {
				this.direction = 'forward'
			}
			next()
		})
		var This = this;
		window.addEventListener('keydown', function(e) {
			let rightIndex;
			This.list.forEach((item, index) => {
				if(item == This.$route.matched[1].path.slice(1)) {
					rightIndex = index
				}
			})
			if(e.keyCode == 38 && rightIndex > 0) { //up
				This.$router.push('/' + This.list[rightIndex-1]);
			}
			if(e.keyCode == 40 && rightIndex < This.list.length) {
				This.$router.push('/' + This.list[rightIndex+1]);
			}
		})
		//up 38 down 40
	},
	mounted() {
		var oApp = document.getElementById('appMain');
		var oHeight = document.documentElement.clientHeight;
		oApp.style.height = oHeight + 'px';
	},
	computed: {
		rightNav: function() {
			if(this.$route.matched.length >= 2) {
				return this.$route.matched[1].path.slice(1);
			}
		},
		crumbMenu: function() {
			let str = '';
			this.$route.matched.forEach(item => {
				str += item.path;
			});
			return str;
		},
		// list() {
		// 	return 1;
		// }
		arrow: () => {
			// console.log(this) // this的指向已经变成了这个app组件，而不是全局vue实例，而且要在调用了后才会计算，如果组件没有调用，不会自动执行，假如没有返回值，返回的也不是undefined，或者说vue对undefined做了处理
		},
		fn: function() {
			// console.log(this) //this返回的是vue这个根实例
		}
	},
	methods: {
		goBack() {
			window.history.length > 1 ? this.$router.go(-1) : this.$router.push('');
		},
		handle() {
			console.log('handle');
		}
	}

}
</script>
<style scoped>
.appMain {
	display: flex;
	overflow: hidden;
}
.logo {
	display: block;
	margin: 0 auto;
}
.navItem {
	line-height: 30px;
	text-align: center;
	border-top: 1px solid lightyellow;
}
.router-link-active, .on {
	background: lightyellow;
}
.crumbMenu {
	line-height: 100px;
	border-bottom: 1px solid #000;
	padding-left: 40px;
}
.leftNav {
	height: 100%;
	width: 200px;
	background: lightblue
}
.rightContainer {
	flex: 1;
	background: lightyellow;
	overflow: hidden;
}
.rightContainer div {
	overflow: hidden;
}
.pop-out-enter-active,
.pop-out-leave-active,
.pop-in-enter-active,
.pop-in-leave-active {
	will-change: transform;
	transition: all 500ms ease-in-out;
	height: 100%;
	top: 101px;
	position: absolute;
	backface-visibility: hidden;
	perspective: 1000;
}
.pop-out-enter {
	opacity: 0;
	transform: translate3d(0, -100%, 0);
}
.pop-out-leave-active {
	opacity: 0;
	transform: translate3d(0, 100%, 0);
}
.pop-in-enter {
	opacity: 0;
	transform: translate3d(0, 100%, 0);
}
.pop-in-leave-active {
	opacity: 0;
	transform: translate3d(0, -100%, 0);
}
</style>