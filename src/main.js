import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 入口文件
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 选择器语法
app.mount('#app')
