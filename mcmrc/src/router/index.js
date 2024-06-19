import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import SignInComponent from '../components/SignInComponent.vue'
import ContentComponent from '../components/ContentComponent.vue'

import ItemDetailView from '../views/ItemDetailView.vue'




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
    component: ContentComponent
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignInComponent
  },
  {
    path: '/item/detail',
    name: 'itemDetail',
    component: ItemDetailView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
