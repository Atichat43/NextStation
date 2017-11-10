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
      value: [String, Number],
      keyword: String
    },
    mounted () {
      $('select.dropdown').dropdown({
        fullTextSearch: true,
        onChange: (value, text, choice) => {
          console.log(value)
          console.log(text)
          console.log(choice)
          if (this.keyword === 'f_val') {
            this.$emit('fVal', value)
          } else {
            this.$emit('tVal', value)
          }
        }
      })
    }
  }
</script>