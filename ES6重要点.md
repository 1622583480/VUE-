
function(a,b){
    let a = asdsadad; //报错
}

function A(){ 

}
let A = 131231231; //

var A = function(){ //报错 

}

## 在课件Object.definedProprttye.html中 
 - 在对象默认都有get和set属性 
 - 我们平常 obj.num 或者 obj.num = 12212; 
 - 其实我们都是走的get和set方法 
 - 而他们里面都是有一个中间函数 作为过渡桥梁的 
 - 也就是_num 
 - 实际上我们操作的都是_num 
 - 所以说我们可以重写set和get方法 
 - 来做到在给一个对象赋值之前进行一些操作 
 - 比如值的包装加工 等
## 在课件 all.html中 
 - 里面p1,p2,p3 都是一个Promiose对象 
 - 里面都有延迟各不相同的异步 
 - 且用一个数组来 将他们作为元素 
 - 在Promise里面的同步代码会按照代码的解析顺序自上而下的执行 
 - 而里面的异步代码 会按照时间的循环由快到慢的执行 