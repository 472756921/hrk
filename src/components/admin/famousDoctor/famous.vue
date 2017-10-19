<template>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="预约日期" ></el-table-column>
        <el-table-column prop="name" label="姓名" > </el-table-column>
        <el-table-column prop="u_leve" label="等级" :formatter="formatter"> </el-table-column>
        <el-table-column prop="classes" label="类型" width="100" :filters="[{ text: '重庆', value: 1 }, { text: '港澳', value: 2 }]"
          :filter-method="filterTag" filter-placement="bottom-end">
          <template scope="scope">
            {{scope.row.classes==1?'重庆':'港澳'}}
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name: 'famous',
      data(){
        return {
          tableData: [
            {
              name: '王晓宇',
              date: '2015-12-12',
              classes: 1,
              u_leve: 1,
            },{
              name: '王晓宇',
              date: '2015-12-12',
              classes: 1,
              u_leve: 3,
            },{
              name: '王晓宇',
              date: '2015-12-12',
              classes: 2,
              u_leve: 2,
            },
          ],
        }
      },
      methods: {
        filterTag(value, row) {
          return row.classes === value;
        },
        formatter(row, column) {
          if (row.u_leve === 1) {
            return '普通用户';
          } else if (row.u_leve === 2){
            return '黄金用户';
          } else {
            return '至尊用户';
          }
        },
      },
    };
</script>

<style scoped>

</style>
