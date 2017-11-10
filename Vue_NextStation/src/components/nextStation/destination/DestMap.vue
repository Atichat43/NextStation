<template lang="pug">
  .div
    label From, to comment 
    GoogleMap(name="example")
    //.ui.fluid.empty.container
       MapButton(v-for=" number in 10", v-model="value.from_val", :selectedValue="number") {{number}}
</template>


<style scope>
  .ui.fluid.empty.container {
    background-color: black;
    min-height: 400px;
  }
</style>

<script>
import MapButton from '../shared/MapButton'
import GoogleMap from './GoogleMap'
export default {
  name: 'DestMap',
  components: { MapButton, GoogleMap }
}
</script>
