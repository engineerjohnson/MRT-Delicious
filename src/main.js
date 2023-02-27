import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'bootstrap'
const app = createApp(App)
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/all.scss'
app.use(VueAxios,axios)
app.use(createPinia())
app.use(router)

app.mount('#app')
