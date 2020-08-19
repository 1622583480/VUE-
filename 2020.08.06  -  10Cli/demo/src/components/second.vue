<template>
  <div id="Second">
    <h1 class="one">{{msg}}</h1>
    <h2 v-for="(item,index) in text" :key="index">{{item}}</h2>

    <button @click="changHandle">传递参数</button>
  </div>
</template>

<script>
export default {
  name: "Second",
  props: ["msg","text"],
  data:function(){
      return{
          mAg:'我是传递的东西 AAAAAA',
      }
  },
  methods: {
    changHandle() {
      this.$emit("ontxt",this.mAg);
    },
  },
};
// this.$emit('ontxt',this.msg)  (父组件中绑定的自定义组件)
// 触发事件 参数1 事件名称 可以自定义
// 参数2 传递的数据 =====> 被父组件中被触发的事件处理函数形参接收
</script>

<style>
.one {
  font-weight: 900;
  font-family: cursive;
  font-size: 88px;
  color: #fff;
  text-align: center;
  background-color: #000;
}
</style>