
<template>
  <HeaderPage />
    <div>
        <div class="f">
            <div class="fdiv">
                <p style="font-family: 'Libre Baskerville', serif;">ECKOO REAL ESTATE AGENCY</p>
                <div>
                    <img class="fside" src="../assets/front.jpg" alt="front view">
                </div>
                <div>
                </div>
                
            </div>   
        </div>
        <div>
            <p class="villa">Villa G is located in Eldoret, and is seated along the Nairobi highway just 200m away. The villa offers an exceptional view from the house, however, it is facing the North side of the site while the street is on the South.</p>
            <div class="orange">
              <img src="../assets/sitting.jpg" alt="sitting">
              <img src="../assets/kitchen.jpg" alt="kitchen">
              <img src="../assets/back.jpg" alt="back">
            </div>
        </div>
    </div>
    <div class="learn">
      <p class="lm">LEARN MORE</p>
    </div>
    <div>
      <p class="rentals" style="font-family: 'Libre Baskerville', serif;">RENTALS</p>
      <div>
        <img class="rvilla" src="../assets/rental-villa.jpg" alt="rental1">
        <div class="green">  
        </div>
        <div class="yelloish"> 
        </div>
        <div class="exp">
          <div class="border">
            <h4>Greenwich Mordern</h4>
            <p>This magnificently designed tower offers views that redefine international luxury standards while challenging the underlying conventions of residential high-rise architecture. Located in the exciting high demand upper side of Westlands, Nairobi a walking distance to numerous social amenities such as 5 star hotels, shopping malls, recreational centers, schools, and many more, makes Elite Residence the ideal home for young families.</p>
          </div>  
        </div>
        <img class="greenimg" src="../assets/bedroom1.jpg" alt="interior2">
          <img class="yelloimg" src="../assets/untilted.jpg" alt="bedroom1">
      </div>
      <div class="detail">
        <p class="det">DETAILS</p>
      </div>
    </div>
    <div style="position: relative;">
      <p style="font-size: 200px; font-family: 'Libre Baskerville', serif;">ON SALE</p>
      <div class="greenr"></div>
      <div class="sympdiv" style="background-color: black; height: 600px; position: relative;">
        <img class="symplogo" src="../assets/symplogo.png" alt="symlogo">
        <p style="color: gold; font-family: 'Kaushan Script', cursive;, cursive; font-size: 50px; position: absolute; left: 10px;top: 240px;">A different tone</p>
        <p style="color: gold; font-family: 'Comfortaa', cursive; font-size: 40px; position: absolute;top: 130px;left: 30%;">A Rare<br>Blend of Luxury And <br>Innovation</p>
        <p style="color: white;position: absolute;font-family: 'Heebo', sans-serif;top: 56%;width: 450px;left: 30%;">Just like music, Symphony Residence transcends time and emotions. The Studios, 1, 2 and 3 Bedroom Residence has a meticulous design to accommodate various housing and investment solutions, making the residence a private sanctuary for investors and homeowners. This composition of true luxury housing and high-end investment opportunity is truly music to everyone’s ears</p>
        <img class="sympbuild" src="../assets/highrise.png" alt="symp">
        <img class="symppool" src="../assets/symppool.jpg" alt="symppool">
        <div class="explore">
          <p class="explorebt">EXPLORE</p>
        </div>
      </div>
      <div class="explorediv" style="background-color:  rgb(50, 158, 201);">
        <p style="font-family: 'Comfortaa', cursive;font-size: 30px;left: 50%;top: 5%;margin-bottom: 20px;">EXPLORE MORE</p>
        <div class="apartments">
          <p>Apartments</p>
          <img src="../assets/appartment.jpg" alt="">
        </div>
        <div class="houses">
          <p>Houses</p>
          <img src="../assets/house.jpg" alt="">
        </div>
        <div class="offices">
          <p>Offices</p>
          <img src="../assets/office.jpg" alt="">
        </div>
        <div class="br">
          <button class="b"><router-link class="r" :to="'/buy'">FOR SALE</router-link></button>
          <button class="r"><router-link class="r" :to="'/rent'">FOR RENT</router-link></button>
        </div>
      </div>
      <div class="more">
        <p style="font-size: 40px;top:0%; left: 45%;">WHY US?</p>
        <div class="range">
          <i class="fa-sharp fa-solid fa-city"></i>
          <h3 style="left: 70%; top: 65%;">WIDE RANGE OF PROPERTIES</h3>
          <P style="left: 70%;top: 70%;">We Offer A Wide Variety of Property Investment Opportunities.</P>
        </div>
        <div class="trust">
          <i class="fa-solid fa-heart"></i>
          <h3 style="top: 30%; left: 10%;">TRUSTED BY HUNDREDS</h3>
          <p style="top: 35%; left: 10%;">Over 500 Clients and Two Delivered Projects.Three International Branches.</p>
        </div>
        <div class="transparent">
          <i class="fa-solid fa-check"></i>
          <h3 style="top: 65%; left: 10%;">TRANSPARENCY</h3>
          <p style="top: 70%;left: 10%;">Always Stay Informed About Your Investment and Your Properties.</p>
        </div>
        <div class="near">
          <i class="fa-solid fa-building-columns"></i>
          <h3 style="left: 70%;top: 30%;">NEAR ME</h3>
          <p style="left: 70%;top: 35%;">very Project is Carefully Hand-Picked to be Nearby Top Social Amenities and Prime Locations.</p>
        </div>
      </div>
      <div class="info">
        <div class="location">
          <h4> ECKOO REAL ESTATE AGENCY</h4>
          <p>Eldoret,Khetias</p>
          <p>P.O.BOX 20227-00100</p>
          <p>Eldoret Kenya</p>
          <p>072200000</p>
          <p>eckoo@gmail.com</p>
        </div>
        <div class="company">
          <h4>COMPANY</h4>
          <p>ABOUT US</p>
          <p>SERVICES</p>
          <p>GET IN TOUCH</p>
        </div>
        <div class="ex">
          <h4>EXPLORE</h4>
          <P>FOR SALE</P>
          <p>FOR RENT</p>
        </div>
        <div class="social">
          <ul>
            <li><i class="fa fa-facebook-square" aria-hidden="true"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-twitter"></i></li>
            <li><i class="fa-solid fa-phone"></i></li>
            <li><i class="fa-brands fa-linkedin"></i></li>
            <li><i class="fa-brands fa-tiktok"></i></li>
            <li><i class="fa-brands fa-youtube"></i></li>
          </ul>
        </div>
      </div>
    </div>


</template>

<script>

import HeaderPage from '../components/HeaderPage.vue'
//import { RouterLink } from 'vue-router';

//import BuyPage from '../components/BuyPage.vue';

export default{
    name:'HomePage',
    components:{
      HeaderPage
        //BuyPage
    },
    methods:{
      openBuyPage(){
        this.$router.push('/buy-page');
      },
      openRentPage(){
        if (this.$router && this.$router.push) {
        this.$router.push('/rent');
      }
      },
    }
}

</script>

<style>
.f {
  height: 600px;
  width: 96%;
}

.fdiv {
  position: relative;
  background-color: rgb(50, 158, 201);
  height: 90%;
  margin-top: 95px;
  margin-right: 30px;
  height: 540px;
}

.fdiv p {
  position: absolute;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 90px;
  text-align: center;
  padding: 10px;
  width: 50px;
  height: 50px;
  margin-left: 70px;
}

.fside {
  margin-top: 20px;
  height: 560px;
  width: 1100px;
  margin-left: 50px;
  margin-left: 100px;
  box-shadow: 1px 3px 4px 6px rgba(0, 0, 0, 0.2);
}

.villa {
  transform: translate(-50%, -50%);
  color: white;
  position: absolute;
  top: 87%;
  left: 80%;
  font-family: 'Roboto Slab', serif;
}

/* Media Queries for responsive design */
@media (max-width: 1200px) {
  .fside {
    width: 90%;
  }
}

@media (max-width: 1170px) {
  .fside {
    width: 80%;
  }
  
}

@media (max-width: 767px) {
  .fside {
    width: 70%;
  }
  .orange img{
    height: 85%;
    margin: 5px;
    width: 10px;
    margin-top: 13px;
  }
  .orange {
    width: 50%;
    height: 155px;
    background-color: yellow;
    translate: inherit;
    top: 90%;
    position: absolute;
    left: 10%;
  }
}

@media (max-width: 576px) {
  .fdiv p {
    font-size: 60px;
  }
  .villa {
    font-size: 14px;
    left: 50%;
    top: 95%;
    transform: translateX(-50%);
  
  } 
}
.orange {
    width: 45%;
    height: 155px;
    background-color: yellow;
    translate: inherit;
    top: 90%;
    position: absolute;
    left: 10%;
  }
  .orange img{
    height: 85%;
    margin: 5px;
    width: 180px;
    margin-top: 13px;
    box-shadow: 1px 3px 4px 4px rgba(0, 0, 0, 0.2);
  }
  .learn{
    position: relative;
    background-color: gold;
    width: 150px;
    height: 30px;
    border: 2px black solid;
    border-radius: 19px;
    transform: translate(600px,100px);
  }
  .learn .lm{
    margin-top: 6px;
    font-family: 'Caprasimo', cursive;
    color: black;
  }
  .learn:hover{
    cursor: pointer;
  }
  .rentals{
    font-size: 250px;
  }
  .exp{
    position: absolute;
    transform: translate(40px, -670px);
    background-color: white;
    width: 360px;
   
    padding: 20px;
  }
  .exp .border{
    border: 1.5px solid green;
  }
  .exp .border h4{
    font-size: 28px;
    padding-top: 1px;
    color: rgb(126, 108, 7);
    font-family: 'Caprasimo', cursive;
  }
  .exp .border p {
    font-family: 'Roboto Slab', serif;
    width: 260px;
    padding-left: 10px;
    margin-left: 30px;
  
    
  }
  .rvilla{
    width: 100%;
    height: 520px;
  }
  .green{
    background-color:	#566b38;
    height: 700px;
    width: 70%;
    margin-top: 30px;
  }
  .greenimg{
    width:250px;
    height: 250px;
    margin-left: 300px;
    margin-top: 50px;
    box-shadow: 1px 3px 4px 4px rgba(0, 0, 0, 0.2);
    transform: translate(-100px, -400px);
  }
  .yelloish{
    background-color: yellow;
    height: 300px;
    width: 30%;
    right: 0%;
    margin-top: -600px;
    position: absolute;
  }
  .yelloimg{
    width: 50%;
    height: 70%;
    transform: translate(-100px, -500px);
    box-shadow: 1px 3px 4px 4px rgba(0, 0, 0, 0.2);
  }
  .detail{
    position: relative;
    transform: translate(600px, -400px);
    width: 100px;
    height: 30px;
    border-radius: 2px; 
    border: 2px solid black;
    background-color: gold;
    border-radius: 19px;  
  }
  .detail .det{
    font-family: 'Caprasimo', cursive;
    margin-top: 6px;
    align-content: center;
    color: black;
  }
  .detail:hover{
   cursor: pointer;
  }
  .info{
    background-color: #566b38;
  }
  .sympdiv{
    align-items: center;
  }
  .explore{
    position: relative;
    background-color: gold;
    transform: translate(550px, 550px);
    width: 130px;
    height: 30px;
    border-radius: 19px;
  }
  .explorebt{
    position: absolute;
    font-family: 'Caprasimo', cursive;
    color: black;
    margin-top: 5px;
    margin-left: 24px;
  }
  .explore:hover{
    cursor: pointer;
    background-color: black;
    border: gold solid 2px;
    color: gold;
  }
  .explore .explorebt:hover{
    color: gold;
  }
  .sympdiv{
    width: 100%;
    height: 400px;
    position: relative;
  }
  .symplogo{
    top:90px;
    width: 150px;
    height: 120px;
    margin-top: 50px;
    left: 70px;
    position: absolute;
  }
  .sympbuild{
    width: 30%;
    height: 50%;
    right: 20px;
    top: 20px;
    position:absolute;
  }
  .symppool{
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 30%;
    height: 40%;
  }
  .explorediv{
    position: relative;
    width: 70%;
    height: 600px;
    box-shadow: 1px 3px 4px 4px rgba(0, 0, 0, 0.2);
  }
  
  .apartments{
    position:absolute;
    left: 5%;
    
  }
  .apartments img{
      width: 300px;
      height: 300px;
      box-shadow: 1px 3px 4px 4px rgba(0, 0, 0, 0.2);
    }
    .apartments img:hover{
      cursor: pointer;
      filter: brightness(70%);
    }
    .apartments p{
      font-family: 'Roboto Slab', serif;
      text-decoration: underline;
      font-size: 25px;
    } 
  .houses{
    position:absolute;
    left: 55%;
  }
  .houses p{
    font-family: 'Roboto Slab', serif;
    text-decoration: underline;
    font-size: 20px;
  }
  .houses img{
      width: 300px;
      height: 300px;
      box-shadow: 1px 3px 4px 4px rgba(0, 0, 0, 0.2);
    }
    .houses img:hover{
      cursor: pointer;
      filter: brightness(70%);
    }
  .offices{
    position:absolute;
    left: 110%;
  }
  .offices p{
    font-family: 'Roboto Slab', serif;
    text-decoration: underline;
    font-size: 20px;
  }
  .offices img{
      width: 300px;
      height: 300px;
      box-shadow: 1px 3px 4px 4px rgba(0, 0, 0, 0.2);
    }
    .offices img:hover{
      cursor: pointer;
      filter: brightness(70%);
    }
  .br{
    display: flex;
    position: relative;
    left: 50%;
    top: 73%;
    margin: 5px;
  }
  .br button{
    font-family: 'Roboto Slab', serif;
    margin-left: 50px;
    font-size: 17px;
    border: 1.5px solid black;
    border-radius: 19px;
    height: 30px;
    background-color:skyblue ;
    color:rgb(102, 102, 102);
    width: 100px;
  }
  .br button:hover{
    cursor: pointer;
    background-color: rgb(102, 102, 102);
    color: skyblue;
    border: 1.5px solid white;
  }

  .greenr{
    background-color: #566b38;
    height: 1000px;
    right: 0%;
    width: 800px;
    position: absolute;
    top: 280px;

  }
  .more{
    background-color:yellow;
    position: relative;
    width: 100%;
    height: 500px;
    margin-top: 20px;
    
  }
  .more p, h3 {
    font-family: 'Roboto Slab', serif;
    position: absolute;
    display: flex;
    top: 20%;
    font-size: 20px;
  }
  .more p{
    width: 200px;
    font-size: 20px;
  }
  .more i{
    position: absolute;
  }
  .more .range .fa-sharp{
    top: 75%;
    left: 37%;
  }
  .more .near .fa-solid{
    top: 39%;
    left: 37%;
  }
  .more .transparent .fa-solid{
    font-size: 50px;
    top: 75%;
    left: -20%;
  }
  .more .trust .fa-solid{
    top: 39%;
    left: -20%;
  }
  .info {
    position: relative;
    height: 500px;
    color:rgb(196, 199, 39);
  }
  .info p,h4{
    font-family: 'Quicksand', sans-serif;
  }
  .info .location{
    position: absolute;
    left: 5%;
    top: 20%;
  }
  .info .company{
    position: absolute;
    left: 45%;
    top: 20%;
  }
  .info .ex{
    position: absolute;
    left: 80%;
    top: 20%;
  }
  .fa ,.fa-brands ,.fa-solid{
    position: absolute;
    bottom: 10%;
    font-size: 35px;
    transform: translate(350px, -1px);
  }
  .social i:hover{
    font-size: 45px;
    cursor: pointer;
  }
  .social .fa-facebook-square{
    left: 5%;
  
  }
  .fa-instagram{
    left: 10%;
  }
  .fa-twitter{
    left: 15%;
  }
  .fa-phone{
    left: 20%;
  }
  .fa-linkedin{
    left: 25%;
  }
  .fa-tiktok{
    left: 30%;
  }
  .fa-youtube{
    left: 35%;
  }
  .social ul{
    list-style: none;
  }
</style>