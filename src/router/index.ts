import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass:
    'bg-primary-500 text-white dark:text-primary-500 dark:bg-primary-500/20 dark:border-primary-500/20 border-primary-500',
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/MainView.vue'),
    },
    {
      path: '/resume',
      name: 'education',
      component: () => import('../views/ResumeView.vue'),
    },
  ],
});

export default router;
