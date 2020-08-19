<template>
  <div id="app" v-cloak>
    <div class="container">
      <div class="data_header">
        <div class="left">
          <span class="prev_year" @click="prevYear">&lt;&lt;</span>
          <span class="prev_month" @click="prevMonth">&lt;</span>
        </div>
        <div class="middle">
          <span class="year">{{now.getFullYear()}}年</span>
          <span class="month">{{now.getMonth()+1}}月</span>
        </div>
        <div class="right">
          <span class="next_month" @click="nextMonth">></span>
          <span class="next_year" @click="nextYear">>></span>
        </div>
      </div>
      <div class="data_main">
        <ul>
          <li v-for="(item,index) of daysList" :key="index">{{item}}</li>
        </ul>
        <ul class="date">
          <li
            v-for="(item,index) of list"
            :style="{color:colorchange.length==1? (index<colorchange[0]?'#ccc':(flag? (item==nowDate?'red':'black'):'black')):(index<colorchange[0]||index>=colorchange[1]?'#ccc':(flag? (item==nowDate?'red':'black'):'black'))}"
            :key="index"
          >{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
               current:new Date(),
                now:new Date(),
                daysList:['一','二','三','四','五','六','日'],
        }
    },
     computed:{
                prevDays(){
                    let now=new Date(this.now);
                    now.setDate(0);
                    return now.getDate();
                },
                nowDays(){
                    let now=new Date(this.now);
                    now.setDate(1);
                    if(now.getMonth()==11){
                        now.setMonth(0);
                        now.setFullYear(now.getFullYear()+1);
                    }else{
                        now.setMonth(now.getMonth()+1);
                    }
                    return new Date(now-24*60*60*1000).getDate();
                },
                nowDate(){
                    return this.now.getDate();

                },
                startDay(){
                    let now=new Date(this.now);
                    now.setDate(1);
                    return now.getDay()==0? 7: now.getDay();
                },
                endDay(){
                    let now=new Date(this.now);
                    now.setDate(this.nowDays);
                    return now.getDay()==0? 7:now.getDay();
                },
                list(){
                    let arr = [];
                    let count = 1;
                    let prevDays = this.prevDays;
                    for (let i = 1; i <= this.nowDays; i++) {
                        arr.push(i);
                    }
                    for (let i = 0; i < this.startDay - 1; i++) {
                        arr.unshift(prevDays--);
                    }
                    for (let i = this.endDay + 1; i <= 7; i++) {
                        arr.push(count++);
                    }
                    return arr;
                },
                colorchange(){
                    let arr=[];
                    let list=this.list;
                    let start=list.indexOf(1);
                    arr.push(start);
                    let end=list.lastIndexOf(1);
                    if(end!=start){
                        arr.push(end);
                    }
                    return arr;
                },
                flag(){
                    return this.current.getFullYear()==this.now.getFullYear()&&this.current.getMonth()==this.now.getMonth()
                }
            },
                    
            methods:{
                prevYear(){
                    let now=new Date(this.now);
                    now.setFullYear(this.now.getFullYear()-1);
                    this.now=now;
                    console.log(this.colorchange);
                },
                prevMonth(){
                    let now=new Date(this.now);
                    if(now.getMonth()==0){
                        now.setMonth(11);
                        now.setFullYear(now.getFullYear()-1);
                    }else{
                        now.setMonth(now.getMonth()-1);
                    }
                    this.now=now;
                },
                nextMonth(){
                    let now=new Date(this.now);
                    if(now.getMonth()==11){
                        now.setMonth(0);
                        now.setFullYear(now.getFullYear()+1);
                    }else{
                        now.setMonth(now.getMonth()+1);
                    }
                    this.now=now;
                },
                nextYear(){
                    let now=new Date(this.now);
                    now.setFullYear(now.getFullYear()+1);
                    this.now=now;
                },
            }


};
</script>

<style scoped>
 *{
            padding:0;
            margin:0;
        }
        .container{
            margin:50px auto 0;
            width:300px;
            border:1px solid #ccc;
            border-radius: 5px;
            padding:20px 30px;
        }
        .data_header{
            display: flex;
            justify-content:space-between;
            align-items:center;
        }
        .data_header span{
            cursor: pointer;
            margin:0 5px;
        }
        .data_main{
            margin-top:20px;
            padding:0 10px;
        }
        .data_main>ul{
            display: flex;
            line-height: 30px;
            list-style:none;
            padding-bottom: 20px;
            border-bottom:1px solid #ccc;
        }
        .data_main>ul>li{
            width:40px;
            text-align:center;
            color:#ccc;
        }
        .data_main>.date{
            margin-top: 20px;
            border-bottom: 0;
            flex-wrap: wrap;
        }
        [v-cloak]{
            display:none;
        }
</style>