<template>
  <div id="app">
    <toolbar></toolbar>
    <div class="main-content">
      <md-layout>
        <router-view></router-view>
      </md-layout>
    </div>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar';
export default {
  name: 'app',
  components: {
    Toolbar,
  },
  data() {
    return {
      user: null,
      username: null,
      repositories: []
    }
  }
}
</script>

<style>

</style>
