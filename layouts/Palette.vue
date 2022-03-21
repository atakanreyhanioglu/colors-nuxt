<template>
  <div class="palette">
    <ul>
      <li class="circle dominant"></li>
      <li class="circle"></li>
      <li class="circle"></li>
      <li class="circle"></li>
      <li class="circle"></li>
      <li class="circle"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PaletteLayout',
}
</script>
<style>
.palette {
  background-color: #ff9f75;
  width: 90%;
  height: 150px;
  border-radius: 20px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
