import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/reset.scss'
import './assets/scss/util.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
import http from './util/http.js'
Vue.prototype.$axios=http
Vue.prototype.$store=store
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
