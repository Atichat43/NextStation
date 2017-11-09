<template lang='pug'>
  select.ui.search.fluid.dropdown
    option(value='') default
    option(value='elective') Elective case
    option(value='emergency') Elective case
    option(value='0') Ergency case
</template>

<script>
  export default {
    name: 'SearchDropdown',
    props: {
      value: [String, Number]
    },
    mounted () {
      $('select.dropdown').dropdown({
        fullTextSearch: true,
        onChange: (value) => {
          console.log(value)
          this.$emit('input', value)
        }
      })
    }
  }
</script>