<template>
    <div id="menu">
        <div class="icon" @click="openMenu()">
            <div class="line" id="line1"></div>
            <div class="line" id="line2"></div>
        </div>
        <div class="tabs" v-if="isOpen">
            <div class="tab" v-for="navigation in navigations" v-bind:key="navigation" @click="navigate(navigation.url)">{{ navigation.name }}</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "menuComponent",
    data() {
      return {
        isOpen: false,
        navigations: [
          {
            name: 'Home',
            url: '/'
          },
          {
            name: "Builders Of Azkaban",
            url: 'boa'
          },
          {
            name: "Automotive Philosophers",
            url: 'automotivePhilosophers'
          },
          {
            name: "Chamber of Coders",
            url: 'chamberOfCoders'
          },
          {
            name: "Half Wave Prince",
            url: 'halfWavePrince'
          },
          {
            name: "Order of Ohms",
            url: 'orderOfOhms'
          },
          {
            name: 'Goblet Of Workshops',
            url: 'gobletOfWorkshops'
          },
          {
            name: "Scamander\\'s Suitcase",
            url: 'scamandersSuitcase'
          },
          {
            name: "M. A. D. Hollows",
            url: 'madHollows'
          }
        ],
        tl: null
      }
    },
    mounted() {
      this.tl = new this.$gsap.TimelineMax({
        paused: true
      })
      this.tl.to('#menu', 0.5, {
        x: 0,
        background: "#333333",
        boxShadow: "-4px 0 4px rgba(0,0,0,0.25)"
      })
      this.tl.to('#line1', 0.5, {
        rotation: -45,
        background: "orangered",
        y: 8
      }, "-=0.5")
      this.tl.to('#line2', 0.5, {
        rotation: 45,
        background: "orangered",
      }, "-=0.5")


    },
    methods: {
      openMenu() {
        if(this.isOpen)
          this.tl.reverse()
        else
          this.tl.play()

        this.isOpen = !this.isOpen
      },
      navigate(url) {
        this.$router.push(url)
        this.openMenu()
      }
    }
  }
</script>

<style scoped lang="sass">
@import ../sass/menu
</style>