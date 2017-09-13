<template>
    <div >
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="预约日期" width="120"></el-table-column>
        <el-table-column prop="name" label="用户姓名" width="120"></el-table-column>
        <el-table-column prop="cuname" label="患者姓名" width="120"></el-table-column>
        <el-table-column prop="sp" label="预约地点" width="120"></el-table-column>
        <el-table-column prop="md" label="预约医院" width="120"></el-table-column>
        <el-table-column prop="ks" label="预约科室" width="120"></el-table-column>
        <el-table-column prop="orderNum" label="订单号" width="180"></el-table-column>
        <el-table-column prop="money" label="金额（RMB）" width="180"></el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button @click.native.prevent="sure(scope.$index, tableData)" type="text" size="small">确认预约</el-button>
            <el-button @click.native.prevent="changeDate(scope.$index, tableData)" type="text" size="small">修改日期</el-button>
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
    name: 'treatment',
    methods: {
      dateChange(date) {
        this.changeDateValue = date;
      },
      change() {
        this.tableData[this.index].date = this.changeDateValue;
        this.cover = false;
      },
      cancle() {
        this.cover = false;
      },
      changeDate(index, rows) {
        this.index = index;
        this.changeDateValue = rows[index].date;
        this.cover = true;
      },
      sure(index, rows) {
        const r = confirm("确认预约？")
        if (r === true) {
          const id = rows[index].id;
          rows.splice(index, 1);
        }
      },
      colse(index, rows) {
        const r = confirm("确认关闭订单，并向用户退款？")
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
          name: '王大虎',
          cuname: '王小虎',
          sp: '成都',
          md: '华西医院',
          orderNum: '1239384847',
          ks: '小儿内科',
          money: '213',
          id: '12',
        }, {
          date: '2016-05-04',
          money: '213',
          name: '王大虎',
          cuname: '王小虎',
          sp: '成都',
          md: '华西医院',
          ks: '小儿内科',
          orderNum: '1239384847',
          id: '1',
        }, {
          date: '2016-05-01',
          name: '王大虎',
          cuname: '王小虎',
          sp: '成都',
          md: '华西医院',
          orderNum: '1239384847',
          money: '213',
          ks: '小儿内科',
          id: '8',
        }, {
          date: '2016-05-03',
          name: '王大虎',
          cuname: '王小虎',
          orderNum: '1239384847',
          sp: '成都',
          money: '213',
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
</style>
