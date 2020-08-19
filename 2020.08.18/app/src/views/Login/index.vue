<template>
  <div id="login">

  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
    
    };
  },
  methods: {
    
  },
  created() {
    this.showLoading('我是方法')
    this.$loading(true, { cccc: "aaa", cndksmxm: "jkllhkkl" });
    setTimeout(()=>{
    this.$loading(false, { aaaaa:'asdasdasdasdasd' });

    },3000)
  },
};
</script>

<style>
</style>