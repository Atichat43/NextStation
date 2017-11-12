<template lang="pug">
  .ui.container
    label From, to {{value}}
      .ui.button(@click="panTo('bts')") BTS
      .ui.button(@click="panTo('mrt')") MRT
      .ui.button(@click="panTo('air')") AIRPORT LINK
    google-map.fluid.map(ref="googleMap", :center="center", :zoom="13", :map-type-id="mapType", :options="{streetViewControl: false}")
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
    .ui.black.fluid.label.status {{ statusText }}
</template>

<script>
export default {
  name: 'DestMap',
  props: {
    value: Object
  },
  data () {
    return {
      // MAP
      mapType: 'roadmap',
      center: {lat: 13.757041, lng: 100.533913},
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
      statusText: 'Hover button to show name'
    }
  },
  methods: {
    markerClicked: function (index) {
      let stationName = this.markers[index].value
      this.$emit('input', { from_val: stationName, to_val: this.value.to_val })
    },
    panTo: function (e) {
      this.$refs.googleMap.panTo({lat: 13.757041, lng: 100.533913})
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