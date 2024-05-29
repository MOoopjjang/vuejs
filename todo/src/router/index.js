import Vue from "vue";
import VueRouter from "vue-router";
import TodoMain from '../components/TodoMain.vue'
import TodoList from '../components/TodoList.vue'
import TodoComplete from '../components/TodoComplete.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: TodoMain
    },
    {
        path: '/schedule',
        name: 'Schedule',
        component: TodoList
    },
    {
        path: '/complete',
        name: 'Complete',
        component: TodoComplete
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router