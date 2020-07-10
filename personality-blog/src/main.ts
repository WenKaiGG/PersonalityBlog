import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import typer from '../node_modules/typer-js/typer.min'


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
