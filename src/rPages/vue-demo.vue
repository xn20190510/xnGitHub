<template>
  <div class="vue-demo">
    <xn-title :title-txt="name" :title-url="url"></xn-title>
    <xn-content :vice-title="viceTitle" :cont-list="list"></xn-content>
  </div>
</template>

<script>
  import XnTitle from "../public/xnTitle";
  import XnContent from "../public/xnContent";
  export default {
    name: "vue-demo",
    components: {XnContent, XnTitle},
    data() {
      return {
        name: 'vue',
        url: 'https://cn.vuejs.org/v2/guide/',
        viceTitle: '什么是vue?',
        list: [
          '解释1',
          '解释2'
        ]
      }
    }
  }
</script>

<style lang="less">
  .vue-demo {
    width: 100%;
    height: 100%;
    padding: 10px 30px;
  }
</style>
