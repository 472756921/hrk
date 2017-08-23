<template>
  <div class="content">
    <h3>生理指标<i class="iconfont icon-add" style="float:right;color: #1D8CE0;" @click="dialogVisible = true"></i></h3>
    <el-row class="card" v-for="(o, index) in 3">
      <el-col :span="12"><div>日期：2012-12-12</div></el-col>
      <el-col :span="12"><div>月龄：12</div></el-col>
      <el-col :span="12"> <div>体重：12kg</div></el-col>
      <el-col :span="12"><div>体温：37C</div></el-col>
      <el-col :span="12"><div>奶量：37C</div></el-col>
    </el-row>

    <el-dialog
      title="录入今日指标"
      :visible.sync="dialogVisible"
      size="large"
      :before-close="handleClose">
      <el-input  v-model="weight" maxlength=2 placeholder="KG">
        <template slot="prepend">体重</template>
      </el-input>
      <el-input  v-model="temperature" maxlength=2  placeholder="℃">
        <template slot="prepend">体温</template>
      </el-input>
      <el-input  v-model="volume" maxlength=3 placeholder="ML">
        <template slot="prepend">奶量</template>
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'physiological',
    data() {
      return {
        dialogVisible: false,
        weight: '',
        temperature: '',
        volume: '',
      };
    },
    methods: {
      handleClose(done) {
        done();
      }
    }
  };
</script>

<style scoped>
  .card{
    font-size: .8rem;
    background: #EFF2F7;
    padding: 1rem .6rem;
    border-radius: .2rem;
    margin-bottom: .2rem;
  }
</style>
