<template>
  <div class="hello">
    <Layout>
      <Sider hide-trigger width="240">
        <Menu @on-select="navigatorTo" :active-name="curPage" theme="light">
          <MenuItem v-for="(item, index) of list" :key="index" :name="item.path">
            <span>{{item.name}}</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Content :style="{padding: '10px', background: '#fff', minHeight: '220px'}">
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      isCollapsed: false,
      curPage: '/vueDemo',
      list: [
        {
          name: 'vue',
          path: '/vueDemo'
        },
        {
          name: 'iview',
          path: '/iviewDemo'
        },
        {
          name: 'demoTitle',
          path: '/demoTitle'
        },
        {
          name: 'demoSearch',
          path: '/demoSearch'
        },
        {
          name: 'iviewGrid',
          path: '/iviewGrid'
        }
      ]
    }
  },
  methods: {
    navigatorTo(name) {
      this.$router.push(name)
    },
  },
  mounted() {
    this.navigatorTo('/vueDemo')
  }
}
</script>

<style lang="less">
  @import "../assets/css/common";
  .hello {
    width: 100%;
    height: 100%;
    .ivu-layout-sider {
      background-color: white;
    }
  }

</style>
