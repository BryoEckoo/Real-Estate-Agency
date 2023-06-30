import HomePage from "./components/HomePage.vue"
import BuyPage from "./components/BuyPage.vue"
import{ createRouter, createWebHistory } from "vue-router"
import RentPage from "./components/RentPage.vue"

const routes=[
    {path:'/', name:'HomePage', component:HomePage},
    {path:'/buy-page', name:'BuyPage', component:BuyPage},
    {path:'/rent-page', name:'RentPage', component:RentPage},
];

const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router;