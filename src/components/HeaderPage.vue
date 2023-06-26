
<template>
    <div class="nav center left vvvv" :class="{ 'fixed-nav': isFixedNav }">
        <img src="../assets/logo.png" alt="logo" />
        <div>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
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
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isFixedNav = window.pageYOffset > 200;
    },
  },
}

</script>

<style>
body{
    margin: 0px;
}
.nav{
    position: fixed;
    top: 0;
    left: 0;
    width: 96%;
    display: flex;
    z-index: 999;
    background-color: white;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
    transition: top 0.3s;
    align-items: center;
    height: 100px;
    margin: 0;
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
ul{
    display: flex;
    text-align: right;
    text-decoration: none;
    list-style: none;   
}
li{
    font-size: 12px;
    padding: 3px;
}
.nav div{
    margin-left: auto;
}
.fixed-nav {
  position: fixed;
  top: 0;
}

</style>