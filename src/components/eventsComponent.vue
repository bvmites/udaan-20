<template>
    <div id="map">
        <div class="center-piece">
            <div class="departments">
                <ul class="department" v-for="department in departments" v-bind:key="department">
                    <li class="deptName"><a @click="$router.push(department.url)">{{ department.name }}</a> </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mapComponent",
        data() {
            return {
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
<style scoped lang="css">
    a:hover {
        cursor:pointer;
    }
</style>
