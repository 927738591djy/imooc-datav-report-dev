import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BMap from '@/views/BMap'
import LiquidFill from '@/views/LiquidFill'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bmap',
    name: 'BMap',
    component: BMap
  }, {
    path: '/liquidFill',
    name: 'LiquidFill',
    component: LiquidFill
  }
]

const router = new VueRouter({
  routes
})

export default router
