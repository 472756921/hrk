<template>
  <div>
    <div class="userInfoHead">
      <el-row>
        <el-col :span="6">
          <div class="grid-content">
            <div>300.00</div>
            <div>余额</div>
            <button class="czBtn">充值</button>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="">
            <div class="round">
              <img src="http://iph.href.lu/98x98">
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <div>Yao Ming</div>
            <div>22岁 <i class="iconfont icon-nan sex"></i></div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="line"></div>

    <br/>
    <div class="text">
      <span>身份证号码</span>
      <span class="itemText">510703********9304</span>
    </div>
    <div class="line2"></div>
    <div class="text">
      <span>联系电话</span>
      <span class="itemText">187***3774</span>
    </div>
    <div class="line2"></div>
    <div class="text">
      <span>联系地址</span>
      <span class="itemText">成都市高新区</span>
    </div>
    <div class="line2"></div>
    <div class="text">
      <span>优惠券</span>
      <span class="itemText">
        <i class="iconfont icon-htbarrowright02"></i>
      </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'userInfo',
  };
</script>

<style scoped>
  .userInfoHead{
    text-align: center;
    padding: 4rem 1rem;
    color: #fff;
    background: url("../../assets/userInfo.jpg");
  }
  .round{
    border: 1px solid #000;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    margin: 0 auto;
    overflow: hidden;
  }
  .grid-content{
    padding-top: 1.3rem;
  }
  .sex{
    font-size: .6rem;
  }
  .czBtn{
    background: #FF4949;
    border: none;
    color: #fff;
    border-radius: .2rem;
    padding: .1rem .4rem;
  }
  .text{
    padding: 0 .6rem;
    line-height: 1.6rem;
    color: #324057;
  }
  .itemText{
    float: right;
    color: #999;
    font-size: .8rem;
  }
</style>
