<template>
  <div class="container">
    <Navbar />
    <ContentLayout/>
    <FooterLayout/>
    <PaletteLayout/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import ContentLayout from "@/layouts/Content";
import FooterLayout from "@/layouts/Footer";
import PaletteLayout from "@/layouts/Palette";

export default {
  name: 'HomePage',
  components: {FooterLayout, PaletteLayout, ContentLayout, Navbar}
}
</script>
<style>
 .container {
   width: 100%;
   max-width: 1280px;
   height: 950px;
   display: flex;
   flex-direction: column;
   align-items: center;
 }
</style>

