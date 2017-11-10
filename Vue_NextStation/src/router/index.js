import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
var VueScrollTo = require('vue-scrollto')

Vue.use(VueScrollTo)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    }
  ]
})
