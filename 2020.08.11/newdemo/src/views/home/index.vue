<template>
  <div>
    <h1>首页</h1>
    <router-link to="/register">注册</router-link>
    <h1>{{userInfo.username}}</h1>
    <h1>{{userInfo.iphone}}</h1>
    <h1>{{$store.getters.getUserInfo.password}}</h1>
  </div>
</template>

<script>

export default {
  computed: {
    userInfo() {
      let res = this.$store.getters.getUserInfo;
      return res;
    },
  },
  created() {
  },
};
</script>

<style>
</style>