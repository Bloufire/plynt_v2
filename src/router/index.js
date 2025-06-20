import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import TrendingPage from '../views/TrendingPage.vue'
import StrategiesPage from '../views/StrategiesPage.vue'
import DocsPage from '../views/DocsPage.vue'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/trending',
    name: 'TrendingPage',
    component: TrendingPage
  },
  {
    path: '/strategies',
    name: 'StrategiesPage',
    component: StrategiesPage
  },
  {
    path: '/docs',
    name: 'DocsPage',
    component: DocsPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router