<template lang="pug">
  .ui.dropdown
    input(type='hidden', name='gender')
    i.dropdown.icon
    .default.text Gender
    .menu
      .item(data-value='male') Male
      .item(data-value='female') Female
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    value: {
      type: [String, Number],
      required: true
    }
  },
  mounted () {
    $(this.$el).dropdown({
      onChange: (value) => {
        console.log(value)
        this.$emit('input', value)
      }
    }
    )
  }  
}
</script>

