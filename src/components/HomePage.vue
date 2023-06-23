
<template>
    <HeaderPage/>
    <div>
        <div>
            <div class="fdiv">
                <p>REAL ESTATE AGENCY</p>
                <div>
                    <img class="fside" src="../assets/fside.jpg" alt="front view">
                </div>
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
.fdiv{
    background-color: rgb(50, 158, 201);
    height:400px;
    margin-top:95px;
    margin-right:30px;
}
.fdiv p{
    font-size: 70px;
    text-align: left;
    height: 50px;
    width: 50px;
    color: white;
    padding-left: 40px;
    padding-top: 40px;
}
.fside{
    height: 450px;
    width: 800px;
}

</style>