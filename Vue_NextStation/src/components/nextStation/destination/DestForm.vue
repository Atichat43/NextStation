<template lang="pug">
  .ui.form
    .filed
      label {{ value }}
    .field
      label From
      SearchDropdown.fromDestination(ref="thisForm", v-model='value.from_val')
    .field  
      label To
      SearchDropdown.toDestination(ref="dropdownTo",v-model='value.to_val')
    .ui.hidden.divider
</template>

<script>
import SearchDropdown from '../shared/SearchDropdown'
export default {
  name: 'DestForm',
  props: {
    value: Object
  },
  components: { SearchDropdown },
  methods: {
    clearForm: function () {
      $('.selection.dropdown').dropdown('clear')
    },
    setSelected: function (from, to) {
      $('.fromDestination').dropdown('set selected', from)
      $('.toDestination').dropdown('set selected', to)
    }
  }
}
</script>

