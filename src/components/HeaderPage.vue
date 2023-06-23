
<template>
    <div class="nav center left vvvv">
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
    name:'HeaderPage'
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
    width: 100%;
    display: flex;
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

</style>