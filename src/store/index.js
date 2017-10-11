import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: null,
        username: null,
        repositories: []
    },
    getters: {
        getUser: state => {
            return state.user;
        },
        getUsername: state => {
            return state.username;
        },
        getRepositories: state => {
            return state.repositories;
        }
    },
    mutations: {
        addRepositories: (state, payload) => {
            state.repositories = payload;
        },
        addUser: (state, payload) => {
            state.user = payload;
        }
    }
});
