<template>
  <div class="palette">
    <ul>
      <li class="circle dominant"></li>
      <li class="circle firstCircle"></li>
      <li class="circle secondCircle"></li>
      <li class="circle thirdCircle"></li>
      <li class="circle fourthCircle"></li>
      <li class="circle fifthCircle"></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'PaletteLayout',
  mounted() {
    const circles = document.querySelectorAll('li')
    circles.forEach((circle) => {
      circle.addEventListener('mouseover', (e) => {
        circle.innerText = `${window.getComputedStyle(circle, null).backgroundColor}`
        circle.style.fontSize = "15px"
      })
      circle.addEventListener('mouseout', () => {
        circle.innerText = ''
      })
      circle.addEventListener('click', (e) => {
        document.execCommand('copy');
      })
      circle.addEventListener("copy", function (event) {
        event.preventDefault();
        if (event.clipboardData) {
          event.clipboardData.setData("text/plain", circle.innerText);
        }
      })
    })
  }
}
</script>
<style>
.palette {
  background-color: white;
  width: 100%;
  height: 220px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 3px 9px 40px -1px rgba(0,0,0,0.35);
  box-shadow: 3px 9px 40px -1px rgba(0,0,0,0.35);
  overflow: unset;
}
ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
}
.circle {
  height: 130px;
  width: 130px;
  background-color: white;
  border-radius: 50%;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dominant {
  width: 180px;
  height: 180px;
  background-color: #C099F8;
}
.firstCircle {
  background-color: grey;
}
.secondCircle {
  background-color: #66B2FF;
}
.thirdCircle {
  background-color: moccasin;
}
.fourthCircle {
  background-color: #FF6666;
}
.fifthCircle {
  background-color: darkcyan;
}
@media (max-width: 965px) {
  .fifthCircle {
    display: none;
  }
}
@media (max-width: 830px) {
  .fifthCircle {
    display: none;
  }
  .fourthCircle {
    display: none;
  }
}
</style>
