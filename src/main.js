import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './api/http'

Vue.config.productionTip = false
Vue.prototype.$eventBus =new Vue()
Vue.prototype.$http = axios

// 页面刷新的时候同步JWT
let jwt = localStorage.getItem('jwt');
if(jwt){
  store.commit('setJwt' ,jwt)
}


new Vue({
  
  router,
  store,
  render: h => h(App)
}).$mount('#app')
