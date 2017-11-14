<template lang="pug">
  .ui.container
    label  {{value}}
    label by fant
      .ui.button(@click="panTo('bts')") BTS
      .ui.button(@click="panTo('mrt')") MRT
      .ui.button(@click="panTo('air')") AIRPORT LINK
      .ui.button(@click="fitBounds") Fit Bound
    .ui.container.fant
      .ui.grid
        .row
          .ui.circular.icon.button(style="margin-left: 30px")
            i.icon.search
          .ui.button(style="margin-left: 60px")
          .ui.button(style="margin-left: 60px")
          .ui.button(style="margin-left: 60px")
          .ui.button(style="margin-left: 60px")
          .ui.button(style="margin-left: 60px")
        .row
        .row
        .row
          .ui.button(style="margin-left: 650px")
        .row
        .row
        .row
          .ui.button(style="margin-left: 30px")
          .ui.button(style="margin-left: 60px")
          .ui.button(style="margin-left: 60px")
          .ui.button(style="margin-left: 60px")
          .ui.button(style="margin-left: 60px")
          .ui.button(style="margin-left: 60px")
        
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
    label(v-for="path in mapPaths") {{ path }}
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
        {position: {lat: 13.88085504225433, lng: 100.40914658195106}, text: 'เมืองบอสเอง', value: 'phayathai'},
        {position: {lat: 13.874668141661651, lng: 100.41940335053368}, text: 'a', value: 'a'},
        {position: {lat: 13.875730550470584, lng: 100.43393019586802}, text: 'b', value: 'b'},
        {position: {lat: 13.876584640298205, lng: 100.44373635202646}, text: 'c', value: 'c'},
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
      mapPaths: [
        // MRT PATH
        { 'lat': 13.88085504225433, 'lng': 100.40914658195106 },
        { 'lat': 13.874668141661651, 'lng': 100.41940335053368 },
        { 'lat': 13.875730550470584, 'lng': 100.43393019586802 },
        { 'lat': 13.876584640298205, 'lng': 100.44373635202646 },
        { 'lat': 13.874793132457313, 'lng': 100.45603159815073 },
        { 'lat': 13.870543449583337, 'lng': 100.46667460614117 },
        { 'lat': 13.870397625794064, 'lng': 100.48042897396954 },
        { 'lat': 13.86583538065065, 'lng': 100.49420479685068 },
        { 'lat': 13.861648030761872, 'lng': 100.50476197145144 },
        { 'lat': 13.860168901239373, 'lng': 100.51310900729732 },
        { 'lat': 13.848752193887586, 'lng': 100.51482561975718 },
        { 'lat': 13.839293401611295, 'lng': 100.51506165415049 },
        { 'lat': 13.829688376571701, 'lng': 100.52632693201303 },
        { 'lat': 13.819082801357776, 'lng': 100.5322277918458 },
        { 'lat': 13.806101253461325, 'lng': 100.53091887384653 },
        // เตาปูน
        { 'lat': 13.803204790195073, 'lng': 100.5393088288838 },
        { 'lat': 13.79799523335701, 'lng': 100.54761294275522 },
        // กำแพงเพชร
        // สวนจัตุจักร
        { 'lat': 13.803913283480227, 'lng': 100.55407170206308 },
        { 'lat': 13.814248668323794, 'lng': 100.56016568094492 },
        { 'lat': 13.806017901231373, 'lng': 100.57342652362422 },
        { 'lat': 13.798349486908718, 'lng': 100.57430628687143 },
        { 'lat': 13.789097041588374, 'lng': 100.5744135765417 },
        { 'lat': 13.779302386209205, 'lng': 100.57396296411753 },
        { 'lat': 13.767235638978326, 'lng': 100.57128075510263 },
        { 'lat': 13.757585963530087, 'lng': 100.56544426828623 },
        { 'lat': 13.74854033288277, 'lng': 100.563062466681 },
        { 'lat': 13.73849385429969, 'lng': 100.56143168490962 },
        { 'lat': 13.723631779888068, 'lng': 100.56001547724009 },
        { 'lat': 13.726404154670822, 'lng': 100.54499510675669 },
        { 'lat': 13.729176506864947, 'lng': 100.536347663583 },
        // สีลม
        { 'lat': 13.732303174483826, 'lng': 100.52997473692812 },
        { 'lat': 13.737910228196393, 'lng': 100.51688555628061 }
        // หัวลำโพง
      ]
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
  .fant {
    width:100%;
    height: 100%;
    background-color: black;
  }
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
  .empty {
    height: 400px;
  }
</style>
