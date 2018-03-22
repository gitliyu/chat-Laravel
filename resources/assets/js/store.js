import Vue from 'vue'
import Vuex from 'vuex'
import users from './users'
Vue.use(Vuex);

// Store functions
const store = new Vuex.Store({
  state: {
    users: users,
    currentUser: null,
    records: []
  },
  mutations: {
    _setUser(state, user){
      state.currentUser = user;
    },
    _setRecord(state, data){
      state.records.push(data);
    }
  },
  actions: {
    setUser({commit}, data){
      commit('_setUser', data);
    },
    setRecord({commit}, data){
      commit('_setRecord', data);
    }
  }
});

export default store