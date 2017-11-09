<template lang="pug">
  .div
    label From, to {{value}} 
    .ui.fluid.empty.container
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
export default {
  name: 'DestMap',
  components: { MapButton },
  props: {
    value: Object
  },
  data () {
    return {
    }
  }
}
</script>
