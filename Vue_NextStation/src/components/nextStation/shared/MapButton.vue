<template lang="pug">
  .ui.circular.button(@click="onChanged")
    slot
</template>

<script>
export default {
  name: 'MapButton',
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    selectedValue: {
      type: Number
    }
  },
  data () {
    return {
    }
  },
  methods: {
    onChanged: function () {
      console.log('in')
      this.$emit('input', this.selectedValue)
    }
  }
}
</script>

