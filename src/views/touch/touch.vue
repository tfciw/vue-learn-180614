<template>
	<div class="touch" id="touch">
		<div class="container">
			<transition :name=" 'pop-' + (direction == 'forward' ? 'in' : 'out') ">
				<router-view></router-view>
			</transition>
		</div>
		<div class="bot_wrapper">
			<router-link class="bot_nav on" to="/command">推荐</router-link>
			<router-link class="bot_nav" to="/find">发现</router-link>
			<router-link class="bot_nav" to="/membercenter">个人中心</router-link>
		</div>
	</div>
</template>
<script>
import router from '../../router/index.js';
export default {
	name: 'touch',
	data() {
		return {
			direction: 'forward',
			routerList: ['/command', '/find', '/membercenter']
		}
	},
	beforeCreate() {
		// console.log(router); //测试打印出router，可以被引入
		router.beforeEach((to,from,next) => {
			let fromIndex = from.fullPath;
			let toIndex = to.fullPath;
			this.routerList.forEach((item, index) => {
				if(item == fromIndex) {
					fromIndex = index
				}
				if(item == toIndex) {
					toIndex = index
				}
			})
			if(toIndex < fromIndex) {
				this.direction = 'back';
			}else {
				this.direction = 'forward';
			}
			next();
		})
		let This = this;
		let startX,endX,X;
		window.addEventListener('touchstart', function(e) {
			// e.preventDefault()
			startX = e.changedTouches[0].clientX;
		})
		window.addEventListener('touchend', function(e) {
			// e.preventDefault()
			endX = e.changedTouches[0].clientX;
			if(endX > startX && (endX - startX) > 80) {
				// console.log('右滑') //下一个路由
				This.move('right')

			}
			if(endX < startX && (startX - endX) > 80) {
				// console.log('左滑') //上一个路由
				This.move('left')
			}
		})
	},
	mounted() {
		let oTouch = document.querySelector('#touch');
		let oHeight = document.documentElement.clientHeight;
		// console.log(oHeight); 
		oTouch.style.height = oHeight + 'px';
		let oContainer = document.querySelector('.container');
		oContainer.style.height = (oHeight-40) + 'px';
	},
	methods: {
		goBack() {
			window.history.length > 1 ? this.$router.go(-1) : this.$router.push('');
		},
		move(dir) { //根据方向添加路由
			if(dir == 'left' && this.getRouterInt() < 2 ) {
				this.$router.push(this.routerList[this.getRouterInt() + 1]);
			}
			if(dir == 'right' && this.getRouterInt() > 0 ) {
				this.$router.push(this.routerList[this.getRouterInt() - 1]);
			}
		},
		getRouterInt() { //获取当前路由在路由列表的索引
			let rightIndex;
			this.routerList.forEach((item, index) => {
				if(item == this.$route.fullPath) {
					rightIndex = index;
				}
			})
			return rightIndex;
		}
	}

}
</script>
<style scoped>
.touch {
	width: 100%;
	box-sizing: border-box;
	overflow: hidden;
	position: relative;
}
.bot_wrapper {
	width: 100%;
	position: fixed;
	height: 40px;
	display: flex;
	background: #fff;
	border-top: 1px solid #4091e5;
}
.bot_nav {
	flex: 1;
	line-height: 40px;
	text-align: center;
	text-decoration: none;
	color: #4091e5;
}
.router-link-active {
	background: #4091e5;
	color: #fff;
	transition: .3s ease-in-out;
}

.pop-out-enter-active,
.pop-out-leave-active,
.pop-in-enter-active,
.pop-in-leave-active {
	will-change: transform;
	transition: all .4s ease-in-out;
	top: 0px;
	position: absolute;
	backface-visibility: hidden;
	perspective: 1000;
	width: 100%;
	height: 528px;
	overflow: hidden;
}
.pop-out-enter {
	opacity: 0;
	transform: translate3d(-100%, 0, 0);
}
.pop-out-leave-active {
	opacity: 0;
	transform: translate3d(100%, 0, 0);
}
.pop-in-enter {
	opacity: 0;
	transform: translate3d(100%, 0, 0);
}
.pop-in-leave-active {
	opacity: 0;
	transform: translate3d(-100%, 0, 0);
}
</style>