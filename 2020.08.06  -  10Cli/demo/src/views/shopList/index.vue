<template>
  <div id="app">
    <table>
      <thead>
        <tr class="title">
          <td>序号</td>
          <td>名称</td>
          <td>价格</td>
          <td>操作</td>
        </tr>
      </thead>
      <tr v-for="(item,index) in shopList" :key="index">
        <td>{{index}}</td>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td>
          <button @click="addShopCatList(item)">加入购物车</button>
        </td>
      </tr>
    </table>
    <shopping-cart-display :shopcatlist="shopCatList"></shopping-cart-display>
  </div>
</template>

<script>
import ShoppingCartDisplay from "../shopCat";

export default {
  props:["shoplist"],
  data() {
    return {
      shopList: [],
      shopCatList: [],
      catListFlag: false,
    };
  },
  components: {
    ShoppingCartDisplay,
  },
  methods: {
    addShopCatList(item) {
      console.log(this.shopCatList);
      for (let i = 0; i < this.shopCatList.length; i++) {
        if (this.shopCatList[i].name == item.name) {
          this.catListFlag = true;
          this.shopCatList[i].count++;
          break;
        } else {
          this.catListFlag = false;
        }
      }
      if (!this.catListFlag) {
        this.shopCatList.push({
          ...item,
          count: 1,
          shopCatID: new Date().getTime() + "shopCarId",
          shopCatFlag: false,
        });
      }

      localStorage.setItem("shopCatList", JSON.stringify(this.shopCatList));
      this.num++
    },
  },
  created() {
    // let shopListStorage = localStorage.getItem("shopList");
    // shopListStorage = JSON.parse(shopListStorage);
    // this.shopList = shopListStorage;
    this.shopList = this.shoplist

    let shopCatListStorage = localStorage.getItem("shopCatList");
    if (shopCatListStorage == null) {
      localStorage.setItem("shopCatList", JSON.stringify(this.shopCatList));
    } else {
      this.shopCatList = JSON.parse(shopCatListStorage);
    }

  },
};
</script>

<style>
table {
  border: 1px solid #ccc;
  border-collapse: collapse;
}

td {
  min-width: 150px;
  text-align: center;
  /* width: 152.8px; */
  border: 1px solid #ccc;
}

tr {
  min-height: 55px;
  height: 55px;
}

td > button {
  outline: none;
  appearance: none;
  border: none;
  background-color: #2d61dc;
  color: #fff;
  border-radius: 5px;
  line-height: 3px;
  text-align: center;
  padding: 13px 10px;
}
</style>