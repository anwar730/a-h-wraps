import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/main.css'

import HomePage          from '@/views/HomePage.vue'
import AboutPage         from '@/views/AboutPage.vue'
import ProductsPage      from '@/views/ProductsPage.vue'
import ContactPage       from '@/views/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',         component: HomePage,     name: 'home' },
    { path: '/about',    component: AboutPage,    name: 'about' },
    { path: '/products', component: ProductsPage, name: 'products' },
    { path: '/contact',  component: ContactPage,  name: 'contact' },
  ],
  scrollBehavior(to, _from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  }
})

createApp(App).use(router).mount('#app')
