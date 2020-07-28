import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
export const app = new Vue({
  router,
  store,
  render: h => h(App)
})
app.$mount('#app')
