import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/HomeView.vue')
    },
    {
      path: '/',
      name: 'AboutUs',
      component: () => import('@/views/about-us/AboutUsView.vue')
    },
    {
      path: '/',
      name: 'Courses',
      component: () => import('@/views/courses/CoursesView.vue')
    },
    {
      path: '/',
      name: 'CasesDev',
      component: () => import('@/views/cases-dev/CasesDevView.vue')
    },
    {
      path: '/',
      name: 'CasesDesign',
      component: () => import('@/views/cases-design/CasesDesignView.vue')
    },

  ]
})

export default router
