<template>
    <div>
      <div class="title">小儿肺炎疫苗第二次注射安排</div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="创建日期" width="120"></el-table-column>
        <el-table-column prop="name" label="用户姓名" width="120"></el-table-column>
        <el-table-column prop="cuname" label="患者姓名" width="120"></el-table-column>
        <el-table-column prop="sp" label="住址" width="120"></el-table-column>
        <el-table-column prop="md" label="总注射次数" width="120"></el-table-column>
        <el-table-column prop="orderNum" label="当前注射次数" width="180"></el-table-column>
        <el-table-column prop="injectionDate" label="注射时间" width="120"></el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button v-if="scope.row.injectionDate==''" @click.native.prevent="changeDate(scope.$index, tableData)" type="text" size="small">安排日期</el-button>
            <el-button v-if="scope.row.injectionDate!=''" @click.native.prevent="sure(scope.$index, tableData)" type="text" size="small">完成注射</el-button>
            <el-button v-if="scope.row.injectionDate!=''" @click.native.prevent="changeDate(scope.$index, tableData)" type="text" size="small">修改日期</el-button>
            <el-button @click.native.prevent="colse(scope.$index, tableData)" type="text" size="small" style="color: red;">退款</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="model" v-if="cover">
        <div style="font-weight: bold">修改时间</div>
        <br/>
        <div class="block">
          <el-date-picker
            v-model="changeDateValue"
            type="date"
            placeholder="选择日期"
            size="small"
            @change="dateChange"
            :picker-options="pickerOptions0">
          </el-date-picker>
        </div>
        <br/>
        <el-button type="danger" size="small" @click="cancle">取消</el-button>
        <el-button type="primary" size="small" @click="change">确认</el-button>
      </div>
      <div class="fade" v-if="cover"></div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'injection',
    methods: {
      dateChange(date) {
        this.changeDateValue = date;
      },
      change() {
        this.tableData[this.index].injectionDate = this.changeDateValue;
        this.cover = false;
      },
      cancle() {
        this.cover = false;
      },
      changeDate(index, rows) {
        this.index = index;
        this.injectionDate = rows[index].injectionDate;
        this.cover = true;
      },
      colse(index, rows) {
        const r = confirm("确认关闭订单，并向用户退款？")
        if (r === true) {
          const id = rows[index].id;
          rows.splice(index, 1);
        }
      },
      sure(index, rows) {
        const r = confirm("确认该用户已经完成第一次注射？")
        if (r === true) {
          const id = rows[index].id;
          rows.splice(index, 1);
        }
      },
    },
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
