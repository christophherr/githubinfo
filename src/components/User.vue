<template>
  <md-card v-if="getUser">
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">
          {{getUser.login}}
        </div>
        <div class="md-subhead" v-if="getUser.name">
          {{getUser.name}}
        </div>
      </md-card-header-text>
      <md-card-media>
        <img :src="getUser.avatar_url">
      </md-card-media>
    </md-card-header>
    <md-card-content>
      <p v-if="getUser.bio">
        {{getUser.bio}}
      </p>
      <md-list>
        <md-list-item v-if="getUser.location">
          <md-icon>location_on</md-icon>
          <span>{{getUser.location}}</span>
        </md-list-item>
        <md-list-item>
          <md-icon>class</md-icon>
          <span>{{getUser.public_repos}} public repos</span>
        </md-list-item>
        <md-list-item>
          <md-icon>people</md-icon>
          <span>{{getUser.followers}} followers</span>
        </md-list-item>
        <md-list-item>
          <md-icon>people-outline</md-icon>
          <span>{{getUser.following}} following</span>
        </md-list-item>
      </md-list>
    </md-card-content>
    <md-card-actions>
      <md-button :href="getUser.html_url" class="md-primary">Profile</md-button>
      <md-button v-if="getUser.blog" :href="getUser.blog" class="md-primary">Website</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: "user",
  mounted() {
    this.getUser;
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    }
  }
}
</script>

<style>

</style>
