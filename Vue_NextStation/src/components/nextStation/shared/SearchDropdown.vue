<template lang='pug'>
  select.ui.search.fluid.selection.dropdown(v-model='seletedValue')
    option(value='') default
    option(value='elective') Elective case
    option(value='emergency') Elective case
    option(value='0') Ergency case
</template>

<script>
  export default {
    name: 'SearchDropdown',
    props: {
      value: [String, Number],
      keyword: String
    },
    data () {
      return {
        seletedValue: ''
      }
    },
    mounted () {
      $(this.$el).dropdown({
        fullTextSearch: true,
        onChange: (value, text, choice) => {
          this.$emit('input', value)
        }
      })
    }
  }
</script>