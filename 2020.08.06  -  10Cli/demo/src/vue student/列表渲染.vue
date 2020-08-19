<template>
  <div id="app">
    <div class="list_coffee" v-for="(item, index) in coffee" :key="index">
      <img class="coffee_img" :src="item.imgUrl" alt />
      <h3>{{item.title}}</h3>
      <div class="coffee_footer">
        <div class="coffee_money">￥{{item.money}}</div>
        <div v-html="item.Hot"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["coffee"],
};
</script>

<style>
.coffee_footer {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.list_coffee {
  padding: 10px;
  width: 220px;
  box-shadow: 0px 0px 14px -5px;
}
.coffee_img {
  width: 220px;
  height: 220px;
}
.coffee_money {
  font-weight: 900;
  font-size: 20px;
  color: red;
}
</style>