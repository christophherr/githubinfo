<template>
  <div v-on:closeSidenav="closeSidenav">
    <md-toolbar class="md-medium">
      <md-button class="md-icon-button" @click="toggleSidenav">
        <md-icon>menu
        </md-icon>
      </md-button>
      <h2 class="md-title">Github Info</h2>
      <md-input-container style="flex: 1 0 0%">
        <md-input placeholder="Search username" v-model="username"></md-input>
      </md-input-container>
    </md-toolbar>

    <md-sidenav class="md-left" ref="sidenav">
      <md-toolbar class="md-medium">
        <md-button class="md-icon-button" @click="toggleSidenav">
          <md-icon>menu</md-icon>
        </md-button>
        <h2 class="md-title">GitHub Info</h2>
      </md-toolbar>
      <md-list>
        <md-list-item>
          <router-link @click.native="closeSidenav" :to="'repositories'">Repositories</router-link>
        </md-list-item>
        <md-list-item>
          <router-link @click.native="closeSidenav" :to="'user'">User</router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  name: 'toolbar',
  data() {
    return {
      user: null,
      username: null,
      repositories: []
    }
  },
  watch: {
    username(value) {
      this.setUsername(value);
    }
  },
  methods: {
    toggleSidenav() {
      this.$refs.sidenav.toggle();
    },
    closeSidenav() {
      this.$refs.sidenav.close();
    },
    fetchUser(username) {
      this.$http.get(`users/${username}`)
        .then(({ data }) => {
          this.$store.commit('addUser', data);
        })
    },
    fetchRepositories(username) {
      this.$http.get(`users/${username}/repos?per_page=100`)
        .then(({ data }) => {
          this.$store.commit('addRepositories', data);
        })
    },
    setUsername: _.debounce(function (username) {
      if (username) {
        this.fetchUser(username);
        this.fetchRepositories(username);
      }
      if (!username) {
        this.$store.commit('addUser', null);
        this.$store.commit('addRepositories', null);
      }
    }, 500)
  }
}

</script>

<style>

</style>
