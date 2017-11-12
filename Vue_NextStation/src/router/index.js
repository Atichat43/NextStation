import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
const VueGoogleMaps = require('vue2-google-maps')
const VueScrollTo = require('vue-scrollto')
Vue.use(Router)
Vue.use(VueScrollTo)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCQZ6RzPn70v3Db6JVTwOqsRlQ6ZRNEj7w',
    libraries: 'places',
    installComponents: false
  }
})

Vue.component('google-map', VueGoogleMaps.Map)
Vue.component('google-marker', VueGoogleMaps.Marker)
Vue.component('google-cluster', VueGoogleMaps.Cluster)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    }
  ]
})
