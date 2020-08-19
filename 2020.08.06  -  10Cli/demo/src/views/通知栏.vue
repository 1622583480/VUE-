<template>
  <div id="vvvvv">
    <!-- 按钮 -->
    <div class="container">
      <button class="el-button" @click="open1">
        <span>可自动关闭</span>
      </button>
      <button class="el-button" @click="open2">
        <span>不会自动关闭</span>
      </button>
    </div>

    <div class="Popup_list">
      <!-- 这里的flag用于控制弹窗的消失和隐藏 -->
      <transition-group name="fade">
        <div
          :key="index"
          v-for="(item,index) in list"
          :style="{left:item.left}"
          class="el-right"
          v-show="item.flag"
        >
          <h2>标题名称</h2>
          <div class="el-content">
            <i>这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案{{index}}</i>
          </div>
          <div @click="automatic_close(index)" class="iconfont icon-chaguanbi"></div>
          <!-- 这里是关闭按钮  -->
        </div>
      </transition-group>
    </div>

    <!-- <div class="el-right2" >
            <h2>提示</h2>
            <div class="el-message">
                <i>这是一条不会自动关闭的消息</i>
            </div>
            <div @click="close2" class=" iconfont icon-chaguanbi"></div>
    </div>-->
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      count: 0, //计数器用来记录点击次数
      list: [],
      timer: 2000, //连续点击会增加timer的值
      //让消失事件变长
      not_colse: {
        flag: true, //控制显示和隐藏
        left: "0px",
        id: 0,
      },
    };
  },
  methods: {
    // 自动关闭
    open1() {
      // 把一个个弹窗看成对象 每次点击在数组里面添加一个新的对象
      this.list.push(this.not_colse);
      let b = (this.timer += 1000);
      //这里会创建多个定时器

      // ++this.not_colse.name
      setTimeout(() => {
        //    ??  每次删除的是第一个
        this.list.splice(0, 1);
      }, b);
    },
    // 不自动关闭
    open2() {
      this.count++;
      this.list.push(this.not_colse);
      console.log(this.list);
    },
    automatic_close(index) {
      // console.log(index);
      this.list.splice(index, 1);
      // index是关闭按钮传过来的对应弹窗的index值
      // 这里用index值删除数组内对应对象就可以实现删除对应弹窗
    },
  },
};
</script>

<style  scoped>
html,
body {
  width: 100%;
  height: 100%;
}

.container {
  width: 720px;
  height: 90px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #dcdfe6;
}

.el-button {
  background-color: #fff;
  margin-left: 10px;
  margin-top: 20px;
  cursor: pointer;
  border: 1px solid #dcdfe6;
  color: #606266;
  padding: 12px 20px;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  transition: 0.3s;
}

/* 获取焦点 */
.el-button:hover,
.el-button:focus {
  background-color: #fff;
  border: 1px solid #409eff;
  color: #409eff;
}

/* 弹框 */
.el-right {
  width: 330px;
  height: 140px;
  padding: 14px 26px 14px 13px;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid #ebeef5;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  /* position: fixed;
            left: 1500px; */
  transition: all 0.3s;
  opacity: 1;
  left: 300px;
  position: relative;
  margin-bottom: 10px;
}

.el-content i {
  color: teal;
}

h2 {
  font-size: 16px;
  font-weight: 700;
  color: #303133;
}

.el-right > .icon-chaguanbi {
  top: 18px;
  right: 15px;
  font-size: 18px;
  position: absolute;
  cursor: pointer;
  color: #909399;
}

.el-right2 {
  width: 330px;
  height: 78px;
  padding: 14px 26px 14px 13px;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid #ebeef5;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 1170px;
}

.Popup_list {
  position: fixed;
  height: 100%;
  right: 0px;
  /* width: 100px; */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
        .fade-leave-to

        /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>