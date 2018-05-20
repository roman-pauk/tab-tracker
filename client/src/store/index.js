import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    token: null,
    user: null,
    isUserLogin: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLogin = true
      } else {
        state.isUserLogin = false
      }
    },
    setUser (state, user) {
      state.user = user
    },
    logOut (state) {
      state.user = null
      state.token = null
      state.isUserLogin = false
    }
  },
  actions: {
    setToken ({ commit }, token) {
      commit('setToken', token)
    },
    setUser ({ commit }, user) {
      commit('setUser', user)
    },
    logOut ({ commit }) {
      commit('logOut')
    }
  }
})
