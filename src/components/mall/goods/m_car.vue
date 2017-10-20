<template>
  <div style="padding: .4rem">
    <div class="title">购物车还是空的，赶紧去采购吧</div>
    <div class="title"><a href="#/m_index/home" class="a">去首页</a></div>
    <el-row :gutter="10">
      <el-col :span="6"><img src="http://iph.href.lu/80x80" width="100%"/></el-col>
      <el-col :span="18">
        <div class="">公牛抗电涌插座排插防雷保护接线板多功能电脑手机USB电源插排</div>
        <div class="danger" style="text-align: right">¥123.00</div>
      </el-col>
    </el-row>

    <el-row class="con">
      <el-col :span="10"><div class="contol">¥123.00</div></el-col>
      <el-col :span="14">
        <div class="payBtn">支付</div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'm_car',
  };
</script>

<style scoped>
  .items{
    padding: .4rem;
  }
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
</style>
