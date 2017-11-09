<template lang='pug'>
  .ui.middle.aligned.stackable.grid.container
      .row
        .ten.wide.column
          // Map with botton choose destination
          DestMap(v-model='values')
        .six.wide.right.floated.column
          .ui.container
            // Form
            DestForm(v-model='values')
            .ui.divider    
            .ui.container
              // RESULTs
              h1 RESULTS
              label boss
</template>


<script>
  import DestForm from './destination/DestForm.vue'
  import DestMap from './destination/DestMap.vue'
  export default {
    name: 'Destination',
    components: { DestForm, DestMap },
    data () {
      return {
        values: { from_val: 'elective', to_val: 'emergency' }
      }
    }
  }
</script>