import Vue from 'vue'
import Vuex from 'vuex'
// 一样的启动插件
Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    count: 0,
    // state  是用来存储数据的 
    userInfo:{ 
      userName:"",
      password:"",
      iphone:"",
    },
    token:''
  },
  mutations: {
    setUserInfo(state,data){   // 规范化起名
      // 如何接收actions中的内容 如何修改数据 
      state.userInfo = data;
      // 直接修改即可 
    },
    setAddCount(state,data){   // 规范化起名
      // 如何接收actions中的内容 如何修改数据 
      state.count += data.num
      // 直接修改即可 
    },
    setReduceCount(state,data){   // 规范化起名
      // 如何接收actions中的内容 如何修改数据 
      state.count -= data.num
      // 直接修改即可 
    },
    setToken(state,data){
      state.token = data
    }

    // 里面函数的作用 修改 state中的数据 
  },
  // 这里的key全部是函数  
  // state中的 一个key对应一个 mutations函数
  actions: {

    //  所有actions 里面的参数1 全是store实例 有api
    //  触发action 时 传入的实参
    noiceUserInfo(store,data){
      console.log(store,data)
      store.commit('setUserInfo',data); //通知mutations修改变量
      // 参1 mutations 中的函数名 参数2是你要修改的值



      // 问题一 如何接收形参 
    },
    noiceAddCount(store,data){
      store.commit("setAddCount",data)
    },
    noiceReduceCount(store,data){
      store.commit("setReduceCount",data)
    },
    noiceToken(store,data){
      store.commit('setToken',data)
    }
    // 通知mutations 修改state
    // 这里是key全部是函数 
  },
  getters:{
    getUserInfo(state){
      return state.userInfo
    },
    getCount(state){
      return state.count
    },
    // 这里的作用就是获取state 
    // 这里都是函数 且函数都有retrun返回值 
    getToken(state){
      return state.token
    }
  },
});
// Bug 不要让v-model直接绑定vuex中的数据 
export default store