<template lang="pug">
  .ui.form
    .filed
      label {{ value }}
    .field
      label From {{ selectedValue.from_val }}
      SearchDropdown(ref="from_dropdown", value="selectedValue", keyword='f_val', @fVal="updatedValue('form_val')")
    .field  
      label To {{ selectedValue.to_val }}
      SearchDropdown(ref="to_dropdown", value="selectedValue", keyword='t_val', @tVal="updatedValue('to_val')")
    .field
      .ui.fluid.button(@click.prevent="resetValue") RESET
</template>

<script>
import SearchDropdown from '../shared/SearchDropdown'

export default {
  name: 'DestForm',
  components: { SearchDropdown },
  props: {
    value: Object
  },
  data () {
    return {
      selectedValue: this.value
    }
  },
  methods: {
    resetValue: function () {
      this.selectedValue.from_val = ''
      this.selectedValue.to_val = ''
      this.selectedValue.to_val = 'eiei'
      // this.$emit('input', this.selectedValue)
    },
    updatedValue: function (keyword) {
      if (keyword === 'from_val') {
        // do
      } else {
        // do
      }
      console.log(keyword)
    }
  }
}
</script>

