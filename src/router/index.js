import { createRouter, createWebHistory } from 'vue-router'

// 引入App组件
import App from '@/App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 路由
  routes: [
    {
      path: '/',
      name: 'app',
      component: App,
      // 子路由
      children: [
        {
          path: 'login',
          name: 'login',
          // @表示./src
          // n=>n+1 箭头函数，当前没有参数，要写圆括号
          component: () => import('@/views/LoginVue.vue'),
        },
      ],
    },
  ],
})

export default router
