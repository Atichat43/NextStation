<template lang='pug'>
  select.ui.search.fluid.dropdown
    option(value='') default
    option(value='elective') Elective case
    option(value='emergency') Elective case
    option(value='ergency') Ergency case
</template>

<script>
  export default {
    name: 'SearchDropdown',
    mounted () {
      $('select.dropdown').dropdown()
    }
  }
</script>