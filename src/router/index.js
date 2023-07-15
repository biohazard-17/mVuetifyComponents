// Composables
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import MagicMenuViewer from '@/views/MagicMenuViewer.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/MagicMenuViewer',
    name: 'MagicMenuViewer',
    component: MagicMenuViewer,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
