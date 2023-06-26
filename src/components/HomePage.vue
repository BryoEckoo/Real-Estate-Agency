
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
  }
</style>