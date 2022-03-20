<template>
  <div class="footer">
    <div class="footer-bottom">
      &copy; Copyright webcolors 2022
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
   background: grey;
   padding-top: 40px;
   color: #ffffff;
 }
 .footer-bottom{
   background: #000000;
   width: 100vw;
   padding: 20px;
   padding-bottom: 40px;
   text-align: center;
   align-items: center;
   justify-content: center;
   display: flex;
   flex-direction: column;
 }

</style>

