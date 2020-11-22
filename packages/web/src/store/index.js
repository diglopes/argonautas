import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    day: 0
  },
  mutations: {
    updateDay(state, payload) {
      state.day = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
