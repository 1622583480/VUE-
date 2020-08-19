<template>
  <div id="app">
    <div class="box pre" @click="left">&lt;</div>

    <li
      :class="{box:true,choose:index==num}"
      :key="index"
      v-for="(item,index) in list_one"
      v-html="item"
      v-show="num<=3"
      @click=" chooseNum(item,index)"
    ></li>

    <li class="box" v-show="num>=4" @click="one">1</li>

    <li
      class="box"
      v-show="num>=4"
      v-html="leftTips"
      @mouseenter="leftTip"
      @mouseleave="leftTip_leave"
      @click="leftJump"
    ></li>
    <li
      :key="index"
      :class="{box:true,choose:index==num_one}"
      v-for="(item,index) in list"
      v-html="item"
      v-show="num>=4&&num<96"
      @click="chooseNum_one(item,index)"
    ></li>

    <li
      :key="index"
      :class="{box:true,choose: index==num_two}"
      v-for="(item,index) in list_two"
      v-show="num>=96"
      v-html="item"
      @click="chooseOne(item,index)"
    ></li>
    <li
      class="box"
      v-html="rightTips"
      
      v-show="num<96"
      @mouseenter="rightTip"
      @click="rightJump"
      @mouseleave="rightTip_leave"
    ></li>
    <li :class="{box:true,choose:num_two==5}">100</li>

    <div class="box next" @click="right">&gt;</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rightTips: "...",
      leftTips: "...",
      list_one: [1, 2, 3, 4, 5],
      list: [3, 4, 5, 6, 7],
      list_two: [95, 96, 97, 98, 99],
      num: 0,
      num_one: 2,
      num_two: 2,
    };
  },
  methods: {
    one() {
      this.num = 0;
    },
    chooseOne(item, index) {
      this.num = item - 1;
      console.log(this.num);
      this.num_two = index;
      // console.log(this.num);
      // console.log( this.num_two);
    },

    chooseNum(item, index) {
      this.num = this.num + index - 2;
      this.num = index;
    },

    chooseNum_one(item, index) {
      this.num = this.num + index - 2;
      console.log(this.num);
      // console.log('sss');
      this.list = this.list.map((item) => {
        return item + index - 2;
      });
    },

    right() {
      if (this.num > 98) {
        this.num = 98;
      }
      this.num = this.num + 1;
      // console.log(this.num);
      if (this.num > 4) {
        this.list = this.list.map((item) => {
          return item + 1;
        });
      }

      if (this.num > 96) {
        this.num_two = this.num_two + 1;
      }
      if (this.num > 96) {
        this.num_one = this.num_one + 1;
      }
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i] > i + 96) {
          this.list[i] = i + 96;
        }
      }
      if (this.num_two > 5) {
        this.num_two = 5;
      }
      if (this.num_one > 5) {
        this.num_one = 5;
      }
      if (this.num_one < 2) {
        this.num_one = 2;
      }
      // console.log(this.num_one);
      console.log(this.num);
    },
    left() {
      this.num = this.num - 1;
      // console.log(this.num);
      if (this.num < 0) {
        this.num = 0;
      }
      //防止左键按多了  再按右会出现负值
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i] < i + 3) {
          this.list[i] = i + 3;
        }
      }
      this.list = this.list.map((item) => {
        return item - 1;
      });

      if (this.num >= 95) {
        this.num_two = this.num_two - 1;
      }
      if (this.num_two < 2) {
        this.num_two = 2;
      }

      if (this.num >= 94) {
        this.num_one = this.num_one - 1;
      }

      if (this.num_one < 2) {
        this.num_one = 2;
      }
      console.log(this.num_one);
    },

    rightJump() {
      this.list = this.list.map((item) => {
        return item + 5;
      });
      this.num = this.num + 5;
      console.log(this.num);
    },
    leftJump() {
      this.list = this.list.map((item) => {
        return item - 5;
      });
      this.num = this.num - 5;
      console.log(this.num);
    },
    rightTip() {
      this.rightTips = ">>";
    },
    leftTip() {
      this.leftTips = "<<";
    },
    rightTip_leave() {
      this.rightTips = "...";
    },
    leftTip_leave() {
      this.leftTips = "...";
    },
  },
};
</script >

<style  scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}

#app {
  width: 1200px;
  height: 80px;
  margin: 0 auto;
  background-color: cyan;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
}

.box {
  width: 80px;
  height: 80px;
  background-color: burlywood;
  border-radius: 10px;
  text-align: center;
  line-height: 80px;
  font-size: 40px;
}

.pre {
  position: relative;
  text-align: center;
  line-height: 80px;
  font-size: 40px;
}

.next {
  position: relative;
  text-align: center;
  line-height: 80px;
  font-size: 40px;
}

.choose {
  /* width: 80px;
            height: 80px; */
  background-color: black;
  /* border-radius: 10px;
            text-align: center;
            line-height: 80px;
            font-size: 40px; */
  color: white;
}
</style>