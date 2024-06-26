import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// import bootstrapVue from 'bootstrap-vue'
import vuetify from './plugins/vuetify'
import store from './store/store'

// Vue.use(bootstrapVue)
Vue.use('Vuex')
Vue.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
  store
}).$mount('#app')
