<template>
  <HomePage />
</template>

<script>

//import HomePage from './components/HomePage.vue'
import HomePage from './components/HomePage.vue'
//import BuyPage from './components/BuyPage.vue'
export default {
  name: 'App',
  components:{
    HomePage
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
