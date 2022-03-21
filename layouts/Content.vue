<template>
    <div class="content">
          <div class="left-side">
            <div class="title">
              <h2>
                Have you ever wanted to know the color of a website?
              </h2>
              Webcolors is the tool you need.
              It gathers all colors and prints them out in a list
              that can be copied and pasted.
            </div>
            <div class="page-url">
              <ui-textfield class="input-field" outlined>
                Page url
              </ui-textfield>
              <ui-button raised class="color-button"><span><b>Colors</b></span></ui-button>
            </div>
          </div>
          <div class="right-side">
            <img src="~/assets/choose-color.svg" alt="choose-color-svg" style="width: 80%; height: 236px"/>
          </div>
    </div>
</template>

<script>
export default {
  name: 'ContentLayout',
}
</script>
<style>
.content {
  width: 100%;
  height: 700px;
  display: flex;
  flex-wrap: wrap;
}
.left-side {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
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
}
.title h2 {
  color: darkcyan;
  justify-content: center;
  display: flex;
}
.title h1 p {
  color: #C099F8;
}
.page-url {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  width: 100%;
}
.color-button {
  height: 54px;
  margin-left: 20px;
  width: 100px;
}
.input-field {
  width: 550px;
}
</style>
