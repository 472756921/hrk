<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="useName" label="姓名" ></el-table-column>
      <el-table-column prop="order" label="订单号" ></el-table-column>
      <el-table-column prop="type" label="消费类型" ></el-table-column>
      <el-table-column prop="price" label="费用" ></el-table-column>
      <el-table-column prop="date" label="时间" ></el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'oderList',
    data(){
      return {
        tableData: [
          {id: 1, order: '19938347845', type: '咨询', price: '200.00', useName: '刘德华', date: '2012-12-12'},
          {id: 2, order: '19938347845', type: '咨询', price: '200.00', useName: '刘德华', date: '2012-12-12'},
          {id: 3, order: '19938347845', type: '咨询', price: '200.00', useName: '刘德华', date: '2012-12-12'},
        ],
      }
    },
  };
</script>

<style scoped>

</style>
