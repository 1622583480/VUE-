# demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 组件开发前言
一般来说 main.js是入口文件

 - 一个.vue文件都是一个单独的【局部组件】
 - 每一个组件都可以为一个功能 
 - 重点： 这种开发方式叫做组件化开发 
 - 也叫模块化开发 
    在这里 .vue文件里面 里面也有style script等等等 
    通常template存放html代码 

## 培养自己模块化开发思想 
 - 模块化思想 
 - 划分模块化
 - 组件间通信

## public 与src/assets 
public 字面意思就是公开的 也代表【静态资源】是可以通过服务直接访问的 
而src一般都是
src/assets 就是一个普通的资源目录 不能直接访问 

注意locaolhost:8080 服务会默认自动找到；
静态资源下的imdex.html
    2. 所有的组件.vue文件都会通过 new vue实例中的方法 把组件都渲染到index。html中
public 文件名称 不可以改变 
  3：组件引入的资源 是 assets 文件下的；所以页面可以看到 资源

## 组件通信 
谁是父组件 谁是 子组件 

 - 组件通信的要点 
 父组件需要 import 引入子文件 
 然后需要在compontent里面注册子组件 
 然后就可以在<template> 里面去使用了 
 例如:<el-count> 