<template>
  <div id="app">
    <!-- <tab-switch></tab-switch>
    <list-item></list-item> -->
    <router-view></router-view>
  </div>
</template>
<script>
// import TabSwitch from "./components/TabSwitch/index.vue";
// import ListItem from "./components/TabSwitch/ListItem/index.vue";
// import index from './views'

export default {
  name: "App",
  components: {
    // TabSwitch,
    // ListItem,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex; 
}
html,
body {
  height: 100%;
  /* 容易有bug */
  /* pc端最好设置最小宽度 */
  /* 因为100%是由最大值的
  100% = 100vh = 等于视图窗口宽度  */
  width: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
</style>
