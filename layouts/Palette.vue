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
  display: flex;
}
ul {
  list-style-type: none;
  margin-top: -8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.circle {
  height: 80px;
  width: 80px;
  background-color: white;
  border-radius: 50%;
  margin: 35px;
}
.dominant {
  width: 100px;
  height: 100px;
}
</style>
