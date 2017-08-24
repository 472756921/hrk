<template>
  <div>
    <img src="http://iph.href.lu/300x140" style="width: 100%">
    <p>这是一些关于小儿肺炎的说明这是一些关于小儿肺炎的说明这是一些关于小儿肺炎的说明这是一些关于小儿肺炎的说明这是一些关于小儿肺炎的说明</p>
    <br/>
    <div class="demonstration">选择病情关联人</div>
    <el-radio-group v-model="patient" size="small">
      <el-radio-button label="王凯"></el-radio-button>
      <el-radio-button label="王祖蓝"></el-radio-button>
      <el-radio-button label="王源"></el-radio-button>
    </el-radio-group>
    <br/>
    <br/>
    <div class="demonstration">选择医院</div>
    <el-radio-group v-model="hospital" size="small">
      <el-radio-button label="华西医院"></el-radio-button>
      <el-radio-button label="北京中医药大学"></el-radio-button>
      <el-radio-button label="广州白云山医院"></el-radio-button>
    </el-radio-group>
    <br/>
    <br/>
    <br/>
    <br/>
    <el-button type="primary" class="center_block" @click="yy" >预约</el-button>
    <br/>
    <div class="center">
      <a href="pneumoniaStatus" class="link">历史记录</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'pneumonia',
    data() {
      return {
        patient: '',
        hospital: '',
      };
    },
    methods: {
      yy() {
        if (this.patient === '' || this.hospital === '') {
          this.$message.warning('请选择预约地点和患者');
          return;
        }
      },
    }
  };
</script>

<style scoped>

  .demonstration{
    color: #1D8CE0;
    margin-bottom: .3rem;
  }
  .link{
    color: #1D8CE0;
    text-decoration: none;
  }
</style>
