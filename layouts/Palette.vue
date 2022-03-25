<template>
  <div class="palette">
    <ul>
      <li class="circle dominant" :style="cssVars" @click="showToast"></li>
      <li class="circle firstCircle" :style="cssVars" @click="showToast"></li>
      <li class="circle secondCircle" :style="cssVars" @click="showToast"></li>
      <li class="circle thirdCircle" :style="cssVars" @click="showToast"></li>
      <li class="circle fourthCircle" :style="cssVars" @click="showToast"></li>
      <li class="circle fifthCircle" :style="cssVars" @click="showToast"></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'PaletteLayout',
  data() {
    return {
      defaultPageColors: true,
      dominantColor: '',
      firstCircleColor: '',
      secondCircleColor: '',
      thirdCircleColor: '',
      fourthCircleColor: '',
      fifthCircleColor: ''
    }
  },
  computed: {
    cssVars () {
      return {
        '--dominant-bg-color': this.defaultPageColors ? '#C099F8': `${this.dominantColor}`,
        '--firstCircle-bg-color': this.defaultPageColors ? 'grey' : `${this.firstCircleColor}`,
        '--secondCircle-bg-color': this.defaultPageColors ? '#66B2FF' : `${this.secondCircleColor}`,
        '--thirdCircle-bg-color': this.defaultPageColors ? 'moccasin' : `${this.thirdCircleColor}`,
        '--fourthCircle-bg-color': this.defaultPageColors ? '#FF6666' : `${this.fourthCircleColor}`,
        '--fifthCircle-bg-color': this.defaultPageColors ? 'darkcyan' : `${this.fifthCircleColor}`
      }
    }
  },
  watch: {
    '$store.state.data.palette'() {
      this.defaultPageColors = false
      this.dominantColor = `rgb(${this.$store.state.data.dominant[0]},${this.$store.state.data.dominant[1]},${this.$store.state.data.dominant[2]})`
      this.$store.state.data.palette.forEach((color, index) => {
        if(index === 0) {
          this.firstCircleColor = `rgb(${color[0]},${color[1]},${color[2]}`
        }else if(index === 1){
          this.secondCircleColor = `rgb(${color[0]},${color[1]},${color[2]}`
        }else if(index === 2){
          this.thirdCircleColor = `rgb(${color[0]},${color[1]},${color[2]}`
        }else if(index === 3){
          this.fourthCircleColor = `rgb(${color[0]},${color[1]},${color[2]}`
        }else if(index === 4){
          this.fifthCircleColor = `rgb(${color[0]},${color[1]},${color[2]}`
        }
      })
    },
  },
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
  },
  methods: {
    showToast() {
      this.$toast({
        timeoutMs: 2000,
        message: 'Color is copied! 👍',
        position: 'top',
      });
    }
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
  background-color: var(--dominant-bg-color);
  transition: all 0.2s ease;
}
.firstCircle {
  background-color: var(--firstCircle-bg-color);
  transition: all 0.2s ease;
}
.secondCircle {
  background-color:  var(--secondCircle-bg-color);
  transition: all 0.2s ease;
}
.thirdCircle {
  background-color: var(--thirdCircle-bg-color);
  transition: all 0.2s ease;
}
.fourthCircle {
  background-color: var(--fourthCircle-bg-color);
  transition: all 0.2s ease;
}
.fifthCircle {
  background-color:  var(--fifthCircle-bg-color);
  transition: all 0.2s ease;
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
