<template lang="pug">
  .card(@click="cardClicked")
    .image
      img(src='http://energy106.ca/wp-content/uploads/2016/11/Facebook-Share-Image.jpg')
    .content
      .header Location
      .meta
        a 5km 30min
      .description
        | reviews
    .extra.content
      | Rating:
      .ui.star.rating(:data-rating='rating') aa
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
  export default {
    name: 'Card',
    props: {
      rating: Number,
      default: 0
    },
    mounted () {
      $('.star.rating')
        .rating({
          maxRating: 5
        })
    },
    methods: {
      cardClicked: function () {
        this.$emit('click')
      }
    }
  }
</script>
