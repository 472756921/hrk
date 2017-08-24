<template>
  <div class="content">
    <h3>生理指标<i class="iconfont icon-add" style="float:right;color: #1D8CE0;" @click="dialogVisible = true"></i></h3>
    <el-row class="card" v-for="(o, index) in data" key="index">
      <el-col :span="12"><div>日期：{{o.date}}</div></el-col>
      <el-col :span="12"><div>月龄：{{o.age}}</div></el-col>
      <el-col :span="12"> <div>体重：{{o.weight}} KG</div></el-col>
      <el-col :span="12"><div>体温：{{o.temperature}} ℃</div></el-col>
      <el-col :span="12"><div>奶量：{{o.volume}} ML</div></el-col>
    </el-row>
    <el-dialog
      title="录入今日指标"
      :visible.sync="dialogVisible"
      size="large"
      :before-close="handleClose">
      <el-input  v-model="weight" maxlength=2 placeholder="KG">
        <template slot="prepend">体重</template>
      </el-input>
      <br/>
      <br/>
      <el-input  v-model="temperature" maxlength=4  placeholder="℃">
        <template slot="prepend">体温</template>
      </el-input>
      <br/>
      <br/>
      <el-input  v-model="volume" maxlength=4 placeholder="ML">
        <template slot="prepend">奶量</template>
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="sure">确定</el-button>
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
        data: [
          {age: 12, weight: 22, temperature: 36.3, volume: 124, date: '2012-12-13'},
          {age: 12, weight: 22, temperature: 36.3, volume: 124, date: '2012-12-12'},
          {age: 12, weight: 22, temperature: 36.3, volume: 124, date: '2012-12-11'},
          {age: 12, weight: 22, temperature: 36.3, volume: 124, date: '2012-12-10'},
        ],
      };
    },
    methods: {
      handleClose(done) {
        done();
        this.weight = '' ;
        this.temperature = '' ;
        this.volume = '';
      },
      sure() {
        const date = new Date();
        if (this.weight !== '' && this.temperature !== '' && this.volume !== '') {
          let dateF = date.getFullYear() + '-' + (date.getMonth()+1) + '-' +date.getDate()
          this.data = [{age: this.data[0].age, weight: this.weight, temperature: this.temperature, volume: this.volume, date:dateF},...this.data];
          this.dialogVisible = false;
          this.weight = '' ;
          this.temperature = '' ;
          this.volume = '';
        }
      },
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
    line-height: 1.3rem;
  }
</style>
