<template>
  <div>
    <h1>我的</h1>
    <div v-if="token">登录成功</div>
    <div v-else>
      您还没登录
      {{token}}
    </div>
    <button @click="signout">退出登录</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(['login',"noiceToken"]),
    signout() {
      this.$store.dispatch("noiceToken", "");
      this.noiceLoading_Show = true;
      setTimeout(() => {
      this.noiceLoading_Show = false;
        
      }, 3000);

    },
  },
  computed: {
    ...mapGetters({
      token:"getToken"
    }),
  },
};
</script>

<style>
</style>