import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

// Store functions
const store = new Vuex.Store({
  state: {
    currentUser: {
      records: [],
      friends: []
    },
    records: []
  },
  mutations: {
    _setUser(state, user){
      state.currentUser = user;
    },
    _setRecord(state, data){
      state.records = data;
    }
  },
  actions: {
    queryCurrentUser({commit}){
      axios.get('/user').then(res => {
        commit('_setUser', res.data.data);
      });
    }
  }
});

export default store