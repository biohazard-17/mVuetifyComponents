// Composables
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import PaletteViewer from '@/views/PaletteViewer.vue'
import Menus from '@/views/Menus.vue'
import SidePanels from '@/views/SidePanels.vue'
import MagicMenus from '@/views/MagicMenus.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home,
  },
  {
    path: '/PaletteViewer',
    name: 'PaletteViewer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: PaletteViewer,
  },
  {
    path: '/Menus',
    name: 'Menus',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Menus,
  },
  {
    path: '/SidePanels',
    name: 'SidePanels',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SidePanels,
  },
  {
    path: '/MagicMenus',
    name: 'MagicMenus',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MagicMenus,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
