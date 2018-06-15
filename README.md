# vue学习

> A Vue.js project 

# log
## 1，使用mint-ui
```
npm i -S mint-ui
```
## 2，按需引入mint-ui
```
npm i -D babel-plugin-component
npm i -D babel-preset-es2015
```
.babelrc 改为：
```
{
  "presets": [
    ["es2015", { "modules": false }]
  ],
  "plugins": [["component", [
    {
      "libraryName": "mint-ui",
      "style": true
    },
    {
    	"libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
    }
  ]]]
}
```
## 3，使用sass
npm i -D node-sass sass-loader <br>
vue-cli已经配置好了，只需要安装这两个包就可以使用了，在vue文件style标签修改：<br>
style lang="scss" scoped<br>
scoped可选，域 ，仅在当前组件有效<br>
## 4，嵌套路由
按官方配置路由即可
```
const touch = {
	path: '/touch',
	name: 'touch',
	component: resolve => require(['@/views/touch/touch'], resolve),
	redirect: '/command',
	children: [
		{
			path: '/command',
			name: 'command',
			component: resolve => require(['@/views/touch/command/command'], resolve),
		},
		{
			path: '/find',
			name: 'find',
			component: resolve => require(['@/views/touch/find/find'], resolve),
		}
	]
}
```
在组件里，例如touch组件需要有一个router-view来让下面的组件起作用，算是一个容器
```
<template>
	<div class="touch" id="touch">
		<div class="container">
			<transition name="pop-in">
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>
```
## 5，transition路由过渡
```
//html
<transition :name=" 'pop-' + (direction == 'forward' ? 'in' : 'out') ">
  <router-view></router-view>
</transition>

//css

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
.pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
```
## 6，router.beforeEach 路由拦截以及结合transition和touch事件做滑动效果
可以在router文件夹index.js做路由拦截，也可在需要用到的组件里使用，这里以在组件里使用为例 <br>
首先引入router <br>
import router from '../../router/index.js'; <br>
然后我选择在beforeCreate周期做路由拦截
```
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
}
```
3个参数 to, from, next。to是将要去的路由，from可以说是从哪里来。to是执行继续的方法。遇到过一个坑
```
router.beforeEach((to,from,next) => {
  console.log('这里我做了路由拦截');
})
```
控制台可以打印出来'这里我做了路由拦截'，但是页面变为了空白，因为他现在处在既不是以前也不是将要去的地方，需要一个to方法让他去往to的路由。
```
router.beforeEach((to,from,next) => {
  console.log('这里我做了路由拦截');
  to();
})
```
这样就可以了，渲染成功
