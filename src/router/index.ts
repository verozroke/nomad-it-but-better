import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home/HomeView.vue')
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: () => import('@/views/about-us/AboutUsView.vue')
    },
    {
      path: '/courses',
      name: 'Courses',
      component: () => import('@/views/courses/CoursesView.vue')
    },
    {
      path: '/dev-cases',
      name: 'CasesDev',
      component: () => import('@/views/cases-dev/CasesDevView.vue')
    },
    {
      path: '/design-cases',
      name: 'CasesDesign',
      component: () => import('@/views/cases-design/CasesDesignView.vue')
    },

  ]
})

export default router
