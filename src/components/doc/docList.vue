<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="6" v-for="(o, index) in 3" :key="o" style="padding: 12px">
        <el-card :body-style="{ padding: '0px' }">
          <img src="http://iph.href.lu/300x220" class="image">
          <div style="padding: 6px;">
            <div class="center">医生姓名</div>
            <div>简介简简介简简介简简介简简介简简简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</div>
            <div class="bottom clearfix">
              <el-button type="primary" class="center_block" @click="yy">咨询</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'docList',
    data() {
      return {
        currentDate: new Date()
      };
    }
  };
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
