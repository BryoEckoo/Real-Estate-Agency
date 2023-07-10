
<template>
    <div class="nav center left vvvv" :class="{ 'fixed-nav': isFixedNav }">
        <img src="../assets/logo.png" alt="logo" />
        <div class="nav-inf">
            <ul class="ul">
              <li class="home"><router-link class="r" to="/">HOME</router-link></li>
              <li class="buy-rent"><router-link class="r" to="/">BUY/RENT</router-link> </li>
              <div class="br-content">
                <div class=" m apartment-br" style=" border-bottom: 1px solid black;"><p style="margin-right: 150px;">APARTMENTS</p></div>
                <div class="m houses-br" style=" border-bottom: 1px solid black;"><p style="margin-right: 150px;">HOUSES</p></div>
                <div class="m offices-br" style=" border-bottom: 1px solid black;"><p style="margin-right: 150px;">OFFICES</p></div>
              </div>
              <li class="about"><router-link class="r" to="/">ABOUT</router-link> </li>
              <li class="contact"><router-link class="r" to="/">CONTACT</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default{
    name:'HeaderPage',
    data() {
    return {
      isFixedNav: false,
    };
  },
 
}

</script>

<style>
body{
    margin: 0px;
    font-family: 'Roboto Slab', serif;
}
.nav{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    z-index: 90;
    background-color: white;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
    transition: top 0.3s;
    align-items: center;
    height: 100px;
    margin: 0;
    
}
.ul .r{
  color: black;
  font-family: 'Roboto Slab', serif;
  font-weight: bold;
}
.center {
    text-align: center;
}
.left {
    text-align: left;
}
img{
    width: 110px;
    height: 90px;
}
.nav-inf ul{
    display: flex;
    text-align: right;
    text-decoration: none;
    list-style: none;  
    position: relative; 
    right: 60%;
}
.nav-inf .buy-rent .br-content{
  position: absolute;
  display: block;
  top: 50%;
  transform: translate(120px, 80px);
}
.nav-inf ul li{
    font-size: 15px;
    padding: 3px;
    margin-left:80px;
    
}
.br-content p{
  font-family: 'Roboto Slab', serif;
  font-weight: bold;
  font-size: 13px;
  color: black;
}
.nav div{
    margin-left: auto;
}
.fixed-nav {
  position: fixed;
  top: 0;
}
.br-content{
  position: absolute;
  background-color:white;
  padding: .75rem;
  border-radius: .25rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 150ms ease-in-out;
  transform:translate(175px,40px);
  width: 170px;
  top: 30px; 
  left: -70px;
}
.nav-inf .ul>.buy-rent:hover + .br-content{
  opacity:1;
}


</style>