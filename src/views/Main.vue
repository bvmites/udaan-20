<template>
    <div id="main">
        <div id="landing">
            <div class="pin-scene">
                <div class="bg-image"></div>
                <div class="udaan-logo">
                    <img src="../assets/logo.png" alt="udaanLogo" class="img-fluid">
                </div>
            </div>
        </div>
        <button class="event" @click="$router.push('events')">Events</button>
        <button class="about" @click="$router.push('about')">About</button>
    </div>
</template>

<script>

  export default {
    name: "Main",
    mounted() {
    }
  }
</script>

<style scoped lang="sass">
  @import ../sass/main
  @font-face
    font-family: 'dumbledore'
    src: url("../assets/dum1.ttf")
</style>

<style scoped type="text/css">
    .event{
        position: fixed;
        bottom: 5%;
        left: 35%;
        color: black;
    }
    .about{
        position: fixed;
        bottom: 5%;
        left: 65%;
        color: black;
    }
    a:hover {
        cursor:pointer;
    }
</style>