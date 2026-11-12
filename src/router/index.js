import Home from '@/views/Home.vue'
import MealDetail from '@/views/MealDetail.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/meal/:id', name: 'Meal', component: MealDetail },
  ],
})

export default router
