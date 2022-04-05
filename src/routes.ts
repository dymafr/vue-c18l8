import { RouteRecordRaw } from 'vue-router';
import PageA from './PageA.vue';
import PageB from './PageB.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: PageA,
  },
  {
    path: '/a',
    component: PageA,
  },
  {
    path: '/b/:id?',
    component: PageB,
    beforeEnter(to, from) {
      console.log({ hook: 'Before Enter', to: to.path, from: from.path });
    },
  },
];
