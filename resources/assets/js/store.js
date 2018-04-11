import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

// Store functions
const store = new Vuex.Store({
  state: {
    currentUser: {
      records: [],
      friends: []
    }
  },
  mutations: {
    _setUser(state, user){
      state.currentUser = user;
    }
  }
});

export default store