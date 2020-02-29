<template>
    <div id="map">
        <div class="center-piece">
            <div class="departments">
                <div class="department" v-for="department in departments" @click="$router.push(department.url)" v-bind:key="department">
                    <img src="../assets/nametag.png" alt="" class="img-fluid">
                    <span class="deptName">{{ department.name }} </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "mapComponent",
    data() {
      return {
        folded: true,
        t2: null,
        t1: null,
        departments: [
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
            name: 'Goblet of Workshops',
            url: 'gobletOfWorkshops'
          },
          {
            name: "Scamander\\'s Suitcase",
            url: 'scamandersSuitcase'
          },
          {
            name: "M. A. D. Hollows",
            url: 'madHollows'
          },
          {
            name: "Order of Ohms",
            url: 'orderOfOhms'
          },
        ]
      }
    },
    methods: {
    },
    mounted() {

    }
  }
</script>

<style scoped lang="sass">
@import ../sass/mapComponent
</style>