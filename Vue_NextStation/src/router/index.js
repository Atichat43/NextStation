import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import * as VueGoogleMaps from 'vue2-google-maps'
var VueScrollTo = require('vue-scrollto')

Vue.use(VueScrollTo)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCQZ6RzPn70v3Db6JVTwOqsRlQ6ZRNEj7w',
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

Vue.component('google-map', VueGoogleMaps.Map)
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
