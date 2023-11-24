import { createRouter, createWebHistory } from 'vue-router';
import { HomePage } from '@/pages';

export enum RouteNames {
  Home = 'Home',
  Login = 'Login',
  NotFound = 'NotFound'
}

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/home', redirect: '/' },
    {
      path: '/',
      name: RouteNames.Home,
      component: HomePage,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/login',
      name: RouteNames.Login,
      component: () => import('@/pages/LoginPage.vue'),
      meta: {
        title: 'Login'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: RouteNames.NotFound,
      component: () => import('@/pages/NotFoundPage.vue'),
      meta: {
        title: '404'
      }
    }
  ]
});

router.beforeEach((to, _, next) => {
  document.title = (to.meta.title as string) || 'Vuetify Practice';
  next();
});
