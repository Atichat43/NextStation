<template lang="pug">
  .card(@click="cardClicked")
    .image
      img(src='http://energy106.ca/wp-content/uploads/2016/11/Facebook-Share-Image.jpg')
    .content
      .header {{item.name}}
      .meta
        a {{ item.location }}
      // .description
        | reviews
    .extra.content
      | Rating:
      .ui.star.rating(:data-rating='item.rating') aa
</template>


<style scoped>
  .ui.star.rating {
    padding-left: .75em;
  }
  .ui.cards>.card { 
    width: 240px;
  }
</style>


<script>
  export default {
    name: 'Card',
    props: {
      item: Object,
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
