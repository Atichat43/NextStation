<template lang='pug'>
  .ui.middle.aligned.stackable.grid.container
    // Step
    .ui.small.three.steps(ref="stepBar")
      .step(v-for="(step, index) in steps", :class="getStepClass(index+1)", @click="setStep(index+1)")
        .content
          .title {{ step }}
    // Button
    .ui.grid(v-show="getMode !== -1")
      .row
          .ui.button(@click="setMode(1)", :class="getMode === 1? 'active':''") BTS Dark Green
          .ui.button(@click="setMode(2)", :class="getMode === 2? 'active':''") BTS Light Green
          .ui.button(@click="setMode(3)", :class="getMode === 3? 'active':''") MRT Blue
          .ui.button(@click="setMode(4)", :class="getMode === 4? 'active':''") MRT Purple
          .ui.button(@click="setMode(5)", :class="getMode === 5? 'active':''") Airport Link
          label From To {{ getDest }}
    // Map
    .ui.contrainer.mapContrainer#BTSDARKGREEN(v-show="getMode === 1")
      .ui.grid
        .row
          .ui.circular.huge.icon.button(
            v-for="(b, index) in btsDarkGreenButton", 
            @mouseover="statusText = 'b.text'",
            @mouseout="statusText = 'index'", 
            @click="setValue(b.value)")
        .row
          .ui.circular.huge.icon.button(v-for="index in 2")
    .ui.contrainer.mapContrainer#BTSLIGHTGREEN(v-show="getMode === 2")
    .ui.contrainer.mapContrainer#MRTBLUE(v-show="getMode === 3")
    .ui.contrainer.mapContrainer#MRTPURPLE(v-show="getMode === 4")
    .ui.contrainer.mapContrainer#AIRPORTLINK(v-show="getMode === 5")
    .ui.contrainer#RESULT(v-show="getMode === -1")
      h1 RESULT
      label From {{ destination.from_val }}
      label To {{ destination.to_val }}
      .ui.fluid.green.button(@click="tryAgain") TRY AGRAIN
    // Status
    .ui.black.fluid.label.status(v-show="getMode !== -1") {{ statusText }}
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
        statusText: 'eiei',
        btsDarkGreenButton: [
          {text: 'สยาม', value: 'siam'},
          {text: 'พระราม', value: 'pharam'},
          {text: 'ตีกรุง', value: 'kong'}
        ]
      }
    },
    computed: {
      getDest: function () {
        return this.destination
      },
      getMode: function () {
        return this.mode
      },
      getStep: function () {
        return this.current_step
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
      setStep (index) {
        this.current_step = index
        this.mode = 1
      },
      setMode (index) {
        this.mode = index
      },
      setValue (value) {
        if (this.current_step === 1) {
          this.destination.from_val = value
        } else if (this.current_step === 2) {
          this.destination.to_val = value
          this.mode = -1
        } else {
          alert('out of range')
        }
        this.current_step += 1
      },
      tryAgain () {
        this.current_step = 1
        this.mode = 1
        this.destination = { from_val: '', to_val: '' }
      }
    }
  }
</script>