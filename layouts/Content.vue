<template>
    <div class="content">
      <div class="clean-area"></div>
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
          <ui-button raised class="color-button"><span><b>Get Colors</b></span></ui-button>
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
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.clean-area {
  width: 100%;
  height: 50px;
  background-color: transparent;
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
}
.color-button {
  height: 54px;
  margin-left: 50px;
  width: 150px;
}
.input-field {
  width: 550px;
}
</style>
