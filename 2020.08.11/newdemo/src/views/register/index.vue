<template>
  <div id="Register">
    <h1>注册页面</h1>
    <form>
      <div>
        <label for>用户名</label>
        <input type="text" />
      </div>
      <div>
        <label for>手机号</label>
        <input type="text" />
      </div>
      <div>
        <label for>密码</label>
        <input type="password" />
      </div>
      <div>
        <button @click.prevent="setRegister">注册</button>
      </div>
    </form>
    <!-- <router-link to="/index/mine">个人中心</router-link> -->
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {};
  },
  methods: {
    setRegister() {
      this.$router.push('/');
      this.$store.dispatch('noiceToken','AAAAA')
    },
  },
};
</script>
<style>

</style>