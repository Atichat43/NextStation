<template lang="pug">
  .pushable
    .pusher
      // Home (TOP)
      .ui.inverted.vertical.masthead.center.aligned.segment
        Home
      // Destination (CENTER)  
      .ui.vertical.stripe.segment
        Destination
      .ui.vertical.stripe.segemnt
        Ads
      // Footer components
      .ui.inverted.vertical.footer.segment
          .ui.container
            Footer    
    

</template>

<script>
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './nextStation/Home'
import Destination from './nextStation/Destination'
import Ads from './nextStation/Ads'
export default {
  name: 'HelloWorld',
  components: { Navbar, Footer, Home, Destination, Ads },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style>
  .hidden.menu {
    display: none;
  }
  .ui.vertical.stripe {
    padding: 3em 0em;
  }
  .ui.vertical.stripe h3 {
    font-size: 2em;
  }
  .ui.vertical.stripe .button + h3,
  .ui.vertical.stripe p + h3 {
    margin-top: 3em;
  }
  .ui.vertical.stripe .floated.image {
    clear: both;
  }
  .ui.vertical.stripe p {
    font-size: 1.33em;
  }
  .ui.vertical.stripe .horizontal.divider {
    margin: 3em 0em;
  }

  .quote.stripe.segment {
    padding: 0em;
  }
  .quote.stripe.segment .grid .column {
    padding-top: 5em;
    padding-bottom: 5em;
  }

  .footer.segment {
    padding: 5em 0em;
  }

  @media only screen and (max-width: 700px) {
    .ui.fixed.menu {
      display: none !important;
    }
    .secondary.pointing.menu .item,
    .secondary.pointing.menu .menu {
      display: none;
    }
    .secondary.pointing.menu .toc.item {
      display: block;
    }
    .masthead.segment {
      min-height: 350px;
    }
    .masthead h1.ui.header {
      font-size: 2em;
      margin-top: 1.5em;
    }
    .masthead h2 {
      margin-top: 0.5em;
      font-size: 1.5em;
    }
  }
</style>
