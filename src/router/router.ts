import { createRouter, createWebHistory } from 'vue-router';
import { HomePage } from '@/pages';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/home', redirect: '/' },
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/AboutPage.vue'),
      meta: {
        title: 'About'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/LoginPage.vue'),
      meta: {
        title: 'Login'
      }
    }
  ]
});

router.beforeEach((to, _, next) => {
  document.title = (to.meta.title as string) || 'Vuetify Practice';
  next();
});
