import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'
import locale from './language'
import { createPinia } from 'pinia'

const pinia = createPinia()

const app = createApp(App)
    .use(pinia)
    .use(router)
    .use(locale)
    .mount('#app')
