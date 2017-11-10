<template lang="pug">
  .div
    label From, to {{value}}
    google-map.fluid.map(:center="center", :zoom="7")
      // MapButton(v-for=" number in 10", v-model="value.from_val", :selectedValue="number") {{number}}
</template>


<style scope>
  .map {
    height: 400px;
    margin: 0 auto;
    background: gray;
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
      center: {lat: 10.0, lng: 10.0},
      markers: [
        {position: {lat: 10.0, lng: 10.0}},
        {position: {lat: 11.0, lng: 11.0}}
      ]
    }
  }
}
</script>
