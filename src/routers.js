import HomPage from './components/HomePage.vue'
import RentPage from './components/RentPage.vue'
import { createRouter,createWebHistory } from "vue-router"


const routes=[
    {path:'/', component:HomPage},
    {path:'/rent', component:RentPage},
]

const router=createRouter({
    history:createWebHistory(),
    routes,
});

export default router; 