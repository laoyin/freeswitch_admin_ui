import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
// import callData from './modules/callData'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    // callData
  },
  getters,
  
})

export default store
