<template lang="pug">
  .ui.form
    .filed
      label {{ value }}
    .field
      label From {{ selectedValue.from_val }}
      SearchDropdown(v-model='selectedValue.from_val')
    .field  
      label To {{ selectedValue.to_val }}
      SearchDropdown(v-model='selectedValue.to_val')
    .field
      .ui.fluid.button(@click.prevent='resetValue') RESET
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
    }
  }
}
</script>

