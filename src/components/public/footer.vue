<template>
    <div class="footer">
      <el-row>
        <el-col :span="6">
          <div class="btnU btnUActice">
            <div class="btnIcon_content"><i class="iconfont icon-shouye"></i></div>
            <div class="btn_text">首页</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="btnU">
            <div class="btnIcon_content"><i class="iconfont icon-shouye4"></i></div>
            <div class="btn_text">消息</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="btnU">
            <div class="btnIcon_content"><i class="iconfont icon-shouye2"></i></div>
            <div class="btn_text">商城</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="btnU">
            <div class="btnIcon_content"><i class="iconfont icon-shouye1"></i></div>
            <div class="btn_text">我的</div>
          </div>
        </el-col>
      </el-row>

    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'footer',
    };
</script>

<style scoped>
  .footer{
    background: #ffffff;
    width: 100%;
    height: 4.4rem;
    padding: .4rem;
    padding-bottom: 0;
    box-sizing: border-box;
    box-shadow: 0px 0px 5px #DCC6C6;
  }
  .btnIcon_content i{
    font-size: 2rem;
  }
  .btnU{
    text-align: center;
    color: #DCC6C6;
  }
  .btnUActice{
    color: #F37C3D;
  }
</style>
