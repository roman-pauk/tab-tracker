<template>
  <v-toolbar fixed dark color="cyan">
    <v-btn @click="$router.go(-1)" icon class="hidden-xs-only">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-btn to="/" icon class="hidden-xs-only">
      <v-icon>home</v-icon>
    </v-btn>
    <v-toolbar-title class="mr-3">Tab tracker</v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat to="/songs">Browse</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLogin" flat to="/register">Register</v-btn>
      <v-btn v-if="!$store.state.isUserLogin" flat to="/login">Log In</v-btn>
      <v-btn v-if="$store.state.isUserLogin" flat to="/" @click="logOut">Log Out</v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {}
  },
  methods: {
    logOut () {
      this.$store.dispatch('logOut')
    }
  }
}
</script>

<style>

</style>
