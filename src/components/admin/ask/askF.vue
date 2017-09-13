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
  import { getConsultings } from '../../interface';

  export default {
    name: 'ask',
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
          url: getConsultings() + "?status=1&page=" + page,
        }).then((res) => {
        }).catch((error) => {
        });
      },
    },
    created() {
      this.getList(1);
    },
    data() {
      return {
        tableData: []
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
