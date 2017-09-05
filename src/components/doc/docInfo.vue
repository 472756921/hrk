<template>
  <div>
    <img src="http://iph.href.lu/150x200" class="center_block" />
    <br/>
    <h3 class="center">{{doc.real_name}}</h3>
    <div class="center">{{doc.real_name}}</div>
    <div class="center">{{doc.position}}</div>
    <br/>
    <el-collapse>
      <el-collapse-item title="简介" name="1">
        <div>{{doc.detail}}</div>
      </el-collapse-item>
    </el-collapse>
    <br/>
    <div>收费标准：<span class="danger">每次￥{{doc.beans}}.00</span></div>
    <br/>
    <div>
      <div class="demonstration">选择病情关联人:</div>
      <el-radio-group v-model="patient" size="small">
        <el-radio-button label="王凯"></el-radio-button>
        <el-radio-button label="王祖蓝"></el-radio-button>
        <el-radio-button label="王源"></el-radio-button>
      </el-radio-group>
    </div>
    <br/>
    <br/>
    <br/>
    <el-button type="primary" class="center_block" @click="pay">立即付款咨询</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'docInfo',
    data() {
      return {
        patient: '',
        doc: '',
      };
    },
    created() {
      const par = this.$route.params;
      if (par.doc != undefined) {
        this.doc = par.doc;
      } else {
        this.$message.error('网络错误,请稍后再试');
      }
    },
    methods: {
      pay() {
        if (this.patient === '') {
          this.$message.warning('请选择病情关联人');
          return;
        }
        this.$router.push({ name: 'question' })
      }
    }
  };
</script>

<style scoped>

</style>
