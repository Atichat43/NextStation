<template lang="pug">
  .div
    label From, to {{value}}
    .ui.button(@click="panToBTS") BTS
    google-map.fluid.map(ref="googleMap", :center="center", :zoom="13", :map-type-id="mapType", :options="{streetViewControl: false}", @zoom_changed="testZoom")
      google-cluster(:maxZoom="10")
        google-marker(
          v-for="(m, index) in markers"
          :key="index"
          :position="m.position"
          :clickable="true"
          @click="testClicked"
          @mouseover="statusText = m.text"
          @mouseout="statusText = null"
          :icon="icon")
      div(slot='visible')
          div.status.bar(style='bottom: 0; left: 0; background-color: #0000FF; color: white; position: absolute; z-index: 100')
            | {{statusText}}
</template>


<style scope>
  .map {
    height: 400px;
    margin: 0 auto;
    background: gray;
  }
  .gm-style-cc, #map_canvas .gm-style > .gmnoprint > .gmnoprint > div > img {
    display: none !important;
  }
  .gm-fullscreen-control {
    display: none
  }
  .gm-style-mtc {
    display: none
  }
</style>

<script>
import MapButton from '../shared/MapButton'
export default {
  name: 'DestMap',
  components: { MapButton },
  props: {
    value: Object
  },
  data () {
    return {
      minZoom: 11,
      maxZoom: 15,
      zoom: 12,
      center: {lat: 13.757041, lng: 100.533913},
      icon: {
        url: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png',
        size: {width: 46, height: 46, f: 'px', b: 'px'},
        scaledSize: {width: 23, height: 23, f: 'px', b: 'px'}
      },
      // hybrid
      mapType: 'roadmap',
      statusText: '',
      markers: [
        // 13.757041, 100.533913
        {position: {lat: 13.757041, lng: 100.533913}, text: 'เมืองบอสเอง'},
        {position: {lat: 12.9, lng: 110.0}, text: 'อีกเมืองนึงของบอส'}
      ],
      iconBase: 'https://maps.google.com/mapfiles/kml/shapes/',
      icons: {
        parking: {icon: this.iconBase + 'parking_lot_maps.png'},
        library: {icon: this.iconBase + 'library_maps.png'},
        info: {icon: this.iconBase + 'info-i_maps.png'}
      }
    }
  },
  methods: {
    testClicked: function (e) {
      console.log($('.gmnoprint')[5].hidden = true)
      console.log($('.button'))
    },
    panToBTS: function () {
      let map = this.$refs.googleMap
      map.panTo({lat: 13.757041, lng: 100.533913})
      map.$mapObject.mapDataProviders = null
    },
    testZoom: function (number) {
      if (number > 15) {
        console.log($('.gmnoprint')[3])
      }
    }
  }
}
</script>
