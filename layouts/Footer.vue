<template>
  <div class="footer">
    <div class="footer-bottom">
     <div>
       &copy; Copyright webcolors 2022
     </div>
      <div class="github">
        <b>GitHub&nbsp;</b>
        <a href="https://github.com/atakanreyhanioglu">
          <img src="~/assets/icons8-github.svg" alt="logo"/>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FooterLayout'
}
</script>
<style>
 .footer {
   width: 100%;
   height: auto;
   position: absolute;
   bottom: 0;
   left: 0;
   right: 0;
   padding-top: 40px;
   color: #ffffff;
 }
 .footer-bottom{
   height: 40px;
   display: flex;
   width: 100%;
   text-align: center;
   align-items: center;
   justify-content: space-around;
   color: black;
 }
 .github {
   display: flex;
   align-items: center;
   justify-content: center;
 }

</style>

