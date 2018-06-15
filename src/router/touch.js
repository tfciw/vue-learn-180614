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
		},
		{
			path: '/membercenter',
			name: 'membercenter',
			component: resolve => require(['@/views/touch/membercenter/membercenter'], resolve),
		}
	]
}
export default touch