import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowFooter:true,
    jwt:''
  },
  mutations: {
    changeShow(state,val){
      state.isShowFooter = val
    },
    setJwt(state,jwt){
      state.jwt = jwt;
      localStorage.setItem('jwt', jwt)
    },
    isShowFooterNav(state,val){
      state.isShowFooter = val
    },
    exit(state){
      localStorage.setItem('jwt','')
      state.jwt = ''
    }
  },
  actions: {
  },
  modules: {
  }
})
