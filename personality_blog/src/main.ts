import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'
const apolloClient = new ApolloClient({
  // 你需要在这里使用绝对路径
  uri: 'http://127.0.0.1:7979/graphql'
})
Vue.use(VueApollo);
Vue.config.productionTip = false
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})
const app =new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
})
app.$mount('#app')
export default app;