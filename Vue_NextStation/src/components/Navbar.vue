<template lang='pug'>
    .ui.large.secondary.inverted.pointing.menu
        a.toc.item
            i.sidebar.icon
        a.active.item Home
        a.item Work
        a.item Company
        a.item Careers
        .right.item
            a.ui.inverted.button Log in
            a.ui.inverted.button Sign Up
</template>

<style scope>
  .ui.secondary.inverted.pointing.menu {
    border: none
  }
  .secondary.pointing.menu .toc.item {
    display: none;
  }
  .masthead .ui.menu {
    border: none
  }
  .masthead .ui.menu .ui.button {
    margin-left: 0.5em;
  }
  
</style>