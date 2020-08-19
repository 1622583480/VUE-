<template>
  <div id="transfer">
    <div class="transfer_left">
      <!-- 全选 -->
      <div class="transfer_title">
        <input class="transfer_input_box" type="checkbox" v-model="flagLeft" @change="allLeft" />
        <span>列表 1</span>
      </div>

      <!-- 搜索框 -->
      <input
        class="transfer_input"
        type="text"
        placeholder="请输入城市拼音"
        @input="searchLeft"
        v-model="ipt"
      />
      <i class="fa fa-search transfer_search" aria-hidden="true"></i>

      <!-- 列表 -->
      <div class="transfer_section_box">
        <ul class="transfer_section">
          <li class="transfer_section_li" v-for="(item,index) in listCity" :key="item.id">
            <input
              class="transfer_input_box"
              type="checkbox"
              v-model="cityName"
              :value="item"
              @change="cityChange(item,index)"
            />
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="transfer_middle">
      <button class="transfer_but_l" @click="butL">
        <i class="fa fa-angle-left" aria-hidden="true"></i>
      </button>
      <button class="transfer_but_r" @click="butR">
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </button>
    </div>

    <div class="transfer_right">
      <div class="transfer_title">
        <input style="margin: 0 5px 0 20px;" type="checkbox" v-model="flagRight" @change="allRight" />
        <span>列表 2</span>
      </div>
      <input
        class="transfer_input"
        type="text"
        placeholder="请输入城市拼音"
        @input="searchRight"
        v-model="iptTwo"
      />
      <i class="fa fa-search transfer_search" aria-hidden="true"></i>

      <div class="transfer_section_box">
        <ul class="transfer_section">
          <li class="transfer_section_li" v-for="item in cityNameMiddle" :key="item.id">
            <input
              class="transfer_input_box"
              type="checkbox"
              v-model="cityNameTwo"
              :value="item"
              @change="cityChangeTwo"
            />
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
var obj1 = { name: "上海", id: 1, pinyin: "shanghai|sh" };
var obj2 = { name: "北京", id: 2, pinyin: "beijing|bj" };
var obj3 = { name: "广州", id: 3, pinyin: "guangzhou|gz" };
var obj4 = { name: "深圳", id: 4, pinyin: "shenzhen|sz" };
var obj5 = { name: "南京", id: 5, pinyin: "nanjing|nj" };
var obj6 = { name: "西安", id: 6, pinyin: "xian|xa" };
var obj7 = { name: "成都", id: 7, pinyin: "chengdu|cd" };

export default {
  data() {
    return {
      listCity: [obj1, obj2, obj3, obj4, obj5, obj6, obj7], // 左边框遍历的数据
      cityName: [], // 左边框勾选的数据
      cityNameMiddle: [], // 右边框中遍历的数据
      cityNameTwo: [], // 右边框勾选的数据
      // 设置两个全选按钮的状态
      flagLeft: false,
      flagRight: false,

      ipt: "", // 左边搜索框输入的数据
      iptTwo: "", // 右边搜索框输入的数据
      newListCity: [], // 给搜索到的城市提供存放位置
      newListCityMiddle: [obj1, obj2, obj3, obj4, obj5, obj6, obj7], // 用于左边搜索功能使用的数组
      // newcityNameMiddle:[],
      // 右边搜框索使用的数组
      newSearchArr: [],
    };
  },
  methods: {
    cityChange() {
      console.log(this.newListCityMiddle);
    },
    cityChangeTwo() {
      console.log(this.newListCityMiddle);
    },

    butR() {
      for (var i = 0; i < this.cityName.length; i++) {
        this.cityNameMiddle.push(this.cityName[i]);
      }

      // this.newcityNameMiddle = this.cityName;

      if (this.flagLeft == true) {
        this.listCity = [];
      }
      this.flagLeft = false;

      for (var p = 0; p < this.cityName.length; p++) {
        // 删除listCity数组中已经传到右边的项
        this.listClear(this.listCity, this.cityName, p);

        // 删除newListCityMiddle数组中传到右边的项
        this.listClear(this.newListCityMiddle, this.cityName, p);
      }

      this.cityName = [];
      // 排序
      this.listSort(this.cityNameMiddle);

      // 将右边遍历出来的数组赋值给右边的搜索框数组
      this.newSearchArr = this.cityNameMiddle;
    },
    butL() {
      // 将右边框勾选的数据添加到左边框
      for (var i = 0; i < this.cityNameTwo.length; i++) {
        this.listCity.push(this.cityNameTwo[i]);
        this.newListCityMiddle.push(this.cityNameTwo[i]);
      }

      if (this.flagRight == true) {
        this.cityNameMiddle = [];
        this.cityName = [];
      }
      this.flagRight = false;

      for (var c = 0; c < this.cityNameTwo.length; c++) {
        // 删除右边框中传入左边框的数据
        this.listClear(this.cityNameMiddle, this.cityNameTwo, c);

        // 删除右边框勾选数组中带有传入右边框的数据，防止左边框数据出现再次勾选状态
        this.listClear(this.cityName, this.cityNameTwo, c);

        // 新建的右边搜索数组进行删除传入左边的项
        this.listClear(this.newSearchArr, this.cityNameTwo, c);
        // this.listClear(this.newcityNameMiddle,this.cityNameTwo,c);
      }

      // 给两个数组去重
      this.listCity = this.clearNewArray(this.listCity);
      this.newListCityMiddle = this.clearNewArray(this.newListCityMiddle);
      // 排序处理
      this.listSort(this.listCity);
      this.listSort(this.newListCityMiddle);

      // 清空cityNameTwo数组，防止再次将数据添加到右边时复选框被勾选
      this.cityNameTwo = [];

      console.log(this.newSearchArr);
    },
    searchLeft() {
      // newListCityMiddle是处在一个更新的状态
      this.listCity = this.newListCityMiddle;

      this.newListCity = [];
      for (var i = 0; i < this.newListCityMiddle.length; i++) {
        var namPinyin = this.newListCityMiddle[i].pinyin.split("|");
        // 判断城市拼音的正则表达式
        var reg = new RegExp("^" + this.ipt, "i");
        for (var k = 0; k < namPinyin.length; k++) {
          if (reg.test(namPinyin[k])) {
            this.newListCity.push(this.newListCityMiddle[i]);
            break;
          }
        }
      }

      // console.log(this.newListCity);
      if (this.ipt != "") {
        this.listCity = this.newListCity;
      } else {
        console.log("qqqqqqqqqqqqqqqqqqqqqq");
        this.listCity = this.newListCityMiddle;
      }
    },
    searchRight() {
      this.newListCity = [];
      for (var i = 0; i < this.newSearchArr.length; i++) {
        var namPinyin = this.newSearchArr[i].pinyin.split("|");

        var reg = new RegExp("^" + this.iptTwo, "i");
        for (var k = 0; k < namPinyin.length; k++) {
          if (reg.test(namPinyin[k])) {
            this.newListCity.push(this.newSearchArr[i]);
            break;
          }
        }
      }
      if (this.iptTwo != "") {
        this.cityNameMiddle = this.newListCity;
      } else {
        // console.log('qqqqqqqqqqqqqqqqqqqqqq');
        this.cityNameMiddle = this.newSearchArr;
      }
    },
    allLeft() {
      if (this.flagLeft == true) {
        this.cityName = this.listCity;
      } else {
        this.cityName = [];
      }
    },
    allRight() {
      if (this.flagRight == true) {
        this.cityNameTwo = this.cityNameMiddle;
      } else {
        this.cityNameTwo = [];
      }
    },

    // 数组根据id排序方法封装
    listSort(arr) {
      arr.sort(function (x, y) {
        return x.id - y.id;
      });
    },
    // 两个数组相同对象去重,并删除大数组里相同的一项
    listClear(bigCity, smollCity, i) {
      if (bigCity.indexOf(smollCity[i]) != -1) {
        var flag2 = bigCity.indexOf(smollCity[i]);
        bigCity.splice(flag2, 1);
      }
    },
    // 数组去重
    clearNewArray(arr) {
      var arr1 = [];
      for (var i = 0; i < arr.length; i++) {
        if (arr1.indexOf(arr[i]) == -1) {
          arr1.push(arr[i]);
        }
      }
      return arr1;
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
ul {
  list-style: none;
}
#transfer {
  width: 650px;
  height: 350px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.transfer_middle {
  width: 150px;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.transfer_left,
.transfer_right {
  width: 200px;
  height: 90%;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid rgb(220, 207, 204);
  position: relative;
  /* background-color: aqua; */
}
.transfer_title {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgb(220, 207, 204);
  background-color: rgb(245, 247, 250);
}
.transfer_input {
  display: block;
  width: 90%;
  height: 30px;
  border-radius: 32px;
  border: 1px solid rgb(220, 207, 204);
  margin: 15px auto 20px;
  padding-left: 30px;
  font-size: 12px;
  /* color: rgb(220, 207, 204); */
  outline: none;
}
.transfer_search {
  position: absolute;
  color: #ccc;
  font-size: 14px;
  top: 63px;
  left: 24px;
}
.transfer_but_l,
.transfer_but_r {
  width: 60px;
  height: 40px;
  border-radius: 5px;
  font-size: 20px;
  color: #fff;
  background-color: rgb(160, 207, 255);
  border: none;
  outline: none;
}
.transfer_input_box {
  margin: 0 5px 0 20px;
}
.transfer_section_box {
  width: 100%;
  height: 207px;
  overflow: auto;
}
.transfer_section_li {
  margin: 15px 0;
}

</style>