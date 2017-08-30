import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import About from '@/components/About';
import Data from '@/components/Data';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/data',
    name: 'Data',
    component: Data,
  },
  ],
});
