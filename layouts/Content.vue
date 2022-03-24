<template>
    <div class="content">
          <div class="left-side">
            <div class="title">
              <h2>
                Have you ever wanted to know the colors of an image?
              </h2>
              Webcolors is the tool you need.
              It gathers all colors and prints them out in a list
              that can be copied and pasted.
            </div>
            <div class="page-url">
              <ui-file accept="image/*" @change="loadFile($event)">
                <ui-button outlined class="color-button"><span><b>Update an image</b></span></ui-button>
              </ui-file>
            </div>
          </div>
          <div class="right-side">
            <img src="~/assets/choose-color.svg" alt="choose-color-svg" style="width: 80%; height: 236px"/>
            <img src="~/assets/img.png" alt="paint" class="paint" style="width: 150px; height: 150px"/>
          </div>
    </div>
</template>

<script>
export default {
  name: 'ContentLayout',
  data() {
    return {
      paletteArray: [],
      dominantColorArray: [],
    }
  },
  methods: {
    async loadFile(e) {
      try{
        const formData = new FormData()
        formData.append('file', e[0].sourceFile)
        const res = await this.$axios.post('http://localhost:8080/colors', formData)
        console.log(res)
        const { dominantColor, palette }  = await res.json().then(() => {
          this.dominantColorArray = dominantColor
          this.paletteArray = palette
        });

      }catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
      }
    },
  }
}
</script>
<style>
.content {
  width: 100%;
  height: 360px;
  display: flex;
  flex-wrap: wrap;
}
.left-side {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  margin-top: 40px;
}
.right-side {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 50%;
  margin-top: 40px;
  position: relative;
}
.title h2 {
  color: darkcyan;
  justify-content: center;
  display: flex;
  align-items: center;
}
.title h1 p {
  color: #C099F8;
}
.page-url {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  width: 100%;
}
.color-button {
  height: 54px;
  width: 100%;
}
.paint {
  position: absolute;
  z-index: -1;
}
</style>
