<template lang='pug'>
  .ui.middle.aligned.stackable.grid.container
      .row
        .ten.wide.column
          // Map with botton choose destination
          .ui.fluid.empty.container
        .six.wide.right.floated.column
          .ui.container
            // Form
            .ui.form
              .field
                label From
                SearchDropdown
              .field  
                label To
                SearchDropdown
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
  import SearchDropdown from './shared/SearchDropdown.vue'
  export default {
    name: 'Destination',
    components: { SearchDropdown },
    data () {
      return {}
    }
  }
</script>