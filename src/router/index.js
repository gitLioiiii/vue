import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 路由
  routes: [
    {
      path: '/login',
      name: 'login',
      // @表示./src
      component: () => import('@/views/LoginVue.vue'),
    },
  ],
})

export default router
