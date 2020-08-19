<template>
  <div id="app">
    <div class="box">
      <div class="success" :class="{smallBox:smallBox}" @click="success">
        <span class="content">成功</span>
      </div>
      <div class="warning" :class="{smallBox:smallBox}" @click="warning">
        <span class="content">警告</span>
      </div>
      <div class="news" :class="{smallBox:smallBox}" @click="news">
        <span class="content">消息</span>
      </div>
      <div class="error" :class="{smallBox:smallBox}" @click="error">
        <span class="content">错误</span>
      </div>
    </div>
    <!-- 列表动画用transition-group  普通动画是transition -->
    <transition-group :name="animation">
      <div
        class="aside"
        :class="{show:item.show}"
        v-for="(item,index) in list"
        v-show="item.flag"
        :key="index"
      >
        <img :src="item.imgSrc" alt />
        <h4 v-if="item.asideTitle">消息</h4>
        <span class="close" @click="asideClose(index)">X</span>
        <p>{{item.asideContent}}</p>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animation: "",
      // flag: false,
      smallBox: true, //四个小盒子的样式显示隐藏
      list: [],
      sub: 0,
      timer: 1000,
      suc: {
        flag: false,
        asideTitle: true, //  侧边消息文字
        show: true,
        Title: true,
        imgSrc: "../assets/image/sucFont.png",
        asideContent: "这是一条成功的提示消息",
      },
      warn: {
        flag: false,
        show: true,
        asideTitle: true,
        imgSrc: "../assets/image/warnFont.png",
        asideContent: "这是一条警告的提示消息",
      },
      newMsg: {
        flag: false,
        show: true,
        asideTitle: true,
        imgSrc: "../assets/image/msgFont.png",
        asideContent: "这是一条普通的提示消息",
      },
      errMsg: {
        flag: false,
        show: true,
        asideTitle: true,
        imgSrc: "../assets/image/errFont.png",
        asideContent: "这是一条失败的提示消息",
      },
    };
  },
  methods: {
    asideClose(index) {
      this.animation = "fade";
      // 点击关闭------从数组中删除选中的元素
      this.list.splice(index, 1);
    },
    success() {
      this.animation = "slide-fade";
      this.suc.flag = true;
      this.list.push(this.suc);
      this.change();
    },
    warning() {
      this.animation = "slide-fade";
      this.warn.flag = true;
      this.list.push(this.warn);
      this.change();
    },
    news() {
      this.animation = "slide-fade";
      this.newMsg.flag = true;
      this.list.push(this.newMsg);
      this.change();
    },
    error() {
      this.animation = "slide-fade";
      this.errMsg.flag = true;
      this.list.push(this.errMsg);
      this.change();
    },
    change() {
      let a = ++this.sub;
      console.log(a);
      (function () {
        let b = (this.timer += 1000);
        a = setTimeout(() => {
          // this.suc.flag = false;
          this.list.splice(0, 1);
          console.log(b);
        }, b);
      })();
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  border: 1px solid white;
}
.box {
  width: 400px;
  height: 100px;
  border: 1px solid #e0e0e0;
  margin: 50px auto;
  line-height: 118px;
}
.smallBox {
  width: 70px;
  height: 40px;
  display: inline-block;
  margin-right: 10px;
  border: 1px solid #e0e0e0;
}
.content {
  float: left;
  margin-top: -40px;
  padding-left: 16px;
  color: #757575;
  font-size: 14px;
  cursor: pointer;
}
.show {
  width: 300px;
  height: 70px;
  position: relative;
  left: 84%;
  top: -180px;
  box-shadow: 4px 4px 11px 4px #e0dfdf;
  margin-bottom: 20px;
}
h4 {
  display: inline-block;
  padding: 0 0 0 15px;
  position: absolute;
  top: 14px;
}
p {
  font-size: 14px;
  color: #777676;
  padding: 0 0 0 56px;
  position: absolute;
  bottom: 11px;
}
.aside {
  position: relative;
}
.close {
  position: absolute;
  top: 6px;
  right: 14px;
  color: #dbdbdb;
  cursor: pointer;
}
.aside img {
  width: 30px;
  height: 30px;
  margin: 10px 0px 0 10px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 1s ease;
}
/* .slide-fade-leave-active {
        transition: all 1s cubic-bezier(0.25, 0.1, 0.25, 1.0);
      } */
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>