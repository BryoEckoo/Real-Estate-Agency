<template>
    <HeaderPage />
    <div class="aboutmain">
        <div class="aboutm">
            <p class="bigp">ABOUT US</p>
            <p class="smallp">Find Out About Our History, Our Leadership, and Our Services</p>
        </div>
        <div class="aboutinfo">
            <p>message goes here</p>
        </div>
    </div>
    
</template>

<script>
import HeaderPage from './HeaderPage.vue';

export default{
  components: { HeaderPage },
    name:'AboutPage',
}

</script>

<style >
.aboutmain{
    background-image: url('../assets/hands.jpg');
    background-size: cover;
    width:100%;
    height: 100vh;
    background-repeat: no-repeat;
}
.aboutmain .contactm{
    height: 790px;
    position: relative;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
}
.aboutmain .contactm p {
    color: white;
    font-family: 'Roboto Slab', serif;
    text-align: center;  
    position: absolute;
}
.aboutmain .contactm .bigp{
    font-size: 110px;
    top: 20%;
    left: 3%;
}
.aboutmain .contactm .smallp{
    top: 60%;
    font-size: 20px;
    left: 3%;
    padding: 0px;
}
.aboutmain .contactinfo{
    height: 400px;
    background-color: white;
}
</style>