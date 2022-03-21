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
  height: 170px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
@-webkit-keyframes colors {
  0% { background-color: white; }
  20% { background-color: darkseagreen;}
  40% { background-color: palevioletred }
  50% { background-color: darkkhaki; }
  71% { background-color: burlywood; }
  81% { background-color: dodgerblue; }
  91% { background-color: moccasin; }
  100% { background-color: mintcream; }
}
.circle {
  height: 80px;
  width: 80px;
  background-color: white;
  border-radius: 50%;
  margin: 35px;
  animation-name: color_change;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation: color_change 2s infinite alternate;
}
@keyframes color_change {
  from { background-color: moccasin; }
  to { background-color: white; }
}
.dominant {
  width: 100px;
  height: 100px;
}
</style>
