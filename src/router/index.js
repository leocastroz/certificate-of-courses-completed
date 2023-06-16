import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/single-page-application-1',
      name: 'single-page-application-1',
      component: () => import('../views/SinglePageOne.vue')
    },
    {
      path: '/single-page-application-2',
      name: 'single-page-application-2',
      component: () => import('../views/SinglePageTwo.vue')
    },
    {
      path: '/alura-jest',
      name: 'alura-jest',
      component: () => import('../views/AluraJest.vue')
    },
    {
      path: '/alura-vuex',
      name: 'alura-vuex',
      component: () => import('../views/AluraVuex.vue')
    },
    {
      path: '/alura-api',
      name: 'alura-api',
      component: () => import('../views/AluraApi.vue')
    },
    {
      path: '/alura-explore',
      name: 'alura-explore',
      component: () => import('../views/AluraExplore.vue')
    },
    {
      path: '/palestra-flisol',
      name: 'palestra-flisol',
      component: () => import('../views/PalestraFlisol.vue')
    },
    {
      path: '/origamid-ui',
      name: 'origamid-ui',
      component: () => import('../views/OrigamidUi.vue')
    },

  ]
})

export default router
