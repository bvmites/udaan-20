<template>
    <div id="introComponent">
        <div class="logo">
            <img :src="require('../assets/' + dept.imgName)" alt="" class="img-fluid">
            <h1 class="heading">{{ dept.name }}</h1>
        </div>
    </div>
</template>

<script>
  export default {
    name: "introComponent",
    props: [
      'dept'
    ]
  }
</script>

<style scoped lang="sass">
.logo
    position: absolute
    height: 50%
    width: 100%
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    text-align: center
    z-index: 2
    img
        height: 90%
    .heading
        margin-top: 20px
</style>