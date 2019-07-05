<template>
  <div class="xn-content">
    <div class="xn-vice-title">{{viceTitle}}</div>
    <div v-for="(item, index) of contList" :key="index" class="xn-cont-item">
      <div class="xn-index">{{index + 1}}.</div>
      <div class="xn-info">{{item}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "xnContent",
    data() {
      return {
        data: [],
      }
    },
    props: {
      contList: Array,
      viceTitle: String
    },
    mounted() {
      this.data = this.contList;
    }
  }
</script>

<style lang="less">
  .xn-content {
    width: 100%;
    height: auto;
    padding: 20px 0px;
    .xn-vice-title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: 16px;
    }
    .xn-cont-item {
      padding-left: 40px;
      line-height: 30px;
      .xn-index {
        /*width: 50px;*/
        float: left;
      }
      .xn-info {
        /*width: calc(100% - 50px);*/
        float: left;
      }
    }
  }
</style>
