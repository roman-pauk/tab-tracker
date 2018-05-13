<template>
  <v-app class="application application–dark" id="app">
    <app-header/>
    <main class="page-content">
      <router-view/>
    </main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    'app-header': Header
  }
}
</script>

<style>
  main.page-content{
    padding-top: 80px;
  }
</style>
