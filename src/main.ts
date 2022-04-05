import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  strict: true,
});

router.beforeEach((to, from) => {
  console.log({ hook: 'Before each', to: to.path, from: from.path });
});

router.beforeResolve((to, from) => {
  console.log({ hook: 'Before resolve', to: to.path, from: from.path });
});

router.afterEach((to, from, error) => {
  console.log({ hook: 'After each', to: to.path, from: from.path, error });
});

const app = createApp(App);

app.use(router);

app.mount('#app');
