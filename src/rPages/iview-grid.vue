<template>
  <div class="iview-grid">
    <xn-title :title-txt="name" :title-url="url"></xn-title>
    <div class="demo-test">
      <Row :gutter="32">
        <i-col span="6">
          <div class='test-item'>栅格布局</div>
        </i-col>
        <i-col span="6">
          <div class='test-item'>栅格布局</div>
        </i-col>
        <i-col span="6">
          <div class='test-item'>栅格布局</div>
        </i-col>
        <i-col span="6">
          <div class='test-item'>栅格布局</div>
        </i-col>
      </Row>
    </div>
  </div>
</template>

<script>
  import XnTitle from "../public/xnTitle";
  export default {
    name: "iview-grid",
    components: {XnTitle},
    data() {
      return {
        name: '栅格布局',
        url: 'https://www.iviewui.com/components/grid'
      }
    }
  }
</script>

<style lang="less">
  .iview-grid {
    width: 100%;
    height: auto;
    padding: 10px 30px;
    background-color: #dddddd;
    .demo-test {
      width: 100%;
      height: auto;
      padding: 0px 150px;
      .test-item {
        width: 100%;
        height: 100px;
        background-color: yellow;
      }
    }
  }
</style>
