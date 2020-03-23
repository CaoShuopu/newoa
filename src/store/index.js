import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export const stateInit = () => {
  return {
  }
}
const state = stateInit()

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions
})
