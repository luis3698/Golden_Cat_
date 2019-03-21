import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layout: 'principal-layout'
  },
  mutations: {
    SET_LAYOUT (state, newVal) {
      state.layout = newVal
    }
  },
  actions: {

  }
})
