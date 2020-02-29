<template>
    <div id="madHollows">
        <div class="backArrow" @click="$router.push('/map')">
            <span><</span>
        </div>
        <introComponent :dept="dept"></introComponent>
        <div class="events">
            <div class="event" v-for="event in deptEvents" @click="eventsDetail = event">
                <span>{{event.eventName}}</span>
            </div>
        </div>
        <transition name="swirl">
            <div class="eventDescription" v-if="eventsDetail">
                <div class="eventName">{{ eventsDetail.eventName }}</div>
                <div class="tagline">{{ eventsDetail.tagline }}</div>
                <div class="entryFee">Entry Fee: {{ eventsDetail.entryFee }}/ {{ eventsDetail.teamSize}}</div>
                <div class="rounds mx-auto">
                    <div class="round" v-for="(round, index) in eventsDetail.rounds"><span class="roundIndice">Round {{index + 1}} :</span> {{ round }}</div>
                </div>
                <div class="notes" v-if="eventsDetail.notes">
                    <div class="roundIndice">Notes:</div> <pre>{{eventsDetail.notes}}</pre>
                </div>
                <div class="managers">
                    <div class="manager" v-for="manager in eventsDetail.managers">
                        <div class="name">{{manager.name}}</div>
                        <div class="contact">{{manager.phone}}</div>
                    </div>
                </div>
                <div class="back" @click="eventsDetail = null">Back</div>
            </div>
        </transition>
    </div>
</template>

<script>
  import events from '../events'
  import introComponent from '../components/introComponent'

  export default {
    name: "madHollows",
    components: {
      introComponent
    },
    data() {
      return {
        events,
        deptEvents: [],
        eventsDetail: null,
        tl: null,
        dept: {
          name: "M. A. D. Hollows",
          imgName: "M.A.D._Hollows.png"
        }
      }
    },
    created() {
      let self = this
      this.events.forEach(function (event) {
        if (event.department === "cultural")
          self.deptEvents.push(event)
      })
    },
    mounted() {

      let tl1 = new this.$gsap.TimelineMax()
      tl1.from('.logo img', 1, {
        x: -500,
        autoAlpha: 0,
        rotation: 360
      })

      tl1.from('.logo .heading', 0.5, {
        autoAlpha: 0,
        scaleX: 0
      }, "-=0.3")

      tl1.to('#introComponent', 0.5, {
        autoAlpha: 0
      }, "+=1")

      tl1.staggerFrom('.event', 2, {
        scale: 0
      }, 0.2)
      let tl = new this.$gsap.TimelineMax({
        repeat: -1,
        yoyo: true
      })
      tl.staggerTo('.event', 2.5, {
        y: 10
      }, 0.6)
      tl.staggerTo('.event', 3, {
        y: -10
      }, 0.6)
    }

  }
</script>

<style scoped lang="sass">
    @import ../sass/madHollows
</style>