<template>
  <div id="app">
    <!-- <h1>Hello World</h1> -->
    <!-- 使用子组件 -->
    <!-- <first :list="list" @on_catc="On_Catc" /> -->
    <!-- <seconed :msg="msg" :text="txt" />
    <Notice />

    <TimePicker :set_time="[12,10,33]" :Finish_time="[18,45,33]" />
    <TurPage /> 
    <ShuttleBox />
    <ShuttleBoxTwo />
    <notification/>
    <timeselect />-->
    <!-- <alert :open="true" ref="alert">
      <template v-slot:title>标题内容first</template>
      <template #context>主体内容context</template>
      <template #sure>
        <button>确认</button>
      </template>
      <template #concel>
        <button>取消</button>
      </template>
    </alert>

    <one  :title="msg" @on-title="changeTitle"></one>
    <one  :title.sync="msg"></one>-->
    <!-- <goodList :coffee="list"></goodList> -->
    <!-- <h1 style="color:blue">你好</h1> -->
    <add-goods></add-goods>
  </div>
</template>
<script src="/vue/axios.min.js">
</script>
<script>
// import First from "./first";
// import Seconed from "./components/second.vue";

// import TimePicker from "./views/Time-picker.vue";
// import Notice from "./views/通知栏";
// import TurPage from "./views/TurPage";
// import ShuttleBox from "./views/Shuttlebox";
// import ShuttleBoxTwo from "./views/ShuttleBoxTwo"
// import notification from './views/notification'
// import timeselect from "./views/timeselect";
// import alert from "./vue student/alert";
// import one from "./vue student/aqcy";
// import goodList from './vue student/列表渲染'
import AddGoods from "./views/addShop";
export default {
  name: "App",
  data: function () {
    return {
      // list: [
      //   { name: "我叫Hello", age: 17, dec: "欢迎来到Vue" },
      //   { name: "我叫World", age: 17, dec: "welcome to Vue" },
      // ],
      msg: "Hello World",
      txt: null,
      list: [
        {
          id: 1,
          imgUrl:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3125429564,420740929&fm=11&gp=0.jpg",
          Hot: `<span style="padding:3px 6px;color:#fff;background:#800080;">爆款<span>`,
          title: "今日爆款手冲咖啡",
          money: 98,
          dec: "手冲咖啡今日特价,供不应求",
        },
      ],
    };
  },
  components: {
    // 注册组件
    // First,
    // Seconed,
    // TimePicker,
    // TurPage,
    // ShuttleBox,
    // ShuttleBoxTwo,
    // Notice,
    // notification,
    // timeselect,

    // 父组件 传值msg[旧的内容]给子组件 子组件接收值渲染到页面
    // 然后给父组件触发一个函数且传个参数[新的内容] 然后父组件更新旧的内容[msg]
    // 由于msg更新了 所以会把[新的内容]更新到子组件 子组件再去将新的内容渲染到页面

    // alert,
    // one,
    // goodList
    AddGoods,
  },
  methods: {
    changeTitle(data) {
      this.msg = data;
    },
    txtHandle(data) {
      console.log(data, "我是父组件");
    },
    On_Catc(data) {
      this.txt = data;
    },
  },

  // 要注意 creat的时候, 组件还没渲染完毕 所以说不能获取refs内的元素
  mounted() {
    // console.log(this.$refs.alert.$el)
    // console.log(this.$children);
    // // 获取子组件里面的对象方法 属性等等等
    // console.log(this.$parent);
    // // 获取父组件当中的
    // console.log(this.$data);
    // console.log(this.$children[2].$props);
    // console.log(this.$children[2].$option);
  },
};
</script>

<!-- 这里写css代码 scss css都可以 -->
<style>
html,
body {
  width: 100%;
  height: 100%;
}
*{
margin: 0;
padding: 0;
box-sizing: border-box;

}
</style>