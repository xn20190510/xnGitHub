<template>
  <div class="demo-iview">
    <xn-title :title-txt="name" :title-url="url"></xn-title>
  </div>
</template>

<script>
  import XnTitle from "../public/xnTitle";
  export default {
    name: "iview-demo",
    components: {XnTitle},
    data() {
      return {
        name: 'iview',
        url: 'https://www.iviewui.com/docs/guide/install',
      }
    }
  }
</script>

<style lang="less">
  .demo-iview {
    width: 100%;
    height: auto;
    padding: 10px 30px;
  }
</style>
