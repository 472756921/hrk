<template>
  <div>
    <img src="http://iph.href.lu/300x140" style="width: 100%">
    <p>这是一些关于小儿肺炎的说明这是一些关于小儿肺炎的说明这是一些关于小儿肺炎的说明这是一些关于小儿肺炎的说明这是一些关于小儿肺炎的说明</p>
    <br/>
    <div class="demonstration">选择病情关联人</div>
    <el-radio-group v-model="patient" size="small">
      <el-radio-button :label="child.id" key="i" v-for="(child, i) in data">{{child.real_name}}</el-radio-button>
    </el-radio-group>
    <br/>
    <br/>
    <div class="demonstration">选择地点</div>
    <el-radio-group v-model="position" size="small">
      <el-radio-button label="成都"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
    </el-radio-group>
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
  import { selectGuardianDetail } from '../interface';

  export default {
    name: 'pneumonia',
    data() {
      return {
        patient: '',
        hospital: '',
        position: '',
        data: '',
      };
    },
    created() {
      this.getList();
    },
    methods: {
      yy() {
        if (this.patient === '' || this.hospital === '') {
          this.$message.warning('请选择预约地点和患者');
          return;
        }
      },
      getList() {
        this.$ajax({
          method: 'GET',
          url: selectGuardianDetail(),
        }).then((res) => {
          this.data = res.data;
        }).catch((error) => {
          this.$message.error(error.message);
        });
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
