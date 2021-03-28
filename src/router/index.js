import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '../views/Home/index.vue'



const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  name: 'Home',
  component: Home
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router