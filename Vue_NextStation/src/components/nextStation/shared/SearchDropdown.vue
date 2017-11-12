<template lang='pug'>
  select.ui.search.fluid.selection.dropdown(v-model='seletedValue')
    option(value='') default
    option(value='phayathai') phayathai
    option(value='a') Elective case
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
    },
    methods: {
      setSeleted: function (value) {
        $(this.$el).dropdown('set selected', value)
      }
    }
  }
</script>