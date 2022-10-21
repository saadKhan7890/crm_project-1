export default [
	{
        path: '/',redirect: { name: 'auth.login' }
    },
    {
        path: '/login',
        name: 'auth.login',
        component: () => import('@/views/Auth/Login.vue'),
    },
    {
        path: '/ticket-send',
        name: 'guest.ticketSend',
        component: () => import('@/views/ticketSend.vue'),
        meta: { guest: true },
    },
];
