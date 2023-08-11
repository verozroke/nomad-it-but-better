import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/nomad-it-but-better/',
      name: 'Home',
      component: () => import('@/views/home/HomeView.vue')
    },
    {
      path: '/nomad-it-but-better/about-us',
      name: 'AboutUs',
      component: () => import('@/views/about-us/AboutUsView.vue')
    },
    {
      path: '/nomad-it-but-better/courses',
      name: 'Courses',
      component: () => import('@/views/courses/CoursesView.vue')
    },
    {
      path: '/nomad-it-but-better/dev-cases',
      name: 'CasesDev',
      component: () => import('@/views/cases-dev/CasesDevView.vue')
    },
    {
      path: '/nomad-it-but-better/design-cases',
      name: 'CasesDesign',
      component: () => import('@/views/cases-design/CasesDesignView.vue')
    },

  ]
})

export default router
