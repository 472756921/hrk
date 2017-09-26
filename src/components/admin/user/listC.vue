<template>
  <div>
    <template>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="account"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="rout"
          label="电话"
          width="180">
        </el-table-column>
        <el-table-column
          prop="rout"
          label="性别"
          width="180">
        </el-table-column>
        <el-table-column
          prop="rout"
          label="年龄"
          width="180">
        </el-table-column>
        <el-table-column
          label="状态"
          :formatter="formatter"
          prop="status">
        </el-table-column>
        <el-table-column
          prop="lastLoginDate"
          label="注册时间">
        </el-table-column>
        <el-table-column
          prop="lastLoginDate"
          label="会员开始时间">
        </el-table-column>
        <el-table-column
          prop="lastLoginDate"
          label="会员到期时间">
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'userList',
    methods: {
      formatter(row, column) {
        if (row.status === 1) {
          return '正常';
        } else {
          return '禁用';
        }
      },
      del(index) {
        const r = confirm("确认删除？")
        if (r === true) {
          this.tableData.splice(index, 1);
        }
      },
      chang(index) {
        this.$router.push({ name: 'addAdmin', params: { account: this.tableData[index].account, rout: this.tableData[index].rout, id: this.tableData[index].id } })
      },
    },
    data() {
      return {
        tableData: [{
          lastLoginDate: '2016-05-02',
          account: '王小虎',
          id: 1,
          rout: '1',
          status: 1,
        }]
      }
    }
  };
</script>

<style scoped>
  .Success{
    cursor: pointer;
  }
  .danger{
    cursor: pointer;
  }
</style>
