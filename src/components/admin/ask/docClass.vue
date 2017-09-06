<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="220"></el-table-column>
      <el-table-column prop="hs" label="医院" width="220"></el-table-column>
      <el-table-column prop="hs" label="职位" width="220"></el-table-column>
      <el-table-column prop="head" label="头像" width="220"></el-table-column>
      <el-table-column prop="ks" label="地点" width="220"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button @click.native.prevent="changeDate(scope.$index, tableData)" type="text" size="small">删除</el-button>
          <el-button @click.native.prevent="changeDate(scope.$index, tableData)" type="text" size="small">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'docClass',
    data() {
      return {
        tableData: '',
      }
    },
  };
</script>

<style scoped>

</style>
