<template lang="pug">
  .ui.form
    .filed
      label {{ value }}
    .field
      label From
      SearchDropdown(v-model='value.from_val')
    .field  
      label To
      SearchDropdown(v-model='value.to_val')
    .ui.hidden.divider
</template>

<script>
import SearchDropdown from '../shared/SearchDropdown'
export default {
  name: 'DestForm',
  props: {
    value: Object
  },
  components: { SearchDropdown }
}
</script>

