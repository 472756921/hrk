<template>
  <div>
    <el-tabs v-model="activeName2" @tab-click="handleClick">
      <el-tab-pane label="预约就诊" name="first">
        <div class="reservation" v-for="(item, index) in 3">
            <el-row>
              <el-col :span="18">
                <div style="font-size: .6rem;color: #aaa"><span>编号：</span><span>18273746665</span></div>
                <div><span class="infoTitle">预约时间：</span><span class="infoText">2016-12-12</span></div>
                <div><span class="infoTitle">预约医院：</span><span class="infoText">华一医院</span></div>
                <div><span class="infoTitle">预约科室：</span><span class="infoText">脑科</span></div>
              </el-col>
              <el-col :span="6">
                <div class="reservationStatus Success">预约成功</div>
              </el-col>
            </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane label="预约名医就诊" name="second">敬请期待</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'reservationStatus',
    data() {
      return {
        activeName2: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped>
  .reservation{
    padding: 1rem;
    font-size: .8rem;
    background: #EFF2F7;
    border-bottom: 1px solid #D3DCE6;
    margin-bottom: .4rem;
  }
  .reservationStatus{
    line-height: 4rem;
  }
  .infoText{
    color: #666;
  }
  .infoTitle{
    color: #333;
  }
</style>
