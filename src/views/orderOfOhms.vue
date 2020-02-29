<template>
    <div id="orderOfOhms">
        <!--<div class="heading"><p>Order of Ohms</p></div>-->
        <div class="startPage">
            <div class="heading">Order Of Ohms</div>
            <div class="ohmsLogo"><img src="../assets/Order_of_OHMS.png" alt="" class="logo"></div>
        </div>
        <div class="backArrow" @click="$router.push('/events')">
            <span>&lt;</span>
        </div>
        <div class="circles">
            <div style="top: 5%; left: 35%"></div>
            <div style="top: 10%; left: 25%"></div>
            <div style="top: 2%; left: 20%"></div>
            <div style="top: 15%; left: 25%"></div>
            <div style="top: 8%; left: 35%"></div>
        </div>
        <div class="circles">
            <div style="bottom: 5%; right: 31%"></div>
            <div style="bottom: 2%; right: 34%"></div>
            <div style="bottom: 2%; right: 33%"></div>
            <div style="bottom: 6%; right: 30%"></div>
            <div style="bottom: 10%; right: 32%"></div>
        </div>
        <div class="circles">
            <div style="top: 2%; right: 35%"></div>
            <div style="top: 4%; right: 30%"></div>
            <div style="top: 20%; right: 25%"></div>
            <div style="top: 5%; right: 40%"></div>
            <div style="top: 1%; right: 35%"></div>
        </div>
        <div class="circles">
            <div style="top: 10%; left: 35%"></div>
            <div style="top: 9%; left: 40%"></div>
            <div style="top: 8%; left: 30%"></div>
            <div style="top: 5%; left: 45%"></div>
            <div style="top: 1%; left: 35%"></div>
        </div>
        <div class="circles">
            <div style="bottom: 10%; left: 35%"></div>
            <div style="bottom: 9%; left: 40%"></div>
            <div style="bottom: 8%; left: 30%"></div>
            <div style="bottom: 5%; left: 45%"></div>
            <div style="bottom: 1%; left: 35%"></div>
        </div>
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
                            {{round}}
                        </div>
                    </div>
                    <div class="entryFee">Entry Fee: {{ eventsDetail.entryFee }}</div>
                    <div class="entryFee">Team Size: {{ eventsDetail.teamSize }}</div>
                    <div class="notes" v-if="eventsDetail.notes">
                        Notes: <pre>{{eventsDetail.notes}}</pre>
                    </div>
                    <div class="managers">
                        <div class="manager" v-for="manager in eventsDetail.managers" v-bind:key="manager">
                            <div class="name">{{manager.name}}</div>
                            <div class="contact">{{manager.phone}}</div>
                        </div>
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

  export default {
    name: "orderOfOhms",
    data() {
      return {
        events,
        deptEvents: [],
        eventsDetail: null
      }
    },
    mounted() {

      let t3 = new this.$gsap.TimelineMax()
      t3.from('.logo', 1, {
        autoAlpha: 0,
        scale: 0,
        rotation: 360
      })

      t3.from('.heading', 1, {
        scale: 0,
        autoAlpha: 0
      }, "-=1")

      t3.to('.logo, .heading', 1, {
        autoAlpha: 0
      }, "+=0.5")

      t3.staggerFrom('.event', 0.8, {
        scale: 0
      }, 0.2, "-=0.4")

      let t2 = new this.$gsap.TimelineMax()

      t2.to('.events', 0.5, {
        autoAlpha: 1
      }, "+=2")

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
        if (event.department === "ee")
          self.deptEvents.push(event)
      })
    }
  }
</script>

<style scoped lang="sass">
    @import ../sass/orderOfOhms
</style>