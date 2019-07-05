import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demoDitor from '@/examples/demoEUditor'
import demoSearch from '@/examples/demo-search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/vueDemo',
          component: resolve => require(['@/rPages/vue-demo'], resolve)
        },
        {
          path: '/iviewDemo',
          component: resolve => require(['@/rPages/iview-demo'], resolve)
        },
        {
          path: '/demoTitle',
          component: resolve => require(['@/examples/demoTitle'], resolve)
        },
        {
          path: '/iviewGrid',
          component: resolve => require(['@/rPages/iview-grid'], resolve)
        }
      ]
    },
    {
      path: '/demoDitor',
      name: 'demoDitor',
      component: demoDitor
    },
    {
      path: '/demoSearch',
      name: 'demoSearch',
      component: demoSearch
    },
  ]
})
