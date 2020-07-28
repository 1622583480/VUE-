
var express = require('express');

var app = new express();

app.listen(3838,function(){
    console.log('开启成功')
});

app.get('/login',function(req,res){
    var {parms,user,togen} = req.query;
    // 参数1 是 请求参数 

    // 参数2 是请求对象 
    res.send('asdddddddddddddddddddddddddddd');

    res.json()
})
