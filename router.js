
// router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import HomePage from './components/HomePage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name:"HomePage",
    component: HomePage
  }
];

const router = new VueRouter({
  routes
});

export default router;
