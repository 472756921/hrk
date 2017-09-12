<template>
  <div class="content">
    <div>账号：<input type="text" v-model="account"></div>
    <br v-if="!edit"/>
    <div v-if="!edit">密码：<input type="password" v-model="pwd"></div>
    <br v-if="!edit"/>
    <div v-if="!edit">重复：<input type="password" v-model="pwda"></div>
    <br/>
    <div>角色：
      <el-radio class="radio" v-model="radio" label="1">超级管理员</el-radio>
      <el-radio class="radio" v-model="radio" label="2">管理员</el-radio>
      <el-radio class="radio" v-model="radio" label="3">客服</el-radio>
    </div>
    <br/>
    <el-button  v-if="!edit" type="success" size="small" @click="add">添加</el-button>
    <el-button  v-if="edit" type="success" size="small" @click="chang">修改</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'addAdmin',
    methods: {
      add(){
        if (this.account === '' || this.pwd === '' || this.pwda === ''){
          this.$message.error('请输入必要信息');
          return;
        }
        if (this.pwd !== this.pwda){
          this.$message.error('两次输入的密码不一致');
          return;
        }
      },
      chang() {},
    },
    created() {
      const par = this.$route.params;
      if ('radio' in par) {
        this.radio = par.rout;
        this.account = par.account;
        this.id = par.id;
        this.edit = true;
      }
    },
    data () {
      return {
        edit: false,
        id: '',
        radio: '1',
        pwd: '',
        pwda: '',
        account: '',
      };
    }
  };
</script>

<style scoped>
  .content{
    overflow: auto;
  }
</style>
