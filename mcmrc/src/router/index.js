import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '../components/HomeComponent.vue';
import SignInComponent from '../components/SignInComponent.vue';
import ContentComponent from '../components/ContentComponent.vue';
import TopComponent from '../components/TopComponent.vue';

import ItemDetailView from '../views/ItemDetailView.vue'
import CartView from '../views/CartView.vue'
import OrderView from '../views/OrderView.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent
  },
  {
    path: '/content',
    name: 'content',
    components: {
      top:TopComponent,
      default:ContentComponent
    }
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignInComponent
  },
  {
    path: '/item/detail',
    name: 'itemDetail',
    components: {
      top:TopComponent,
      default:ItemDetailView
    }
  },
  {
    path: '/view/cart',
    name: 'cart',
    components: {
      top:TopComponent,
      default:CartView
    }
  },
  {
    path: '/view/order',
    name: 'order',
    components: {
      top:TopComponent,
      default:OrderView
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
