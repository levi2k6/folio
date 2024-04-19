import './assets/main.css'
import{ createRouter, createWebHistory} from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Skills from './views/Skills.vue'
import More from './views/More.vue'
import Contact from './views/Contact.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/skills', component: Skills},
    {path: '/more', component: More},
    {path: '/contacts', component: Contact},
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
