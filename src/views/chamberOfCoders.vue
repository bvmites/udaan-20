<template>
    <div id="chamberOfCoders">
        <div class="backArrow" @click="$router.push('/events')">
            <span>&lt;</span>
        </div>
        <div class="logo">
            <img src="../assets/Chamber_of_coders.png" alt="" class="img-fluid">
            <div class="hat">
                <img src="../assets/hat.png" alt="" class="img-fluid">
            </div>
            <h1 class="heading">Chamber of Coders</h1>
        </div>
        <div class="events">
            <div class="event" v-for="event in deptEvents" @click="eventsDetail = event" v-bind:key="event">
                {{event.eventName}}
            </div>
        </div>
        <transition name="slit">
            <div class="eventDescription" v-if="eventsDetail">
                <div class="eventName">{{eventsDetail.eventName}}</div>
                <div class="tagline">{{eventsDetail.tagline}}</div>
                <div class="entryFee">Entry Fee: {{eventsDetail.entryFee}}</div>
                <div class="entryFee">Team Size: {{eventsDetail.teamSize}}</div>
                <div class="rounds mx-auto">
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
    name: "chamberOfCoders",
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
        if (event.department === "cpit")
          self.deptEvents.push(event)
      })
    },
    mounted() {
      let tl = new this.$gsap.TimelineMax()
      tl.from('.logo img', 0.5, {
        scale: 5,
        autoAlpha: 0
      })
      tl.from('.hat', 0.2, {
        y: -100
      })
      tl.to('.hat', 0.5, {
        rotation: -90
      })
      tl.to('.hat', 0.5, {
        x: -15 + '%'
      })
      tl.from('.heading', 0.5, {
        autoAlpha: 0,
        x: -15 + "%",
        scaleX: 0
        // width: 0
        // left: -15% + "%"
      }, "-=0.5")

      tl.to('.logo', 0.5, {
        autoAlpha: 0
      }, "+=0.5")

      tl.staggerFrom('.event', 1, {
        autoAlpha: 0,
        cycle: {
          x: function(i) {
            if(i%2 === 0)
              return -50
            else
              return 50
          }
        }
      }, 0.2)

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

      // let t2 = new this.$gsap.TimelineMax({
      //   repeat: -1,
      //   yoyo: true
      // })

      tl.staggerTo(".letter", 0.5, {
        scale: 1.2
      }, 0.1)

      tl.staggerTo(".letter", 0.5, {
        scale: 1
      }, 0.1, 0)
    }
  }
</script>

<style scoped lang="sass">
    @import ../sass/chamberOfCoders
</style>