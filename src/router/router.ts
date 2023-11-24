import { createRouter, createWebHistory } from 'vue-router';

export enum RouteNames {
  Home = 'Home',
  MusicAlbums = 'MusicAlbums',
  Login = 'Login',
  NotFound = 'NotFound'
}
export enum Routes {
  Home = '/home',
  MusicAlbums = '/music-albums',
  Login = '/login'
}

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: Routes.Home },
    {
      path: Routes.Home,
      name: RouteNames.Home,
      component: () => import('@/pages/HomePage.vue'),
      meta: {
        title: 'Home'
      }
    },
    {
      path: Routes.MusicAlbums,
      name: RouteNames.MusicAlbums,
      component: () => import('@/pages/MusicAlbumsPage.vue'),
      meta: {
        title: 'Music Albums'
      }
    },
    {
      path: Routes.Login,
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
