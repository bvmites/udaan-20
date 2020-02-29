<template>
    <div id="buidersOfAzkaban">
        <div class="backArrow" @click="$router.push('/events')">
            <span>&lt;</span>
        </div>
        <div class="rain"></div>
        <introComponent :dept="dept"></introComponent>
        <!--<div class="heading">
            <p>Welcome to <br>Builders of Azkaban</p>
        </div>-->
        <div class="events">
            <div class="event" v-for="event in deptEvents" @click="eventsDetail = event" v-bind:key="event">{{ event.eventName }}</div>
        </div>

        <transition name="fade">
            <div class="eventDescription" v-if="eventsDetail">
                <div class="eventName">{{ eventsDetail.eventName }}</div>
                <div class="tagline">{{ eventsDetail.tagline }}</div>
                <div class="event-content">
                    <div class="rounds">
                        <div class="round" v-for="(round, index) in eventsDetail.rounds" v-bind:key="index">
                            <span class="roundIndice">Round {{index + 1}} : </span>
                            <pre>{{ round}}</pre>
                        </div>
                    </div>
                    <div class="entryFee">Entry Fee: {{ eventsDetail.entryFee }}</div>
                    <div class="entryFee">Team Size: {{ eventsDetail.teamSize}}</div>
                    <div class="managers">
                        <div class="manager" v-for="manager in eventsDetail.managers" v-bind:key="manager">
                            <div class="name">{{manager.name}}</div>
                            <div class="contact">{{manager.phone}}</div>
                        </div>
                    </div>
                    <div class="notes" v-if="eventsDetail.notes">
                        Notes: <pre>{{eventsDetail.notes}}</pre>
                    </div>
                </div>
                <div class="warning">
                    <div>Approach With Extreme Caution!</div>
                    <div>Do not attempt to use magic in this event</div>
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
    name: "buildersOfAzkaban",
    components: {
      introComponent
    },
    data() {
      return {
        events,
        deptEvents: [],
        eventsDetail: null,
        dept: {
          name: "Builders Of Azkaban",
          imgName: "Builder_of_Azkaban.png"
        }
      }
    },
    mounted() {

      let t2 = new this.$gsap.TimelineMax()

      t2.from('.logo img', 1, {
        scale: 0,
        autoAlpha: 0,
        rotation: 360
      })

      t2.from('.logo .heading', 0.5, {
        y: 100,
        autoAlpha: 0
      }, "-=0.5")
      t2.to('.events', 0.5, {
        autoAlpha: 1
      }, "+=2")

      t2.to('#introComponent', 0.5, {
        autoAlpha: 0
      }, "-=2")

      t2.staggerFrom('.event', 0.5, {
        autoAlpha: 0
      }, 0.2, "-=1")

      let tl = new this.$gsap.TimelineMax({
        repeat: -1,
        yoyo: true
      })

      Array.from(document.querySelector('.events').children, (event) => {
        let letters = event.innerHTML.split("")
        let blockLetters = []
        letters.forEach((letter) => {
          if (letter === " ")
            blockLetters.push("<div class=\"letter\"> &nbsp; </div>")
          else
            blockLetters.push("<div class=\"letter\">" + letter + "</div>")
        })
        event.innerHTML = blockLetters.join("")
      })

      let letters = document.querySelectorAll('.letter')
      letters.forEach(function (letter) {
        letter.style.display = "inline-block"
      })

      tl.staggerTo(".letter", 0.5, {
        scale: 1.2
      }, 0.1)

      tl.staggerTo(".letter", 0.5, {
        scale: 1
      }, 0.1, 0)




    },
    created() {
      let self = this
      this.events.forEach(function (event) {
        if (event.department === "civil")
          self.deptEvents.push(event)
      })
    }
  }
</script>

<style scoped lang="sass">
    @import ../sass/buildersOfAzkaban
</style>
