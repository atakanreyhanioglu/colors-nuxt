<template>
  <div class="container">
    <Navbar />
    <ContentLayout />
    <FooterLayout />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import ContentLayout from "@/layouts/Content";
import FooterLayout from "@/layouts/Footer";

export default {
  name: 'HomePage',
  components: {FooterLayout, ContentLayout, Navbar}
}
</script>
<style>
 .container {
   width: 1280px;
   height: 950px;
   display: flex;
   flex-direction: column;
   align-items: center;
 }

</style>

