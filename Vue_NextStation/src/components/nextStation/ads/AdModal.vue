<template lang="pug">
  .ui.longer.modal(ref="modal")
    .header TITLE
    .content 
      p(v-for="n in 20") bbb
</template>

<script>
export default {
  name: 'AdModal',
  methods: {
    show (callback) {
      $(this.$el)
        .modal('setting', 'transition', 'scale')
        .modal({
          blurring: true
        })
        .modal({
          onApprove: () => { callback && callback() }
        })
        .modal('show')
      this.$nextTick(() => {
        $(this.$el).modal('refresh')
      })
    },
    close () {
      $(this.$el).modal('hide')
    }
  }
}
</script>

