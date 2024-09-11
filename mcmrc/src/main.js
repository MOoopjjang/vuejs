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
Vue.prototype.$axios = axios;
Vue.prototype.$eventBus = new Vue();

// 쿠키 만료시간 설정 ( 1 day )
Vue.$cookies.config('1d');
Vue.config.productionTip = false;

// refresh 할경우 cookie에 있는 token정보를 다시 store에 set

function init(){
  let token = Vue.$cookies.get(ACCESS_TOKEN);
  if(token){
    return store.dispatch('setAccessToken' , token);
  }else{
    return Promise.resolve();
  }
}

init().then(res=>{
  console.dir(res);
  
  new Vue({
    router,
    // vuetify,
    render: h => h(App),
    store
  }).$mount('#app');
})



