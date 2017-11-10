<template lang="pug">
  .ui.modal(ref="modal")
    .header TITLE
    .content BOSS
</template>

<script>
export default {
  name: 'AdModal',
  methods: {
    show (callback) {
      $(this.$el)
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

