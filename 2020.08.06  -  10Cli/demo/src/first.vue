<template>
  <div id="first">
      <ul>
        <li v-for="(item,index) in list" :key='index'>{{item.name}}{{item.dec}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name:'First',
    data(){
      return{
        arr:[1,2,3,4,5,6,7,8,9,0]
      }
    },
  props:['list'],
  // props 是用于接收父组件传递过来的值 
    // 值为数组 数组元素为父组件里面的 
  created(){
    console.log(this.list,'--------------------');
    this.$emit('on_catc',this.arr)
  },
  
};
</script>

<style>
</style>