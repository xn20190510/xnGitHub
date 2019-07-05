<template>
  <div id="xnTitle" class="xn-title">
    <div class="title-name">{{titleTxt}}</div>
    <div class="title-url">网站链接：<span title='点击前往' @click="toLink">{{titleUrl}}</span></div>
  </div>
</template>

<script>
  export default {
    name: "xnTitle",
    data() {
      return {
      }
    },
    props: {
      titleTxt: String,
      titleUrl: String
    },
    methods: {
      toLink() {
        console.log(this.titleUrl)
        window.open(this.titleUrl, '_blank');
      }
    }
  }
</script>

<style lang="less">
  .xn-title {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #dddddd;
    .title-name {
      font-size: 18px;
      line-height: 30px;
    }
    .title-url {
      line-height: 30px;
      span {
        color: blue;
        margin-left: 10px;
        cursor: pointer;
        opacity: 0.8;
      }
      span:hover {
        opacity: 1;
      }
    }
  }
</style>
