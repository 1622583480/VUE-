<template>
  <div id="Tabswitch">

    <ul>
    <router-link class="a" v-for="(item, index) in 5" :key="index" 
    :to="{name:'ListItem',params:{UserName:`特殊用户${index}`,ID:`${index}`}}">用户信息{{index}}</router-link>
    </ul>

  </div>
</template>

<script>
export default {

};
</script>

<style>

.a {
    display: block;
    padding: 10px 0px;
  width: 120px;
  height: 70px;
  text-align: center;
  line-height: 50px;
  color: #000;
  font-size: 22px;
  transition: all 0.35s;
  background-color: #666;
}
ul {
  background-color: #ccc;
}
.a:hover {
  background-color: #ff6700;
  color: #fff;
}
</style>