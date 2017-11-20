<template>
  <div style="padding: .4rem">
    <div class="item">
      <div class="name">{{data.name}} 收</div>
      <div class="phone">{{data.phone}}</div>
      <br/>
      <br/>
      <div>{{data.address}}</div>
      <el-button type="primary" size="mini" style="float: right">切换</el-button>
    </div>
    <el-row :gutter="10" v-for="(it, i) in listData" key="i" style="border-bottom: 1px solid #e0e0e0; margin-top: .6rem;">
      <el-col :span="6"><img src="http://iph.href.lu/80x80" width="100%"/></el-col>
      <el-col :span="18">
        <div class="name">{{it.name}}</div>
        <div class="danger" style="text-align: left">¥{{it.price}}</div>
      </el-col>
    </el-row>

    <el-row class="con">
      <el-col :span="10"><div class="contol">¥123.00</div></el-col>
      <el-col :span="14">
        <div class="payBtn">去付款</div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'm_pay',
    data(){
      return {
        listData: [{name:'公牛抗电涌插座排插防雷保护接线板多功能电脑手机USB电源插排', price: 123.00}, {name:'公牛抗电涌插座排插防雷保护接线板多功能电脑手机USB电源插排', price: 123.00}, ],
        data:  {active: 1, name: '刘德华', phone: 18837746362, address: '四川省 成都市 天府三街益州大道332号'},
      };
    },
    methods: {
      del(){
        const va = confirm('确认删除该商品？');
        if (va) {

        }
      },
    },
  };
</script>

<style scoped>
  .a{
    color: #1D8CE0;
  }
  .title{
    text-align: center;
    color: #cccccc;
    padding: .4rem;
  }
  .contol{
    line-height: 3rem;
    font-size: 1rem;
    text-align: center;
    width: calc(100% - 1rem);
  }
  .con{
    position: fixed;
    width: 100%;
    border-top: 1px solid #ccc;
    left: 0;
    bottom: 0;
  }
  .payBtn{
    background: #FF4949;
    width: calc(100% - 2rem);
    color: #ffffff;
    padding: 1rem;
    text-align: center;
  }
  .name{
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .name{
    font-weight: 600;
    font-size: 1rem;
    float: left;
  }
  .phone{
    font-size: .8rem;
    color: #aaaaaa;
    float: right;
  }
  .item{
    padding: .6rem;
    overflow: auto;
    border: 2px solid #eee;
    margin: .2rem 0;
  }
</style>
