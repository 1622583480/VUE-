var express= require('express');
var router  = express.Router();

router.get('/login',function(req,res){
    res.json({
        msg:'路由实现的  login login'
    });
});

// 暴露模块 其他js文件可以通过这个引入 ,,,,,,,,,,,
module.exports = router