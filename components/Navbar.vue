<template>
  <div class="navbar">
    <div class="announce"><span id="text">WEBCOLORS</span></div>
    <div class="logo">
      <img src="~/assets/logo.png" alt="logo"/>
    </div>
    <div class="member">
      <ui-button><span><b>LOGIN</b></span></ui-button>
      <span>or&nbsp;&nbsp;</span>
      <ui-button id="register" outlined icon="brush"><span><b>REGISTER</b></span></ui-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
}
</script>

<style>
.navbar {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo img {
  width: 24%;
}
#register {
  border: solid 2px #C099F8;
  height: 60px;
}
#text{
  font-family: Yesteryear, cursive;
  text-align: center;
  font-size: 35px;
  color: rgb(27, 13, 15);
  background-color: rgba(84, 84, 84, 0);
  text-shadow: rgba(48, 33, 33, 0) 2px 2px 2px;
}
.member {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.member span {
  font-style: italic;
}
</style>
