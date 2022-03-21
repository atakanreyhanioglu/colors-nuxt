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
        e.target.style.backgroundColor = '#000000'
      })
      circle.addEventListener('mouseout', () => {
        // eslint-disable-next-line no-console
        console.log('hey2')
      })
    })

  }
}
</script>
<style>
.palette {
  background-color: white;
  width: 90%;
  height: 170px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 1px 9px 21px 4px rgba(0,0,0,0);
  box-shadow: 5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 1px 9px 21px 4px rgba(0,0,0,0);
}
ul {
  list-style-type: none;
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
</style>
