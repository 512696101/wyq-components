import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/login'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as icons from '@element-plus/icons'

import './styles/app.css'
const Vueapp = createApp(App)
Object.keys(icons).forEach((key) => {
  Vueapp.component(key, icons[key])
})
Vueapp.use(store).use(router).use(ElementPlus).mount('#app')
