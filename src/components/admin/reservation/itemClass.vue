<template>
  <div>
    <el-button type="primary" class="addBtn" size="small" @click="dialogVisible = true">添加</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="sp" label="地点" width="220"></el-table-column>
      <el-table-column prop="hs" label="医院" width="220"></el-table-column>
      <el-table-column prop="ks" label="科室" width="220"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button @click.native.prevent="changeDate(scope.$index, tableData)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="添加"
      :visible.sync="dialogVisible"
      size="tiny"
      :before-close="handleClose">
      <span>请选择添加内容</span>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>



  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'itemClass',
    data() {
      return {
        tableData: [
                    {sp: '成都', hs: '华西医院', ks: '妇产科'},
                   ],
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    },
  };
</script>

<style scoped>
  .addBtn{
    margin: 10px;
  }
</style>
