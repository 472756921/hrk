<template>
  <div>
    <img src="http://iph.href.lu/150x200" class="center_block" />
    <br/>
    <h3 class="center">{{doc.real_name}}</h3>
    <div class="center">{{doc.hospital_name}}</div>
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
        <el-radio-button :label="child.id" key="i" v-for="(child, i) in childs">{{child.real_name}}</el-radio-button>
      </el-radio-group>
    </div>
    <br/>
    <br/>
    <br/>
    <el-button type="primary" class="center_block" @click="pay">立即付款咨询</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  import { selectGuardianDetail, createConsulting } from '../interface';

  export default {
    name: 'docInfo',
    data() {
      return {
        patient: '',
        doc: '',
        childs: '',
      };
    },
    created() {
      const par = this.$route.params;
      if ('doc' in par) {
        this.doc = par.doc;
      } else {
        this.$router.push({ name: 'ask' });
      }
      this.$ajax({
        method: 'GET',
        url: selectGuardianDetail(),
      }).then((res) => {
        this.childs = res.data;
      }).catch((error) => {
        this.$message.error(error.message);
      });
    },
    methods: {
      pay() {
        if (this.patient === '') {
          this.$message.warning('请选择病情关联人');
          return;
        }
        const data = {
          doctor_id: this.doc.id,
          child_id: this.patient,
        };
        this.$ajax({
          method: 'POST',
          data: data,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
          url: createConsulting(),
        }).then((res) => {
          this.$router.push({ name: 'question', params: { docName: this.doc.real_name, id: res.data.service_id }  });
        }).catch((error) => {
          this.$message.error(error.message);
        });
      }
    }
  };
</script>

<style scoped>

</style>
