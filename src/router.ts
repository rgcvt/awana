import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
	history: createWebHistory(),
	scrollBehavior(to, from, savedPosition) {
		//@ts-ignore
		const iHateTs = { to, from };
		if (savedPosition) {
			return savedPosition;
		} else {
			return { top: 0 };
		}
	},
	routes: [
		{
			path: '/',
			component: () => import('./views/Dates.vue'),
		},
		{
			path: '/:date',
			component: () => import('./views/DateSingle.vue'),
		},
		{
			path: '/:date/assign',
			component: () => import('./views/Assign.vue'),
		},
		{
			path: '/:date/:name',
			component: () => import('./views/PersonTasks.vue'),
		},
		{
			path: '/default',
			component: () => import('./views/Default.vue'),
		},
		{
			path: '/store',
			component: () => import('./views/Store.vue'),
		},
		{
			path: '/store/assign',
			component: () => import('./views/StoreAssign.vue'),
		},
	],
});
