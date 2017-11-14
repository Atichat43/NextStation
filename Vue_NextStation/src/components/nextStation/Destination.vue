<template lang='pug'>
  .ui.middle.aligned.stackable.grid.container
    .row
      .ui.container.fant
    //
      .ten.wide.column
        DestMap(v-model="destination", @selected="updateDestination")
      .six.wide.right.floated.column
        .ui.container
          DestForm(ref="destForm", v-model="destination")
          .ui.form
            .field
              .ui.green.fluid.button(@click="resetDestination") RESET
          .ui.divider
          .ui.container
            h1 RESULTS
            label boss
</template>

<style scope>
  .fant {
    background-color: orange;
    height: 700px;
    width: 100%;
  }
</style>


<script>
  import DestForm from './destination/DestForm.vue'
  import DestMap from './destination/DestMap.vue'
  export default {
    name: 'Destination',
    components: { DestForm, DestMap },
    data () {
      return {
        destination: { from_val: '', to_val: '' }
      }
    },
    methods: {
      resetDestination () {
        this.destination.from_val = ''
        this.destination.to_val = ''
        this.$refs.destForm.clearForm()
      },
      updateDestination: function () {
        this.$refs.destForm.setSelected(this.destination.from_val, this.destination.to_val)
      }
    }
  }
</script>