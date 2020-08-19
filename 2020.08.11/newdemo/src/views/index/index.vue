<template>
  <div id="Index"> 
    <router-view></router-view>
    <nav>
      <router-link tag="span" to="/index/home">首页</router-link>
      <router-link tag="span" to="/index/adress">联系人</router-link>
      <router-link tag="span" to="/index/find">发现</router-link>
      <router-link tag="span" to="/index/mine">个人中心</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name:"Index"
};
</script>

<style>
#Index nav{
  width: 100%;
  height: 55px;
  font-size: 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ccc;
  position: fixed;
  bottom: 0;
}
#Index .router-link-active{
  color: blue;
}
</style>