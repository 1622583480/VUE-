<template>
  <div id="app">
    <table>
      <thead>
        <tr>
          <th>
            <input v-model="all_flag" @change="select_all" type="checkbox" />全选
          </th>
          <th>商品名称</th>
          <th>单价</th>
          <th>数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr :class="{textcolor:item.shopCatFlag}" v-for="(item, index) in shopCatList" :key="index">
          <td>
            <input v-model="item.shopCatFlag" @change="Current_price(index,item)" type="checkbox" />
          </td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>
            <button @click="addCount(item,index)">+</button>
            {{item.count}}
            <button @click="reduceCount(item,index)">-</button>
          </td>
          <td>
            <button @click="deletShopCatList(item,index)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <h1 v-if="shopCatList==null?true:false">您的购物车暂时没有商品</h1>
    <h4 style="text-align: end;">总计价格:{{money}}</h4>
    <button>结算</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopCatList: [],
      money: 0,
      all_flag: false,
    };
  },
  props: ["shopcatlist"],
  created() {
    // let shopCatLstStorage = localStorage.getItem("shopCatList");
    // this.shopCatList = JSON.parse(shopCatLstStorage);
    this.shopCatList = this.shopcatlist;
    // console.log(shopCatLstStorage);
    for (let i = 0; i < this.shopCatList.length; i++) {
      this.shopCatList[i].shopCatFlag = false;
    }
    this.money = 0;
  },
  methods: {
    deletShopCatList(item, index) {
      this.shopCatList.splice(index, 1);
      if (item.shopCatFlag) {
        this.money -= item.count * item.price;
      }
      localStorage.setItem("shopCatList", JSON.stringify(this.shopCatList));
    },
    addCount(item) {
      item.count++;
      if (item.shopCatFlag) {
        this.money += parseInt(item.price);
      }
    },
    reduceCount(item) {
      if (!(item.count <= 1)) {
        item.count--;
        if (item.shopCatFlag) {
          this.money -= parseInt(item.price);
        }
      }
    },
    Current_price(index, item) {
      if (item.shopCatFlag) {
        this.money += item.price * item.count;
      } else {
        this.money -= item.price * item.count;
      }
      for (let i = 0; i < this.shopCatList.length; i++) {
        if (!this.shopCatList[i].shopCatFlag) {
          this.all_flag = false;
          break;
        } else {
          this.all_flag = true;
        }
      }
    },
    select_all() {
      for (let i = 0; i < this.shopCatList.length; i++) {
        this.shopCatList[i].shopCatFlag = this.all_flag;
        // all_flag和全选双向绑定
        // 全选选中遍历结构都变成true || false
      }

      if (this.all_flag) {
        for (let j = 0; j < this.shopCatList.length; j++) {
          this.money += this.shopCatList[j].price * this.shopCatList[j].count;
        }
      } else {
        this.money = 0;
      }
    },
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
  border: 1px solid #ccc;
}

tr {
  min-height: 55px;
  height: 55px;
}

button {
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

.textcolor {
  color: red;
}
</style>