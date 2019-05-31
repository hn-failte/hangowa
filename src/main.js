import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './store/index.js'

//完整引入Mint-UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
