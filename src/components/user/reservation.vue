<template>
  <div class="content">
    <h3 class="center">预约就诊</h3>
    <br/>
    <div class="block">
      <div class="demonstration">预约时间：</div>
      <el-date-picker
        v-model="date"
        type="date"
        size="small"
        @change="dateChange"
        placeholder="选择日期"
        :picker-options="pickerOptions0">
      </el-date-picker>
    </div>
    <br/>
    <div>
      <div class="demonstration">选择地点</div>
      <el-radio-group v-model="position" size="small">
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
    <br/>
    <div>
      <div class="demonstration">选择医院</div>
      <el-radio-group v-model="hospital" size="small">
        <el-radio-button label="华西医院"></el-radio-button>
        <el-radio-button label="北京中医药大学"></el-radio-button>
        <el-radio-button label="广州白云山医院"></el-radio-button>
      </el-radio-group>
    </div>
    <br/>
    <div>
      <div class="demonstration">选择科室</div>
      <el-radio-group v-model="department" size="small">
        <el-radio-button label="儿科"></el-radio-button>
        <el-radio-button label="手科"></el-radio-button>
        <el-radio-button label="脑科"></el-radio-button>
      </el-radio-group>
    </div>
    <br/>
    <div>
      <div class="demonstration">选择病情关联人</div>
      <el-radio-group v-model="patient" size="small">
        <el-radio-button label="王凯"></el-radio-button>
        <el-radio-button label="王祖蓝"></el-radio-button>
        <el-radio-button label="王源"></el-radio-button>
      </el-radio-group>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <el-button type="success" class="center_block" @click="yy" >预约</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'reservation',
    data() {
      return {
        position: '上海',
        hospital: '华西医院',
        department: '儿科',
        patient: '',
        date: '',
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
      };
    },
    methods: {
      dateChange(date) {
        this.date = date;
      },
      yy() {
        if (this.date === '') {
          this.$message.warning('请选择预约时间');
          return;
        }
      },
    }
  };
</script>
<style scoped>
  .demonstration{
    color: #333;
    margin-bottom: .3rem;
    font-size: 15px;
  }
</style>
