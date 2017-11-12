<template lang="pug">
  .ui.container
    label  {{value}}
      .ui.button(@click="panTo('bts')") BTS
      .ui.button(@click="panTo('mrt')") MRT
      .ui.button(@click="panTo('air')") AIRPORT LINK
      .ui.button(@click="fitBounds") Fit Bound
    google-map.fluid.map(ref="googleMap", :center="center", :zoom="13", :map-type-id="mapType", :options="option", @bounds_changed="checkBounds", @click="addPointToPath")
      google-cluster(:maxZoom="10")
        google-marker(
          v-for="(m, index) in markers"
          :key="index"
          :position="m.position"
          :clickable="true"
          :icon="icon"
          @mouseover="statusText = m.text"
          @mouseout="statusText = 'Hover button to show name'"
          @click="markerClicked(index)")
      gmap-polyline(:path="mapPaths")
    .ui.black.fluid.label.status {{ statusText }}
    label {{ mapPaths }}
</template>

<script>
export default {
  name: 'DestMap',
  props: {
    value: Object
  },
  mounted () {
    this.$refs.googleMap.$mapCreated.then(() => {
      console.log('MAP CREATED')
    })
  },
  data () {
    return {
      // MAP
      mapType: 'roadmap',
      center: {lat: 13.757041, lng: 100.533913},
      option: {
        streetViewControl: false,
        scrollwheel: true,
        clickableIcons: false,
        disableDoubleClickZoom: false,
        fullscreenControl: false,
        maxZoom: 16,
        minZoom: 11,
        noClear: false,
        panControl: false,
        backgroundColor: 'black'
      },
      // MARKER
      markers: [
        {position: {lat: 13.757041, lng: 100.533913}, text: 'เมืองบอสเอง', value: 'phayathai'},
        {position: {lat: 13.751051, lng: 100.533913}, text: 'a', value: 'a'},
        {position: {lat: 13.752061, lng: 100.533913}, text: 'b', value: 'b'},
        {position: {lat: 13.753071, lng: 100.533913}, text: 'c', value: 'c'},
        {position: {lat: 12.9, lng: 110.0}, text: 'อีกเมืองนึงของบอส', value: 'ไหนไม่รุ'}
      ],
      icon: {
        // http://maps.google.com/mapfiles/kml/shapes/shaded_dot.png
        url: 'http://maps.google.com/mapfiles/kml/shapes/road_shield3.png',
        size: {width: 46, height: 46, f: 'px', b: 'px'},
        scaledSize: {width: 23, height: 23, f: 'px', b: 'px'}
      },
      // STATUS BAR
      statusText: 'Hover button to show name',
      // Path
      mapPaths: []
    }
  },
  methods: {
    markerClicked: function (index) {
      let stationName = this.markers[index].value
      if (this.value.from_val === '') {
        this.$emit('input', { from_val: stationName, to_val: this.value.to_val })
      } else {
        this.$emit('input', { from_val: this.value.from_val, to_val: stationName })
      }
      this.$emit('selected')
    },
    panTo: function (e) {
      this.$refs.googleMap.panTo({lat: 13.757041, lng: 100.533913})
    },
    checkBounds: function (e) {
    },
    fitBounds: function (e) {
      // this.$refs.googleMap.fitBounds({sc: {b: 100.37186466015623, f: 100.61013065136717}}, {wc: {b: 13.688668900641094, f: 13.82205934415864}})
      // console.log(this.$refs.googleMap.LatLngBounds())
    },
    addPointToPath: function (event) {
      console.log('click')
      console.log(event)
      this.mapPaths.push({lat: event.latLng.lat(), lng: event.latLng.lng()})
    }
  }
}
</script>

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
  .label.status {
    margin-top: 3px;
    text-align: center;
  }
</style>