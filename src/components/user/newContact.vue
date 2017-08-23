<template>
  <div class="content">
    <h3>新建关联人</h3>
    <el-input  v-model="name">
      <template slot="prepend">姓名</template>
    </el-input>
    <br/>
    <br/>
    <el-input  v-model="sex">
      <template slot="prepend">性别</template>
    </el-input>
    <br/>
    <br/>
    <el-input  v-model="address">
      <template slot="prepend">住址</template>
    </el-input>
    <br/>
    <br/>
    <div class="el-input-group__prepend birtitle">生日</div>
    <el-date-picker
      class="birValue"
      v-model="brith"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions0">
    </el-date-picker>
    <br/>
    <br/>
    <el-button type="success" @click="save">保存</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'newContact',
      data() {
        return {
          type: 'add',
          name: '',
          sex: '',
          address: '',
          brith: '',
          pickerOptions0: {
            disabledDate(time) {
              return time.getTime() > Date.now() - 8.64e7;
            }
          },
        };
      },
      created() {
        const par = this.$route.params;
        if (par !== null) {
          this.type = 'edit';
          this.name = par.name;
          this.address = par.address;
          this.sex = par.sex;
          this.brith = par.brith;
        }
      },
      methods: {
        save() {
          if (this.type === 'edit') {

          } else if (this.type === 'add') {

          }
        }
      }
    };
</script>

<style scoped>
  .el-input{
    width: 15rem;
  }
  .birtitle{
    float: left;
    width: 2rem;
    padding: 7.5px;
    border-right: 1px solid #bfcbd9;
    z-index: 999;
  }
  .birValue{
    width: 12rem;
    margin-left: -3px;
  }
</style>
