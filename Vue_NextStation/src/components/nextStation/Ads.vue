<template lang='pug'>
  .ui.container
    // ad W300px H250px
    .ui.link.cards
      // card
      Card(v-for="n in 4", :rating="n")
 
</template>

<style scoped>
  .ui.star.rating {
    padding-left: .75em;
  }
  .ui.cards>.card { 
    width: 260px;
  }
</style>

<script>
import Card from './ads/AdCard'
export default {
  name: 'Ads',
  components: { Card },
  data () {
    return {}
  }
}
</script>
