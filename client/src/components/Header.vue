<template>
  <v-toolbar fixed dark color="cyan">
    <v-btn @click="$router.go(-1)" icon class="hidden-xs-only">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-btn to="/" icon class="hidden-xs-only">
      <v-icon>home</v-icon>
    </v-btn>
    <v-toolbar-title>Tab tracker</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="!$store.state.isUserLogin" class="hidden-sm-and-down">
      <v-btn flat to="register">Register</v-btn>
      <v-btn flat to="login">Log In</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style>

</style>
