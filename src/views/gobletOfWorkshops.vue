<template>
    <div id="gobletOfEntertainment">
        <div class="backArrow" @click="$router.push('/events')">
            <span>&lt;</span>
        </div>
        <div class="goblet">
             <div class="flame">
                <span v-for="n in 100" v-bind:key="n" :style="{'--n':n, '--rnd': Math.random()}"></span>
            </div>
            <img src="../assets/goblet.png" alt="goblet" class="img-fluid">
        </div>
        <div class="events">
            <div class="event" v-for="event in deptEvents" @click="eventsDetail = event" v-bind:key="event">{{ event.eventName }}</div>
        </div>

        <div class="eventDescription" v-if="eventsDetail">
            <div class="eventName">{{eventsDetail.eventName}}</div>
            <div class="tagline">{{eventsDetail.tagline}}</div>
            <div class="entryFee">Entry Fee: {{eventsDetail.entryFee}}</div>
            <div class="teamSize">Team size: {{eventsDetail.teamSize}}</div>
            <div class="rounds">
                <div class="round" v-for="(round, index) in eventsDetail.rounds" v-bind:key="index">
                    Description : <pre>{{round}}</pre>
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
    </div>
</template>

<script>
    import deptEvents from '../workshop'

  export default {
    name: "gobletOfEntertainment",
    data() {
        return {
          deptEvents,
          eventsDetail: null
        }
    },
    mounted() {
      let t1 = new this.$gsap.TimelineMax()
      t1.staggerFrom('.event', 2, {
        // y: -1000,
        autoAlpha: 0,
        scale: 0
      }, 0.1)
      t1.staggerTo('.event', 1, {
        cycle: {
          rotation: function() {
            return Math.random() * 45 - 20
          }
        },
        autoAlpha: 1
      }, 0.1, "-=1.2")
    }
  }
</script>

<style scoped lang="sass">
@import "../sass/gobletOfWorkshops"

</style>