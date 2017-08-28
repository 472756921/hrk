<template>
    <div >
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="提问日期" width="120"></el-table-column>
        <el-table-column prop="name" label="用户姓名" width="120"></el-table-column>
        <el-table-column prop="cuname" label="患者姓名" width="120"></el-table-column>
        <el-table-column prop="ks" label="医生姓名" width="120"></el-table-column>
        <el-table-column prop="orderNum" label="订单号" width="180"></el-table-column>
        <el-table-column prop="money" label="金额（RMB）" width="180"></el-table-column>
        <el-table-column label="操作">
          <template scope="scope"><span class="danger" @click="tuikuan(scope.$index, tableData)">退款</span></template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'askS',
    methods: {
      tuikuan(index, rows) {
        const r = confirm("确认退款？")
        if (r === true) {
          rows.splice(index, 1);
        }
      },
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王大虎',
          cuname: '王小虎',
          sp: '成都',
          md: '华西医院',
          ks: '小儿内科',
          money: '213',
          orderNum: '1239384847',
          id: '12',
        }, {
          date: '2016-05-04',
          name: '王大虎',
          cuname: '王小虎',
          sp: '成都',
          money: '213',
          orderNum: '1239384847',
          md: '华西医院',
          ks: '小儿内科',
          id: '1',
        }, {
          date: '2016-05-01',
          money: '213',
          name: '王大虎',
          cuname: '王小虎',
          sp: '成都',
          orderNum: '1239384847',
          md: '华西医院',
          ks: '小儿内科',
          id: '8',
        }, {
          date: '2016-05-03',
          name: '王大虎',
          cuname: '王小虎',
          money: '213',
          sp: '成都',
          orderNum: '1239384847',
          md: '华西医院',
          ks: '小儿内科',
          id: '29',
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
  .danger{
    cursor: pointer;
  }
</style>
