<template>
  <div class="demo-search">
    <xn-search @selectFunc="selectFunc" :searchList="searchList" :selectValue="selectValue"></xn-search>
  </div>
</template>

<script>
  import XnSearch from "../public/xn-search";
  export default {
    name: "demo-search",
    components: {XnSearch},
    data() {
      return {
        searchList: ['草船借箭', '大富翁', '测试数据'],
        // 直接通过props传递对象 修改，挺便捷的,但是不规范
        selectValue: {
          data: '1'
        },
        // 通过emit修改，规范写法
        selectValue2: ''
      }
    },
    methods: {
      pageGo(path) {
        this.$router.push('/' + path)
      },
      selectFunc(value) {
        this.selectValue2 = value
        console.log(this.selectValue)
        console.log(this.selectValue2)
      }
    }
  }
</script>

<style lang="less">
  .demo-search {
    width: 100%;
    height: auto;
  }
</style>
