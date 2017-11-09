<template lang='pug'>
  .ui.container
    Navbar
    .ui.text.container
        h1.ui.inverted.header
          | NEXT STATION
        h2 
          | comment somethings si mr.krai
        .ui.huge.primary.button
          | Get Started 
          i.right.arrow.icon
</template>

<script>
import Navbar from '../Navbar.vue'
export default {
  name: 'Home',
  components: { Navbar },
  data () {
    return {}
  }
}
</script>

<style scope>
  .masthead .ui.menu .ui.button {
    margin-left: 0.5em;
  }
  .masthead h1.ui.header {
    margin-top: 3em;
    margin-bottom: 0em;
    font-size: 4em;
    font-weight: normal;
  }
  .masthead h2 {
    font-size: 1.7em;
    font-weight: normal;
  }
  .masthead.segment {
      background-image: url('../../assets/images/home/home_wallpaper.jpg') !important;
      min-height: 700px;
      padding: 1em 0em;
  }
</style>