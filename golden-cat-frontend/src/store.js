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
    user: { }
  },
  mutations: {
    SET_LAYOUT (state, newVal) {
      state.layout = newVal
    },
    SET_USER (state, newVal) {
      state.user = newVal
    }
  },
  actions: {

  },
  plugins: [vuexLocal.plugin]
})
