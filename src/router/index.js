import Vue from 'vue';
import Router from 'vue-router';
import Repositories from '../components/Repositories.vue';
import User from '../components/User.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/repositories',
            name: 'repositories',
            component: Repositories
        },
        {
            path: '/user',
            name: 'user',
            component: User
        },
        {
            path: '/',
            redirect: '/repositories'
        },
        {
            path: '/*',
            redirect: '/repositories'
        }
    ]
});
