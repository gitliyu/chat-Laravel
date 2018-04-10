import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

// Store functions
const store = new Vuex.Store({
  state: {
    currentUser: {},
    records: []
  },
  mutations: {
    _setUser(state, user){
      state.currentUser = user;
    },
    _setRecord(state, data){
      state.records.push(data);
    }
  }
});

export default store