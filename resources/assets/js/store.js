import Vue from 'vue'
import Vuex from 'vuex'
import users from './users'
Vue.use(Vuex);

// Store functions
const store = new Vuex.Store({
  state: {
    users : users,
    currentUser : null
  },
  mutations: {
    _setUser(state, user){
      state.currentUser = user
    }
  },
  actions: {
    setUser({ commit }, data){
      commit('_setUser', data)
    }
  }
});
export default store
