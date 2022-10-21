import admin from '@/middleware/admin'
export default [
	{
        path: '/dashboard',
        name: 'auth.dashboard',
        component: () => import('@/views/Panel.vue'),
    },
    {
        path: '/notifications',
        name: 'auth.notifications',
        component: () => import('@/views/Notifications.vue'),
    },
    {
        path: '/profile',
        name: 'auth.profile',
        component: () => import('@/views/Profile.vue'),
    },
    {
        path: '/roles/',
        name: 'auth.roles',
        component: ()=> import('@/views/Role/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/Role/List.vue'),
                name: 'auth.roles.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/Role/Form.vue'),
                name: 'auth.roles.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/Role/Form.vue'),
                name: 'auth.roles.edit'
            }
        ],
        beforeEnter: admin,
    },
    {
        path: '/permissions/',
        name: 'auth.permissions',
        component: ()=> import('@/views/Permission/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/Permission/List.vue'),
                name: 'auth.permissions.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/Permission/Form.vue'),
                name: 'auth.permissions.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/Permission/Form.vue'),
                name: 'auth.permissions.edit'
            }
        ],
        beforeEnter: admin,
    },
    {
        path: '/users/',
        name: 'auth.users',
        component: ()=> import('@/views/User/Main.vue'),
        children: [
            {
                path: '',
                component: ()=> import('@/views/User/List.vue'),
                name: 'auth.users.listing'
            },
            {
                path: 'add',
                component: ()=> import('@/views/User/Add.vue'),
                name: 'auth.users.add'
            },
            {
                path: 'edit/:id',
                component: ()=> import('@/views/User/Edit.vue'),
                name: 'auth.users.edit'
            }
        ],
        beforeEnter: admin,
    },
];
