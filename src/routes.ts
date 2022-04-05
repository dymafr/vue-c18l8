import { RouteRecordRaw } from 'vue-router';
import PageA from './PageA.vue';
import PageB from './PageB.vue';
import PageB1 from './PageB1.vue';
import PageB2 from './PageB2.vue';

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
    path: '/b',
    component: PageB,
    children: [
      { path: 'b1', component: PageB1 },
      { path: 'b2', component: PageB2 },
    ],
  },
];
