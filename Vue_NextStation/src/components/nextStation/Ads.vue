<template lang='pug'>
  .ui.container
    label {{ page }}
    .row
      .ui.link.cards
        // card
        .ui.icon.button(:class="page.start>=0? '': 'disabled'", @click="changePage(-1)")
          i.large.angle.left.icon
        AdCard(v-for="index in MAXPAGE", :item="items[index + page.start]", @click='showModalAd(item)')
        .ui.icon.button(:class="page.start !== page.end? '':'disabled'", @click="changePage(1)")
          i.large.angle.right.icon
    AdModal(ref="adModal")
    
    
</template>

<script>
import AdModal from './ads/AdModal'
import AdCard from './ads/AdCard'
export default {
  name: 'Ads',
  components: { AdCard, AdModal },
  data () {
    return {
      MAXPAGE: 4,
      page: {
        start: -1,
        end: 6 - 4 - 1 // len item update after get items from database
      },
      items: [
        {name: 'Macdonal1', rating: 3, location: '43/51 maung'},
        {name: 'Macdonal2', rating: 4, location: '43/51 maung'},
        {name: 'Macdonal3', rating: 2, location: '43/51 maung'},
        {name: 'Macdonal4', rating: 0, location: '43/51 maung'},
        {name: 'Macdonal5', rating: 1, location: '43/51 maung'},
        {name: 'Macdonal6', rating: 3, location: '43/51 maung'}
      ]
    }
  },
  methods: {
    showModalAd: function (item) {
      this.$refs.adModal.show(() => {})
    },
    changePage: function (value) {
      this.page.start += value
    }
  }
}
</script>
