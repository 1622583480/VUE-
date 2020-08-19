<template>
  <h1 @click="changeTitle">{{title}}</h1>


</template>

<script>
export default {
  props: ["title"],  //这里的title == Hello World
  methods: {
    changeTitle() {
      // this.title= '新的内容'

      this.$emit("updata:新的内容");
    },
  },
};
</script>



<style>
</style>