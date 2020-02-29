import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main'
import builderOfAzkaban from './views/buildersOfAzkaban'
import halfWavePrince from './views/halfWavePrince'
import madHollows from './views/madHollows'
import automotivePhilosophers from './views/automotivePhilosophers'
import scamandersSuitcase from './views/scamandersSuitcase'
import gobletOfWorkshops from './views/gobletOfWorkshops'
import orderOfOhms from "./views/orderOfOhms"
import chamberOfCoders from './views/chamberOfCoders'
import team from './views/team'
import mapComponent from './components/mapComponent'
import eventsComponent from "@/components/eventsComponent";
import aboutComponent from "@/components/aboutComponent";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/events',
      name: 'event',
      component: eventsComponent
    },
    {
      path: '/about',
      name: 'about',
      component: aboutComponent
    },
    {
      path: '/boa',
      name: 'bulidersOfAzkaban',
      component: builderOfAzkaban
    },
    {
      path: '/halfWavePrince',
      name: 'halfWavePrince',
      component: halfWavePrince
    },
    {
      path: '/gobletOfWorkshops',
      name: 'gobletOfWorkshops',
      component: gobletOfWorkshops
    },
    {
      path: '/madHollows',
      name: 'madHollows',
      component: madHollows
    },
    {
      path: '/automotivePhilosophers',
      name: 'automotivePhilosophers',
      component: automotivePhilosophers
    },
    {
      path: '/scamandersSuitcase',
      name: 'scamandersSuitcase',
      component: scamandersSuitcase
    },
    {
      path: '/orderOfOhms',
      name: 'orderOfOhms',
      component: orderOfOhms
    },
    {
      path: '/chamberOfCoders',
      name: 'chamberOfCoders',
      component: chamberOfCoders
    },
    {
      path: '/team',
      name: 'team',
      component: team
    },
    {
      path: '/map',
      name: 'map',
      component: mapComponent
    }
  ]
})
