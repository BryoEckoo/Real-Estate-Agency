
<template>
    <HeaderPage/>
    <div>
        <div class="f">
            <div class="fdiv">
                <p>REAL ESTATE AGENCY</p>
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
    <p class="learn">LEARN MORE</p>
    <div>
      <p class="rentals">RENTALS</p>
      <div>
        <img class="rvilla" src="../assets/rental-villa.jpg" alt="rental1">
        <div class="green">  
        </div>
        <div class="yelloish"> 
        </div>
        <img class="greenimg" src="../assets/bedroom1.jpg" alt="interior2">
          <img class="yelloimg" src="../assets/untilted.jpg" alt="bedroom1">
      </div>
      <p class="details">DETAILS</p>
    </div>
    <div >
      <p style="font-size: 200px;">ON SALE</p>
      <div class="sympdiv" style="background-color: black;">
        <img class="symplogo" src="../assets/symplogo.png" alt="symlogo">
        <p>A different tone</p>
        <p>A Rare Blend Of Luxury And Innovation</p>
        <img class="sympbuild" src="../assets/symp.jpg" alt="symp">
        <img class="symppool" src="../assets/symppool.jpg" alt="symppool">
        <p class="explore">EXPLORE</p>
      </div>
      <div style="background-color: aqua;">
        <p>EXPLORE MORE</p>
        <div>
          <p>Apartments</p>
          <img src="../assets/appartment.jpg" alt="">
        </div>
        <div>
          <p>Houses</p>
          <img src="../assets/house.jpg" alt="">
        </div>
        <div>
          <p>Offices</p>
          <img src="../assets/office.jpg" alt="">
        </div>
        <p>BUY</p>
        <p>RENT</p>
      </div>
      <div class="more">
        <p>WHY US?</p>
        <h3>WIDE RANGE OF PROPERTIES</h3>
        <P>We Offer A Wide Variety of Property Investment Opportunities.</P>
        <h3>TRUSTED BY HUNDREDS</h3>
        <p>Over 500 Clients and Two Delivered Projects.Three International Branches.</p>
        <h3>TRANSPARENCY</h3>
        <p>Always Stay Informed About Your Investment and Your Properties.</p>
        <h3>NEAR ME</h3>
        <p>very Project is Carefully Hand-Picked to be Nearby Top Social Amenities and Prime Locations.</p>
      </div>
      <div class="info">
        <h4> ECKOO REAL ESTATE AGENCY</h4>
        <p>Eldoret,Khetias</p>
        <p>P.O.BOX 20227-00100</p>
        <p>Eldoret Kenya</p>
        <p>072200000</p>
        <p>eckoo@gmail.com</p>
        <h4>COMPANY</h4>
        <p>ABOUT US</p>
        <p>SERVICES</p>
        <p>GET IN TOUCH</p>
        <h4>EXPLORE</h4>
        <P>FOR SALE</P>
        <p>FOR RENT</p>
      </div>
    </div>


</template>

<script>

import HeaderPage from '../components/HeaderPage.vue'

export default{
    name:'HomePage',
    components:{
        HeaderPage
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
  top: 90%;
  left: 80%;
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

@media (max-width: 768px) {
  .fside {
    width: 70%;
  }
  .orange img{
    height: 85%;
    margin: 5px;
    width: 180px;
    margin-top: 13px;
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
    background-color: yellow;
    right: 20%;
    position: absolute;
    translate: inherit;
    height: 37px;
    margin: 18px;
    top: 110%;
    border: yellow;
    border-radius: 6px;
    align-content: center;
    display: grid;
    width: 127px;
    font-family: unset;
    border: 2px solid transparent;
    transition: border-color 0.3s, border-width 0.3s; 
  }
  .learn:hover{
    background-color: black;
    color: yellow;
    border-color: yellow;
    border-left-width: 30px;
    border-width: 2.5px;
  }
  .rentals{
    font-size: 280px;
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
  .details{
    margin: 10px;
    background-color:yellow;
    width: 10%;
    height: 40px;
    border-radius: 8px;
    transform: translate(600px, -300px);
  }
  .details:hover{
    background-color: black;
    color: yellow;
    cursor: pointer;
    border-color: yellow;
    border-width: 5px;
    border-left-width: 5px;
  }
  .info{
    background-color: #566b38;
  }
  .sympdiv{
    align-items: center;
  }
  .explore{
    border-color:gold;
    font-weight: bold;
    border :3px solid gold;
    width:10%;
    color:gold;
    height: 20px;
    border-left-width: 3px;
    border-radius: 7px;
    padding: 2px;
  }
  .explore:hover{
    border-color: black;
    background-color: gold;
    color: black;
  }
  .sympdiv{
    width: 100%;
    height: 400px;
  }
  .symplogo{
    widows: 100px;
    height: 80px;
    margin-top: 50px;
    left: 20px;
    position: absolute;
  }
  .sympbuild{
    width: 50%;
    height: 40%;
    right: 20px;
    position: absolute;
  }
</style>