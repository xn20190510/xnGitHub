<template>
  <div class="demo-title">
    <xnTitle :title-txt="name" :title-url="url"></xnTitle>
  </div>
</template>

<script>
  import xnTitle from "../public/xnTitle";
  export default {
    data() {
      return {
        name: '封装title组件',
        url: 'http://www.baidu.com'
      }
    },
    components: {xnTitle},
  }
</script>

<style lang="less">
  .demo-title {
    width: 100%;
    height: auto;
    padding: 10px 30px;
  }
</style>
