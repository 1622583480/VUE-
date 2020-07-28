var express = require('express');
const { type } = require('os');
var app = express();
var router = express.Router();

var data = new Date();



app.use(router)
var user_token = 'asdasdasdasdasdasd';
var heros = []

router.get('/login', function (req, res) {
    var { username, password } = req.query;
    if (password == 123456 && typeof username == 'string') {
        console.log(heros, user_token)
        var new_data = data.getFullYear() + '-' +
            (data.getMonth() + 1) + '-' +
            data.getDate() + '-' +
            data.getHours() + ':' +
            data.getMinutes() + ':' +
            data.getSeconds()
        res.send({
            code: 200,
            token: user_token + new_data,
            msg: '登录成功'
        })
    } else {
        res.send({
            code: 210,
            token: null,
            msg: '密码不对'
        })
    }
});

router.get('/addHeros', function (req, res) {
    var { name, age, dec, heroId, token } = req.query;
    if (user_token == token) {
        heros.push(
            { name: name, age: age, dec: dec, heroId: heroId }
        )
        console.log(heros, user_token)
        res.send({ code: 200, msg: "添加成功" })
    }

});

router.get('/deletHero', function (req, res) {
    var { heroId, token } = req.query;
    if (user_token == token) {
        for (var i = 0; i < heros.length; i++) {
            if (heroId == heros[i].heroId) {
                heros.splice(i, 1);
                res.send({ code: 200, msg: "删除成功", list: heros })
            }
        }
    }
})

router.get('/getHeros', function (req, res) {
    var { token } = req.query;
    if (user_token == token) {
        for (var i = 0; i < heros.length; i++) {
            if (token == user_token) {
                res.send({ code: 200, list: heros })
            }
        }
    }
});

router.get('/updataHero', function (req, res) {
    var { age, dec, heroId, token } = req.query;
    if (user_token == token) {
        for (var i = 0; i < heros.length; i++) {
            if (heroId == heros[i].heroId) {
                heros[i].age = age
                heros[i].dec = dec
                res.send({ code: 200, msg: '修改成功', item: heros[i] })
            }
        }
    }
});

app.listen(1145)