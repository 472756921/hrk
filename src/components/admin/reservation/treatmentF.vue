<template>
    <div >
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="预约日期" width="120"></el-table-column>
        <el-table-column prop="datetk" label="退款日期" width="120"></el-table-column>
        <el-table-column prop="name" label="用户姓名" width="120"></el-table-column>
        <el-table-column prop="cuname" label="患者姓名" width="120"></el-table-column>
        <el-table-column prop="sp" label="预约地点" width="120"></el-table-column>
        <el-table-column prop="md" label="预约医院" width="120"></el-table-column>
        <el-table-column prop="ks" label="预约科室" width="120"></el-table-column>
        <el-table-column prop="orderNum" label="订单号" width="180"></el-table-column>
        <el-table-column prop="money" label="金额（RMB）" width="180"></el-table-column>
        <el-table-column label="状态">
          <template scope="scope">
            <span class="Success" v-if="scope.row.tks==1">退款成功</span>
            <span class="danger" v-if="scope.row.tks==0">退款失败 <button class="tui" @click="tuikuan(scope.$index)">退款</button></span>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'treatmentF',
    methods: {
      tuikuan(index) {
        const r = confirm("确认退款？")
        if (r === true) {
          this.tableData[index].tks = 1;
        }
      },
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          orderNum: '1239384847',
          name: '王大虎',
          cuname: '王小虎',
          tks: 1,
          sp: '成都',
          money: '213',
          md: '华西医院',
          datetk: '2017-12-12',
          ks: '小儿内科',
          id: '12',
        }, {
          date: '2016-05-04',
          name: '王大虎',
          cuname: '王小虎',
          sp: '成都',
          orderNum: '1239384847',
          money: '213',
          tks: 1,
          md: '华西医院',
          datetk: '2017-12-12',
          ks: '小儿内科',
          id: '1',
        }, {
          date: '2016-05-01',
          name: '王大虎',
          cuname: '王小虎',
          datetk: '2017-12-12',
          orderNum: '1239384847',
          money: '213',
          sp: '成都',
          md: '华西医院',
          ks: '小儿内科',
          tks: 1,
          id: '8',
        }, {
          date: '2016-05-03',
          name: '王大虎',
          cuname: '王小虎',
          money: '213',
          datetk: '2017-12-12',
          sp: '成都',
          orderNum: '1239384847',
          md: '华西医院',
          ks: '小儿内科',
          tks: 0,
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
  .tui{
    background: #FF4949;
    border: none;
    color: #ffffff;
    padding: 6px;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
