<template>
  <div id="editor"></div>
</template>

<script>
  import '../../static/UE/ueditor.config'
  import '../../static/UE/ueditor.all.min.js'
  import '../../static/UE/lang/zh-cn/zh-cn.js'
  import '../../static/UE/ueditor.parse.min.js'
  export default {
    name: "XnUEditor",
    data() {
      return {
        editor: null
      }
    },
    props: {
      defaultMsg: {
        type: String
      },
      config: {
        type: Object
      }
    },
    mounted() {
      const _this = this;
      // 初始化UEditor，并传入参数配置
      this.editor = window.UE.getEditor('editor', this.config);
      this.editor.addListener('ready', function () {
        _this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容
      })
    },
    methods: {
      getContent() {
        return this.editor.getContent(); // 获取内容的方法
      },
      destroyed() {
        this.editor.destroy()
      }
    }
  }
</script>

<style scoped>

</style>
