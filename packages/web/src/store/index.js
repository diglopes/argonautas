import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dockingShips: [{}]
  },
  mutations: {
    UPDATE_DOCKING_SHIPS(ctx, payload) {
      ctx.state.dockingShips = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
