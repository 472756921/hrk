<template>
    <div>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="用户姓名"
          width="180">
        </el-table-column>
        <el-table-column
          label="操作">
          <template scope="scope">
            <el-button @click.native.prevent="back(scope.$index, tableData)" type="text" size="small">回复</el-button>
            <el-button @click.native.prevent="colse(scope.$index, tableData)" type="text" size="small" style="color: red;">关闭问题</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'docIndex',
      methods: {
        back(index, rows) {
          const id = rows[index].id;
        },
        colse(index, rows) {
          const r = confirm("确认关闭问题？")
          if (r === true) {
            const id = rows[index].id;
            rows.splice(index, 1);
          }
        },
      },
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            id: '12',
          }, {
            date: '2016-05-04',
            name: '王小虎',
            id: '1',
          }, {
            date: '2016-05-01',
            name: '王小虎',
            id: '8',
          }, {
            date: '2016-05-03',
            name: '王小虎',
            id: '29',
          }]
        };
      },
    };
</script>

<style scoped>
</style>
