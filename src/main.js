import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue';
import VueRouter from 'vue-router';
import BuyPage from './components/BuyPage.vue';
import HomePage from './components/HomePage.vue';

Vue.use(VueRouter);

createApp(App).mount('#app')

const routes = [
    { path: '/', component:HomePage},
    { path: '/buy', component:BuyPage}
];

const router = new VueRouter({
    mode:'history',
    routes
});

new Vue({
    router,
    render: h=> h(App)
}).$mount('#app')