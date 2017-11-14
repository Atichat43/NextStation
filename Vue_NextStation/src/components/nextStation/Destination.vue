<template lang='pug'>
  .ui.middle.aligned.stackable.grid.container
    // Step
    .ui.small.three.steps(ref="stepBar")
      .step(v-for="(step, index) in steps", :class="getStepClass(index+1)", @click="backStep(index+1)")
        .content
          .title {{ step }}
    // Button
    .ui.grid
      .row
          .ui.button(@click="setMode(1)") BTS Dark Green
          .ui.button(@click="setMode(2)") BTS Light Green
          .ui.button(@click="setMode(3)") MRT Blue
          .ui.button(@click="setMode(4)") MRT Purple
          .ui.button(@click="setMode(5)") Airport Link
          label From To {{ getDest }}
    // Map
    .ui.contrainer.mapContrainer#BTSDARKGREEN(v-show="mode === 1")
      .ui.grid
        .row
          .ui.circular.huge.icon.button(v-for="index in 7", @mouseover="statusText = 'ffaafafaf'", @mouseout="statusText = 'index'", @click="updateVal('ffaafafaf')")
        .row
          .ui.circular.huge.icon.button(v-for="index in 2")
    .ui.contrainer.mapContrainer#BTSLIGHTGREEN(v-show="mode === 2")
    .ui.contrainer.mapContrainer#MRTBLUE(v-show="mode === 3")
    .ui.contrainer.mapContrainer#MRTPURPLE(v-show="mode === 4")
    .ui.contrainer.mapContrainer#AIRPORTLINK(v-show="mode === 5")
    // Status
    .ui.black.fluid.label.status {{ statusText }}
    //
      .ten.wide.column
        DestMap(v-model="destination", @selected="updateDestination")
      .six.wide.right.floated.column
        .ui.container
          DestForm(ref="destForm", v-model="destination")
          .ui.form
            .field
              .ui.green.fluid.button(@click="resetDestination") RESET
          .ui.divider
          .ui.container
            h1 RESULTS
            label boss
</template>

<style scope>
  .mapContrainer {
    height: 550px;
    width: 100%;
  }
  #BTSDARKGREEN {
    background-image: url("https://static.pexels.com/photos/17679/pexels-photo.jpg")
  }
  #BTSLIGHTGREEN {
    background-color: lightgreen;
  }
  #MRTBLUE {
    background-color: blue;
  }
  #MRTPURPLE {
    background-color: purple;
  }
  #AIRPORTLINK {
    background-color: red;
  }
  .steps {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
</style>


<script>
  import DestForm from './destination/DestForm.vue'
  import DestMap from './destination/DestMap.vue'
  export default {
    name: 'Destination',
    components: { DestForm, DestMap },
    data () {
      return {
        destination: { from_val: '', to_val: '' },
        steps: ['From', 'To', 'Result'],
        current_step: 1,
        mode: 1,
        statusText: 'eiei'
      }
    },
    computed: {
      getDest: function () {
        return this.destination
      }
    },
    methods: {
      /*
      resetDestination () {
        this.destination.from_val = ''
        this.destination.to_val = ''
        this.$refs.destForm.clearForm()
      },
      updateDestination: function () {
        this.$refs.destForm.setSelected(this.destination.from_val, this.destination.to_val)
      },
      */
      getStepClass (index) {
        if (index === this.current_step) {
          return { active: true }
        } else if (index < this.current_step) {
          return { completed: true, link: true }
        } else {
          return { disabled: true }
        }
      },
      setMode (index) {
        this.mode = index
      },
      updateVal (value) {
        this.destination.from_val = value
      }
    }
  }
</script>