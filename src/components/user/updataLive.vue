<template>
  <div>
    <h3 class="center">请选择签约类型</h3>
    <br/>
    <div class="center">
      <el-radio-group v-model="hy" @change="change" size="small" style="margin: 0 auto">
        <el-radio-button label="1" >至尊会员</el-radio-button>
        <el-radio-button label="2">黄金会员</el-radio-button>
      </el-radio-group>
    </div>
    <br/>
    <div class="grd"></div>
    <div>
      <div>{{js}}</div>
      <div class="grd"></div>
      <div class="litem">服务期限：<span class="litemtext">1年</span></div>
      <div class="litem">服务到期时间：<span class="litemtext">{{overDate}}</span></div>
      <div class="litem">基础签约项目</div>
      <div class="litemConte">基础签约项目</div>
    </div>
    <div class="grd"></div>
    <p>会费：<span style="color: #FF4949;">￥{{fy}}</span></p>
    <el-button type="danger" style="display: block;margin: 2rem auto">签约并支付</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'updataLive',
    data() {
      return {
        overDate: '2012-12-12',
        hy: '1',
        fy: '9999.00',
        js: '至尊会员简介至尊会员简介至尊会员简介至尊会员简介至尊会员简介至尊会员简介',
      };
    },
    methods: {
      change() {
        const king = '黄金会员简介';
        const zzh = '至尊会员简介';
        if (this.hy === '1') {
          this.js = zzh;
          this.fy = '9999.00';
        }
        if (this.hy === '2') {
          this.js = king;
          this.fy = '999.00';
        }
      },
    },
  };
</script>

<style scoped>
  .litem{
    border-bottom: 1px solid #eee;
    line-height: 3.6rem;
  }
  .litemtext{
    float: right;
    color: #aaa;
  }
  .grd{
    height: 1rem;
    background: #eee;
    margin: .8rem 0;
  }
  .litemConte{
    padding: 1rem;
    color: #cccccc;
  }
</style>
