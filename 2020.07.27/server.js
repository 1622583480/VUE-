// node.js中如何导入依赖项

// 导入 依赖项 参数为 依赖项名称 
var AAA  = require('express');

// 如何用express 创建服务

var server = new AAA();  // 实例化一个 服务对象 
// console.log(server);

server.listen(8080,function(){ 
    // 给服务开启一个端口 参数1端口号 参数二 执行的函数 
    console.log('服务开启成功');
});

// 在server上 设置接口为 get请求 
// 参数1为接口地址 参数二是 接受请求 
server.get('/',function(req,res){
    console.log(res,req);
});

server.get('/register',function(req,res){
    var {username,password,vert} = req.query
    res.send(username+password+vert)
})