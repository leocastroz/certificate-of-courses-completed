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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/single-page-application-2',
      name: 'single-page-application-2',
      component: () => import('../pages/Teste.vue')
    },
    {
      path: '/alura-jest',
      name: 'alura-jest',
      component: () => import('../pages/AluraJest.vue')
    },
    {
      path: '/alura-vuex',
      name: 'alura-vuex',
      component: () => import('../pages/AluraVuex.vue')
    },
    {
      path: '/alura-api',
      name: 'alura-api',
      component: () => import('../pages/AluraApi.vue')
    },
    {
      path: '/alura-explore',
      name: 'alura-explore',
      component: () => import('../pages/AluraExplore.vue')
    },
    {
      path: '/palestra-flisol',
      name: 'palestra-flisol',
      component: () => import('../pages/PalestraFlisol.vue')
    },
    {
      path: '/origamid-ui',
      name: 'origamid-ui',
      component: () => import('../pages/OrigamidUi.vue')
    },
    {
      path: '/another-component',
      name: 'another-component',
      component: () => import('../pages/AnotherComponent.vue')
    },
    {
      path: '/construindo-single-page-applications',
      name: 'construindo-single-page-applications',
      component: () => import('../views/PexView.vue')
    }
  ]
})

export default router
