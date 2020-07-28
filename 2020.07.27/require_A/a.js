var express= require('express');
var router  = express.Router();

router.get('/a',function(req,res){
    res.json({
        msg:'路由实现的 aaaaaa'
    });
});

module.exports = router