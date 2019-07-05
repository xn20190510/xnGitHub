<template>
  <div class="demo-ditor">
   <XnUEditor></XnUEditor>
  </div>
</template>

<script>
  import XnUEditor from "../components/XnUEditor";
  export default {
    components: {XnUEditor},
    data() {
      return {
        ueContent: '请输入内容...',
        config: {}
      }
    }
  }
</script>

<style scoped>

</style>
