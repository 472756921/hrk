<template>
    <div >
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="create_date" label="提问日期" width="120"></el-table-column>
        <el-table-column prop="customer_name" label="用户姓名" width="120"></el-table-column>
        <el-table-column prop="child_name" label="患者姓名" width="120"></el-table-column>
        <el-table-column prop="doctor_name" label="医生姓名" width="120"></el-table-column>
        <el-table-column prop="order_on" label="订单号" width="180"></el-table-column>
        <el-table-column prop="price" label="金额（RMB）" width="180"></el-table-column>
        <el-table-column label="状态">
          <template scope="scope">
            <span class="Success" v-if="scope.row.status==4">退款成功</span>
            <span class="danger" v-if="scope.row.tks==0">退款失败 <button class="tui" @click="tuikuan(scope.$index)">退款</button></span>
          </template>
        </el-table-column>
      </el-table>
      <Page :page="page" v-if="over" v-on:pageChange="getList"/>
    </div>
</template>

<script type="text/ecmascript-6">
  import { getConsultings } from '../../interface';
  import Page from '../page';

  export default {
    name: 'ask',
    components: { Page },
    methods: {
      tuikuan(index) {
        const r = confirm("确认退款？")
        if (r === true) {
          this.tableData[index].tks = 1;
        }
      },
      getList(page) {
        this.$ajax({
          method: 'GET',
          url: getConsultings() + "?status=4&page=" + page,
        }).then((res) => {
          this.tableData = res.data.consultings;
          this.page = { totalPage: res.data.totalPage, page:  res.data.page,  };
          this.over = true;
        }).catch((error) => {
        });
      },
    },
    created() {
      this.getList(1);
    },
    data() {
      return {
        tableData: [],
        over: false,
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
  .tui{
    background: #FF4949;
    border: none;
    color: #ffffff;
    padding: 6px;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
