<template>
<v-container>
    <v-layout flex justify-center>
      <v-flex lg5 md6 sm8 xs12>
        <div class="elevation-2">
        <v-toolbar color="cyan" dark flat>
          <v-toolbar-title>Log In</v-toolbar-title>
        </v-toolbar>
          <v-form v-model="valid" class="pt-4 pr-2 pl-2 pb-4">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Email"
              autocomplete="useremail"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :rules="passwordRulle"
              :append-icon="e1 ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (e1 = !e1)"
              :type="e1 ? 'password' : 'text'"
              autocomplete="current-password"
              label="Enter your password"
            ></v-text-field>
            <div class="error">{{errors}}</div>
            <v-btn color="primary"
              :disabled="!valid"
              @click="login"
            >log in</v-btn>
          </v-form>
        </div>
      </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import Register from '../servises/AutentificationServise'

export default {
  name: 'Login',
  data () {
    return {
      valid: false,
      e1: true,
      email: '',
      password: '',
      errors: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'E-mail must be valid'
      ],
      passwordRulle: [
        v => !!v || 'Password is required',
        v => /^[a-zA-z0-9]{8,32}$/.test(v) || 'Password is not valid'
      ]
    }
  },
  methods: {
    async login () {
      this.errors = ''
      this.valid = true
      try {
        const responce = await Register.login({
          email: this.email,
          password: this.password
        })

        this.$store.dispatch('setToken', responce.data.token)
        this.$store.dispatch('setUser', responce.data.user)
      } catch (error) {
        this.errors = error.response.data.error
      }
    }
  }
}
</script>

<style>

</style>
