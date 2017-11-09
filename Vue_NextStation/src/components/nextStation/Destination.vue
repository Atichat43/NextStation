<template lang='pug'>
  .ui.middle.aligned.stackable.grid.container
      .row
        .ten.wide.column
          // Map with botton choose destination
          .ui.fluid.empty.container
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

<style scope>
  .ui.fluid.empty.container {
    background-color: black;
    min-height: 400px;
  }
</style>

<script>
  import DestForm from './destination/DestForm.vue'
  export default {
    name: 'Destination',
    components: { DestForm },
    data () {
      return {
        values: { from_val: 'elective', to_val: 'emergency' }
      }
    }
  }
</script>