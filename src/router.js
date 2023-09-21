import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
	history: createWebHistory(),
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { top: 0 };
		}
	},
	routes: [
		{
			path: '/',
			component: () => import('@/views/Dates.vue'),
		},
		{
			path: '/:date',
			component: () => import('@/views/DateSingle.vue'),
		},
		{
			path: '/:date/:name',
			component: () => import('@/views/PersonTasks.vue'),
		},
	],
});
