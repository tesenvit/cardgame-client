import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LobbyView from '@/views/LobbyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { auth: false }
    },
    {
      path: '/lobby',
      name: 'lobby',
      component: LobbyView,
      meta: { auth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const needAuth: boolean = to.matched.some((record) => record.meta.auth)

  if (needAuth) {
    const token = localStorage.getItem('token');
    if (token) {
      next()
    } else {
      next({ path: '/home' });
    }
  } else {
    next();
  }
});

export default router
