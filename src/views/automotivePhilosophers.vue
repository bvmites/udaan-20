<template>
    <div id="automotivePhilosophers">
        <div class="backArrow" @click="$router.push('/events')">
            <span>&lt;</span>
        </div>
        <img src="../assets/station.png" alt="" class="bgImage">
        <div class="events">
            <div class="event" v-for="event in deptEvents" @click="eventsDetail = event" v-bind:key="event">
                <span>{{event.eventName}}</span>
            </div>
        </div>
        <transition name="move">
            <div class="eventDescription" v-if="eventsDetail">
                <div class="eventName">{{eventsDetail.eventName}}</div>
                <div class="tagline">{{eventsDetail.tagline}}</div>
                <div class="entryFee">Entry Fee: {{eventsDetail.entryFee}}</div>
                <div class="teamSize">Team size: {{eventsDetail.teamSize}}</div>
                <div class="rounds">
                    <div class="round" v-for="(round, index) in eventsDetail.rounds" v-bind:key="index">
                        <span class="roundIndice">Round {{index + 1}} : </span>
                        <pre>{{round}}</pre>
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

  export default {
    name: "automotivePhilosophers",
    data() {
      return {
        events,
        deptEvents: [],
        eventsDetail: null
      }
    },
    created() {
      let self = this
      this.events.forEach(function (event) {
        if (event.department === "mechProd")
          self.deptEvents.push(event)
      })
    },
    mounted() {
      let tl = new this.$gsap.TimelineMax()
      tl.from('.bgImage', 0.5, {
        scale: 1.5
      })
      tl.staggerFrom('.event', 0.5, {
        y: 1000
      }, 0.1)
    }
  }
</script>

<style scoped lang="sass">
    @import "../sass/automotivePhilosophers"
</style>