<template lang='pug'>
  select.ui.search.fluid.dropdown(v-model='seletedValue')
    option(value='') default
    option(value='elective') Elective case
    option(value='emergency') Elective case
    option(value='0') Ergency case
</template>

<script>
  export default {
    name: 'SearchDropdown',
    data () {
      return {
        seletedValue: ''
      }
    },
    mounted () {
      $('select.dropdown').dropdown({
        fullTextSearch: true,
        onChange: (value, text, choice) => {
          console.log('in')
          this.$emit('input', value)
        }
      })
    },
    props: {
      value: String
    }
  }
</script>