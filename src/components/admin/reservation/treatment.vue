<template>
    <div >
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="appointment_date" label="预约日期" width="120"></el-table-column>
        <el-table-column prop="customer_name" label="用户姓名" width="120"></el-table-column>
        <el-table-column prop="child_name" label="患者姓名" width="120"></el-table-column>
        <el-table-column prop="address" label="预约地点" width="120"></el-table-column>
        <el-table-column prop="hospital_name" label="预约医院" width="120"></el-table-column>
        <el-table-column prop="department_name" label="预约科室" width="120"></el-table-column>
        <el-table-column prop="order_on" label="订单号" width="190"></el-table-column>
        <el-table-column prop="price" label="金额（RMB）" width="180"></el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button @click.native.prevent="sure(scope.$index, tableData)" type="text" size="small">确认预约</el-button>
            <el-button @click.native.prevent="changeDate(scope.$index, tableData)" type="text" size="small">修改日期</el-button>
            <el-button @click.native.prevent="colse(scope.$index, tableData)" type="text" size="small" style="color: red;">退款</el-button>
          </template>
        </el-table-column>
      </el-table>
      <Page :page="page" v-if="over" v-on:pageChange="getList"/>
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
  import { getExamineManager, updateExamineDate, updateExamineStatus, updateExamineRefundDate } from '../../interface';
  import Page from '../page';

  export default {
    name: 'treatment',
    components: { Page },
    methods: {
      dateChange(date) {
        this.changeDateValue = date;
      },
      change() {
        this.tableData[this.index].appointment_date = this.changeDateValue;
        const data = {
          appointment_date: this.changeDateValue,
          id: this.tableData[this.index].id,
        };
        this.$ajax({
          method: 'post',
          url: updateExamineDate(),
          data: data,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.cover = false;
        }).catch((error) => {
          this.$message.error('网络有问题，请稍后再试');
        });

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
          const data = {
            status: 2,
            id: rows[index].id,
          };
          this.$ajax({
            method: 'post',
            url: updateExamineStatus(),
            data: data,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            rows.splice(index, 1);
          }).catch((error) => {
            this.$message.error('网络有问题，请稍后再试');
          });
        }
      },
      colse(index, rows) {
        const r = confirm("确认关闭订单，并向用户退款？")
        if (r === true) {
          const id = rows[index].id;
          const data = { status:3, id: id };
          this.$ajax({
            method: 'post',
            url: updateExamineRefundDate(),
            data: data,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            rows.splice(index, 1);
          }).catch((error) => {
            this.$message.error('网络有问题，请稍后再试');
          });
        }
      },
      getList(page) {
        this.$ajax({
          method: 'GET',
          url: getExamineManager() + "?status=1&page="+page,
        }).then((res) => {
          this.tableData = res.data.ExamineManager;
          this.page = { totalPage: res.data.totalPage, page:  res.data.page,  };
          this.over = true;
        }).catch((error) => {
        });
      }
    },
    created() {
     this.getList(1);
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
        over: false,
        cover: false,
        tableData: [],
        page: '',
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
