import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  user_id:''
  },
  mutations: {
    setUserId(state,data){
      state.user_id= data
    }
  },
  actions: {
  },
  modules: {
  }
})
