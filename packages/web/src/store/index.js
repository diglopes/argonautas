import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    day: 0,
    loading: false
  },
  mutations: {
    updateDay(state, payload) {
      state.day = payload
    },
    updateLoading(state, payload) {
      state.loading = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
