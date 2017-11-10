<template lang='pug'>
  .ui.container
    // ad W300px H250px
    .ui.link.cards
      // card
      AdCard(v-for="item in 4", :rating="item", @click='showModalAd(item)')
    AdModal(ref="adModal")
</template>

<script>
import AdModal from './ads/AdModal'
import AdCard from './ads/AdCard'
export default {
  name: 'Ads',
  components: { AdCard, AdModal },
  data () {
    return {}
  },
  methods: {
    showModalAd: function (item) {
      this.$refs.adModal.show(() => {})
    }
  }
}
</script>
