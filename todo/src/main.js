import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
// import VueSidebarMenu from 'vue-sidebar-menu'
// import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'


Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$eventBus = new Vue()

// Vue.use(VueSidebarMenu)


new Vue({
  render: h => h(App),
}).$mount('#app')

