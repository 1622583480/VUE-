<template>
    <div class="view">
      <div class="safe_view">
        <div class="top_content clearfix">
          <img src="@/assets/logo.png" class="logo" alt />
          <div class="right">
            <p class="log">
              <!-- <a href="#" @click="search(x)" v-for="x in $store.state.search_keywords" :key="x">{{x}}</a> -->
            </p>
          </div>
        </div>
        <div class="nav_view" ref="nav_view">
          <div :class="{nav_content:true,con:pos=='fixed'}" :style="{position:pos}">
            <nav class="safe_view">
              <router-link to="/home">首页</router-link>
              <template v-if="true">
                <router-link to="/home/login">登录</router-link>
                <router-link to="/home/register">注册</router-link>
              </template>
              <template v-else>
                <router-link to="/shopCar">购物车</router-link>
                <a href="#">退出登录</a>
              </template>
              <!-- <search v-show="pos=='fixed'" class="search"></search> -->
            </nav>
          </div>
        </div>
      </div>
      <!-- <div class="safe_view type" v-show="$store.state.type_flag">
        <router-link v-for="item in type_list" :to="'/list/'+item" :key="item">{{item}}</router-link>
      </div> -->
    </div>
  
</template>

<script>
export default {
    data(){
        return{
            pos:''
        }
    }
}
</script>

<style>
.nav_content {
  width: 100%;
  background: white;
  top: 0;
  left: 0;
  z-index: 10;
}
.con {
  box-shadow: 0 2px 6px #999;
}

.type {
  background: white;
  padding: 10px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
}
.right {
  width: 600px;
  float: right;
  margin-top: 20px;
}
.type a {
  display: block;
  padding: 0 40px;
  border-radius: 20px;
  transition: all 0.3s;
  color: #666;
}
.type a:hover {
  background: purple;
  color: #dedede;
}
.type .router-link-exact-active {
  background: purple;
  color: #dedede;
}
.nav_view {
  height: 57px;
}
.view {
  background: white;
  padding-top: 20px;
  box-shadow: 0 2px 6px #999;
  margin-bottom: 10px;
}
.logo {
  float: left;
  width: 188px;
}

.log a {
  margin: 0 2px;
  font-size: 14px;
  color: #666;
  line-height: 30px;
}
.log a:hover {
  color: purple;
  font-weight: bolder;
}
nav {
  padding: 15px 0;
  position: relative;
}
nav a {
  margin: 0 20px;
  font-weight: bolder;
  padding: 0 10px;
  padding-bottom: 4px;
  display: inline-block;
  border-bottom: 2px solid white;
  transition: all 0.3s;
}
nav .router-link-exact-active {
  color: purple;
  border-color: purple;
}
nav a:hover {
  color: purple;
  border-color: purple;
}
.search {
  position: absolute;
  top: 6px;
  right: 0;
}
</style>