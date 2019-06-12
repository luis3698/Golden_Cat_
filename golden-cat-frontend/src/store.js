import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layout: 'principal-layout',
    user: { },
    users: []
  },
  mutations: {
    SET_LAYOUT (state, newVal) {
      state.layout = newVal
    },
    SET_USER (state, newVal) {
      state.user = newVal
    },
    SET_USERS(state, newVal) {
      state.users = newVal
    }
  },
  actions: {

  },
  plugins: [vuexLocal.plugin]
})
