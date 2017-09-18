<template>
  <div>
    <template>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="account"
          label="账号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="rout"
          label="角色"
          width="180">
        </el-table-column>
        <el-table-column
          prop="lastLoginDate"
          label="最后登录时间">
        </el-table-column>
        <el-table-column label="状态">
          <template scope="scope">
            <span class="Success" @click="chang(scope.$index)">修改</span>
            <span class="danger" @click="del(scope.$index)">删除</span>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getAdmins } from '../../interface';

  export default {
    name: 'adminUserList',
    methods: {
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
    created() {
      this.$ajax({
        method: 'get',
        url: getAdmins(),
      }).then((res) => {
        console.log(res.data);
      }).catch((error) => {
        this.$message.error('网络有问题，请稍后再试');
      });
    },
    data() {
      return {
        tableData: [{
          lastLoginDate: '2016-05-02',
          account: '王小虎',
          id: 1,
          rout: '1'
        }, {
          lastLoginDate: '2016-05-04',
          account: '王小虎',
          rout: '2',
          id: 21,
        }, {
          lastLoginDate: '2016-05-01',
          account: '王小虎',
          id: 1,
          rout: '3',
        }, {
          lastLoginDate: '2016-05-03',
          account: '王小虎',
          rout: '4',
          id: 11,
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
