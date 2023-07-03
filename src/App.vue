<template>
  <RentPage />
</template>

<script>

//import HomePage from './components/HomePage.vue'
//import HomePage from './components/HomePage.vue'
//import BuyPage from './components/BuyPage.vue'
import RentPage from '../src/components/RentPage.vue'
export default {
  name: 'App',
  components:{
    //HomePage,
    RentPage
    //BuyPage
  }
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
