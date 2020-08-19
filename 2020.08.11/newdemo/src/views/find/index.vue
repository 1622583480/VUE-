<template>
  <div>
    <h1>发现</h1>
    <button @click="addcount">+</button>
    <span>{{$store.getters.getCount}}</span>
    <button @click="Reducecount">-</button>
  </div>
</template>

<script>
import { Personal, Disciplinary } from "../../api/find.js";
export default {
  methods: {
    addcount() {
      this.$store.dispatch("noiceAddCount", { num: 1 });
    },
    Reducecount() {
      this.$store.dispatch("noiceReduceCount", { num: 1 });
    },
  },
  created() {
    Personal({
      loginname: "16040607",
    }).then((res) => {
      console.log(res);
    });
    Disciplinary().then((res) => {
      console.log(res);
    });
  },
};
</script>

<style>
</style>