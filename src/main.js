// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import './assets/sass/app.scss';
import Axios from 'axios';
import VueMaterial from 'vue-material';
import { store } from './store/index';

Axios.defaults.baseURL = 'https://api.github.com/';
Axios.defaults.headers.common.Accept = 'application/vnd.github.v3+json';

Object.defineProperty(Vue.prototype, '$http', {
    get() {
        return Axios;
    }
});

Vue.config.productionTip = false;

Vue.use(VueMaterial);
Vue.material.registerTheme('default', {
    primary: 'blue',
    accent: 'red'
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
