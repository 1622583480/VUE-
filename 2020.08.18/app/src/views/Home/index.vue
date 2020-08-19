<template>
  <div id="home">
    <home-header></home-header>
    <router-view></router-view>
  </div>
</template>

<script>
import HomeHeader from './home-header'
export default {
  name: "home",
  components: {
    HomeHeader,
  },
};
</script>

<style>
</style>