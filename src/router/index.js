import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import touch from './touch.js'
import draggle from './draggl.js'

Vue.use(Router)

export default new Router({
  routes: [
    touch,
    draggle,
    {
      path: '/',
      redirect: '/app'
    },
    {
    	path: '/activity/id/:id',
    	name: 'activity',
    	component: resolve => require(['@/views/pc/activity/activity'], resolve),
    	children: [
    		{
    			path: '/editors',
    			name: 'editors',
    			component: resolve => require(['@/views/pc/editor/editor'], resolve),
    			children: [
		    		{
		    			path: '/thirdchild',
		    			name: 'thirdchild',
		    			component: resolve => require(['@/views/pc/thirdchild/thirdchild'], resolve)
		    		}
		    	]
    		}
    	]
    },
    {
    	path: '/editor',
    	name: 'editor',
    	component: resolve => require(['@/views/pc/editor/editor'], resolve)
    },
    {
        path: '/app',
        component: resolve => require(['@/views/app/app'], resolve),
        redirect: '/spring',
        children: [
            {
                path: '/spring',
                name: 'spring',
                component: resolve => require(['@/views/app/spring/spring'], resolve),
                redirect: '/flower',
                children: [
                    {
                        path: '/flower',
                        name: 'flower',
                        component: resolve => require(['@/views/app/spring/flower/flower'], resolve),
                        redirect: '/rose',
                        children: [
                            {
                                path: '/rose',
                                name: 'rose',
                                component: resolve => require(['@/views/app/spring/flower/rose/rose'], resolve)
                            },
                            {
                                path: '/vervain',
                                name: 'vervain',
                                component: resolve => require(['@/views/app/spring/flower/vervain/vervain'], resolve)
                            }
                        ]
                    },
                    {
                        path: '/tree',
                        name: 'tree',
                        component: resolve => require(['@/views/app/spring/tree/tree'], resolve)
                    }
                ]
            },
            {
                path: '/autumn',
                name: 'autumn',
                component: resolve => require(['@/views/app/autumn/autumn'], resolve)
            },
            {
                path: '/liveRouter/articleId/:articleId',
                name: 'liveRouter',
                component: resolve => require(['@/views/app/liveRouter/liveRouter'], resolve)
            }
        ]
    }
  ]
})
// console.log(router);
