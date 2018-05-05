<template>
  <div>
    <h1>Register</h1>
    <input type="email" v-model="email" name="email" placeholder="enter email">
    <br>
    <input type="password" v-model="password" name="password" placeholder="enter password">
    <br>
    <div class="errors">{{errors}}</div>
    <button @click="register">register</button>

  </div>
</template>

<script>
import Register from '../servises/AutentificationServise'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      errors: ''
    }
  },
  methods: {
    async register () {
      try {
        await Register.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.errors = error.response.data.error
      }
    }
  }
}
</script>

<style>

</style>
