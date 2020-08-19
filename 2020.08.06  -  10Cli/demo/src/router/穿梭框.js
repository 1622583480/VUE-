
var obj1 = {name:'上海',id:1,pinyin:'shanghai|sh'};
var obj2 = {name:'北京',id:2,pinyin:'beijing|bj'};
var obj3 = {name:'广州',id:3,pinyin:'guangzhou|gz'};
var obj4 = {name:'深圳',id:4,pinyin:'shenzhen|sz'};
var obj5 = {name:'南京',id:5,pinyin:'nanjing|nj'};
var obj6 = {name:'西安',id:6,pinyin:'xian|xa'};
var obj7 = {name:'成都',id:7,pinyin:'chengdu|cd'};


var app = new Vue({
    el:'#transfer',
    data:{
        listCity:[
            obj1,obj2,obj3,obj4,obj5,obj6,obj7
        ],  // 左边框遍历的数据
        cityName:[],  // 左边框勾选的数据
        cityNameMiddle:[],  // 右边框中遍历的数据
        cityNameTwo:[],  // 右边框勾选的数据
        // 设置两个全选按钮的状态
        flagLeft:false,
        flagRight:false,

        ipt:'',  // 左边搜索框输入的数据
        iptTwo:'',  // 右边搜索框输入的数据
        newListCity:[],  // 给搜索到的城市提供存放位置
        newListCityMiddle:[
            obj1,obj2,obj3,obj4,obj5,obj6,obj7
        ],  // 用于左边搜索功能使用的数组
        // newcityNameMiddle:[],
        // 右边搜框索使用的数组
        newSearchArr:[],
    },
    methods:{
        cityChange(item,index){
            
            console.log(this.newListCityMiddle);
        },
        cityChangeTwo(){
            
            console.log(this.newListCityMiddle);
        },
        
        butR(){
            for(var i = 0; i < this.cityName.length; i++){
                this.cityNameMiddle.push(this.cityName[i]);
            }

            // this.newcityNameMiddle = this.cityName;

            if(this.flagLeft == true){
                this.listCity = [];
            }
            this.flagLeft = false;

            for(var i = 0; i < this.cityName.length; i++){
                // 删除listCity数组中已经传到右边的项
                this.listClear(this.listCity,this.cityName,i);


                // 删除newListCityMiddle数组中传到右边的项
                this.listClear(this.newListCityMiddle,this.cityName,i);
            }


            this.cityName = [];
            // 排序
            this.listSort(this.cityNameMiddle);

            // 将右边遍历出来的数组赋值给右边的搜索框数组
            this.newSearchArr = this.cityNameMiddle;



        },
        butL(){
            
            // 将右边框勾选的数据添加到左边框
            for(var i = 0; i < this.cityNameTwo.length; i++){
                this.listCity.push(this.cityNameTwo[i]);
                this.newListCityMiddle.push(this.cityNameTwo[i]);
                
            }

            if(this.flagRight == true){
                this.cityNameMiddle = [];
                this.cityName = [];
            }
            this.flagRight = false;

            for(var i = 0; i < this.cityNameTwo.length; i++){

                // 删除右边框中传入左边框的数据
                this.listClear(this.cityNameMiddle,this.cityNameTwo,i);

                // 删除右边框勾选数组中带有传入右边框的数据，防止左边框数据出现再次勾选状态
                this.listClear(this.cityName,this.cityNameTwo,i);

                // 新建的右边搜索数组进行删除传入左边的项
                this.listClear(this.newSearchArr,this.cityNameTwo,i);
                // this.listClear(this.newcityNameMiddle,this.cityNameTwo,i);
            }

            // 给两个数组去重
            this.listCity = this.clearNewArray(this.listCity);
            this.newListCityMiddle = this.clearNewArray(this.newListCityMiddle);
            // 排序处理
            this.listSort(this.listCity);
            this.listSort(this.newListCityMiddle);

            // 清空cityNameTwo数组，防止再次将数据添加到右边时复选框被勾选
            this.cityNameTwo = [];

            console.log(this.newSearchArr);


        },
        searchLeft(){
            // newListCityMiddle是处在一个更新的状态
            this.listCity = this.newListCityMiddle;

            this.newListCity = [];
            for(var i = 0; i < this.newListCityMiddle.length; i++){
                var namPinyin = this.newListCityMiddle[i].pinyin.split('|');
                // 判断城市拼音的正则表达式
                var reg = new RegExp('^'+this.ipt,'i');
                for(var k = 0; k < namPinyin.length; k++){
                    if(reg.test(namPinyin[k])){
                        this.newListCity.push(this.newListCityMiddle[i]);
                        break;
                    }
                }
            }
            
            // console.log(this.newListCity);
            if(this.ipt != ''){
                this.listCity = this.newListCity;
            }else{
                console.log('qqqqqqqqqqqqqqqqqqqqqq');
                this.listCity = this.newListCityMiddle;
            }


        },
        searchRight(){
            this.newListCity = [];
            for(var i = 0; i < this.newSearchArr.length; i++){
                var namPinyin = this.newSearchArr[i].pinyin.split('|');

                var reg = new RegExp('^'+this.iptTwo,'i')
                for(var k = 0; k < namPinyin.length; k++){
                    if(reg.test(namPinyin[k])){
                        this.newListCity.push(this.newSearchArr[i]);
                        break;
                    }
                }
            }
            if(this.iptTwo != ''){
                this.cityNameMiddle = this.newListCity;
            }else{
                // console.log('qqqqqqqqqqqqqqqqqqqqqq');
                this.cityNameMiddle = this.newSearchArr;
            }


        },
        allLeft(){
            if(this.flagLeft == true){
                this.cityName = this.listCity;
            }else{
                this.cityName = [];
            }
            

        },
        allRight(){
            if(this.flagRight == true){
                this.cityNameTwo = this.cityNameMiddle;
            }else{
                this.cityNameTwo = [];
            }

        },



        // 数组根据id排序方法封装
        listSort(arr){
            arr.sort(function(x,y){
                return x.id - y.id;
            })
        },
        // 两个数组相同对象去重,并删除大数组里相同的一项
        listClear(bigCity,smollCity,i){
            if(bigCity.indexOf(smollCity[i]) != -1){
                var flag2 = bigCity.indexOf(smollCity[i]);
                bigCity.splice(flag2,1);
            }
        },
        // 数组去重
        clearNewArray(arr){
            var arr1 = [];
            for(var i = 0; i < arr.length; i++){
                if(arr1.indexOf(arr[i]) == -1){
                    arr1.push(arr[i]);
                }
            }
            return arr1;
        }
    }
})