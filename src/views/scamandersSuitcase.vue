<template>
    <div id="scamandersSuitcase">
        <introComponent :dept="dept"></introComponent>
        <div class="backArrow" @click="$router.push('/map')">
            <span>&lt;</span>
        </div>
        <div class="events">
            <div class="event" v-for="event in deptEvents" @click="eventsDetail = event" v-bind:key="event">
                <div>{{ event.eventName }}</div>
            </div>
        </div>
        <transition name="scale">
            <div class="eventDescription" v-if="eventsDetail">
                <div class="eventName">{{eventsDetail.eventName}}</div>
                <div class="tagline">{{ eventsDetail.tagline}}</div>
                <div class="entryFee">Entry Fee: {{ eventsDetail.entryFee}}</div>
                <div class="entryFee">Team Size: {{ eventsDetail.teamSize}}</div>
                <div class="rounds">
                    <div class="round" v-for="(round, index) in eventsDetail.rounds" v-bind:key="index">
                        <span class="roundIndice">Round {{ index + 1 }} : </span>
                        {{round}}
                    </div>
                </div>
                <div class="notes" v-if="eventsDetail.notes">
                    Notes: <pre>{{eventsDetail.notes}}</pre>
                </div>
                <div class="managers">
                    <div class="manager" v-for="manager in eventsDetail.managers" v-bind:key="manager">
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
    name: "scamandersSuitcase",
    components: {
      introComponent
    },
    data() {
      return {
        events,
        deptEvents: [],
        eventsDetail: null,
        dept: {
          name: 'Scamanader\'s Suitcase',
          imgName: 'Scamander_Suitcase_s.png'
        }
      }
    },
    created() {
      let self = this
      this.events.forEach(function (event) {
        if (event.department === "non-tech")
          self.deptEvents.push(event)
      })
    },
    mounted() {
      let tl = new this.$gsap.TimelineMax()
      tl.from('.logo img', 0.8, {
        scale: 0,
        rotation: 360
      })
      tl.from('.logo .heading', 0.5, {
        autoAlpha: 0,
        scaleY: 0
      }, "-=0.5")
      tl.to('#introComponent', 0.5, {
        autoAlpha: 0
      }, "+=0.5")
      tl.from('.events', 0.2, {
        autoAlpha: 0
      })
      tl.staggerFrom('.event', 1, {
        // position: 'absolute',
        y: 1000,
        cycle: {
          x: function() {
            return Math.random() * 1000 + 10
          }
        },
        // left: 50 + '%',
        autoAlpha: 0
      }, 0.1, "-=0.5")
    }
  }
</script>

<style scoped lang="sass">
    @import ../sass/scamandersSuitcase
</style>