<template lang='pug'>
  .ui.container
    // ad W300px H250px
    .ui.link.cards
      // card
      Card(v-for="n in 4", :rating="n")
 
</template>

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
