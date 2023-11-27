
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <img class="nav-img" src="../assets/logo.png" alt="logo" />
        <div class="nav-divider"></div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="home"><router-link class="r active nav-link" to="/">HOME</router-link></li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">ABOUT</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                BUY/RENT
              </a>
              <ul class="dropdown-menu">
                <li><router-link class="dropdown-item" to="/">Apartments</router-link></li>
                <li><router-link class="dropdown-item" to="/">Houses</router-link></li>
                <li><router-link class="dropdown-item" to="/">Offices</router-link></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">CONTACT</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
.navbar{
  font-family: 'Roboto Slab', serif;
}
.nav-img{
    width: 110px;
    height: 90px;
}
@media screen and (min-width: 992px) {
  .nav-divider{
    width: 600px;
  }
}
</style>