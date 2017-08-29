<template>
    <div>
      <div class="title">小儿肺炎疫苗完成注射</div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="创建日期" width="120"></el-table-column>
        <el-table-column prop="name" label="用户姓名" width="120"></el-table-column>
        <el-table-column prop="cuname" label="患者姓名" width="120"></el-table-column>
        <el-table-column prop="sp" label="住址" width="120"></el-table-column>
        <el-table-column prop="md" label="总注射次数" width="120"></el-table-column>
        <el-table-column prop="injectionDate" label="完成时间"></el-table-column>
      </el-table>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'injectionO',
    data() {
      return {
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        changeDateValue: '',
        index: '',
        cover: false,
        tableData: [{
          date: '2016-05-02',
          injectionDate: '',
          name: '王大虎',
          cuname: '王小虎',
          sp: '成都',
          md: '1',
          orderNum: '0',
          ks: '小儿内科',
          money: '213',
          id: '12',
        }, {
          date: '2016-05-04',
          injectionDate: '2017-12-12',
          money: '213',
          name: '王大虎',
          cuname: '王小虎',
          sp: '成都',
          md: '3',
          ks: '小儿内科',
          orderNum: '0',
          id: '1',
        }, {
          date: '2016-05-01',
          injectionDate: '2017-12-12',
          name: '王大虎',
          cuname: '王小虎',
          sp: '成都',
          md: '2',
          orderNum: '0',
          money: '213',
          ks: '小儿内科',
          id: '8',
        }]
      };
    },
  };
</script>

<style scoped>
  .model{
    width: 200px;
    border: 1px solid #e4e4e4;
    border-radius: 8px;
    padding: 20px;
    position: fixed;
    top: 30%;
    left: 40%;
    background-color: #fff;
    z-index: 2;
  }
  .fade{
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background: #999999;
    opacity: .5;
    z-index: 1;
  }
  .title{
    font-size: 16px;
    font-weight: bold;
    padding: 10px;
    overflow: auto;
  }
</style>
