import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import bootstrapVue from 'bootstrap-vue';
import store from './store';
import vueCookies from 'vue-cookies';

import { ACCESS_TOKEN } from './assets/js/defines.js'


Vue.use(vueCookies);
Vue.use(bootstrapVue);
// Vue.use('Vuex');
Vue.$axios = axios;

// 쿠키 만료시간 설정 ( 1 day )
Vue.$cookies.config('1d');
Vue.config.productionTip = false;

// refresh 할경우 cookie에 있는 token정보를 다시 store에 set
let token = Vue.$cookies.get(ACCESS_TOKEN);
if(token){
  store.dispatch('setAccessToken' , token);
}

new Vue({
  router,
  // vuetify,
  render: h => h(App),
  store
}).$mount('#app');
