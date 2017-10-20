<template>
  <div>
    <div :class="it.active==1?'activees':'item'" v-for="(it, i) in data">
      <div class="name">刘德华 收</div>
      <div class="phone">17780024049</div>
      <br/>
      <br/>
      <div>四川省 成都市 天府三街益州大道332号</div>
      <div>610000</div>
      <el-button v-if="it.active==0" type="primary" size="mini" style="float: right">设为默认</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'shdz',
    data() {
      return {
        data: [
          {active: 1, name: '刘德华', phone: 18837746362, address: '四川省 成都市 天府三街益州大道332号'},
          {active: 0, name: '刘德华', phone: 18837746362, address: '四川省 成都市 天府三街益州大道332号'},
          {active: 0, name: '刘德华', phone: 18837746362, address: '四川省 成都市 天府三街益州大道332号'}
        ],
      };
    },
  };
</script>

<style scoped>
.item{
  padding: 1rem;
  overflow: auto;
  border: 2px solid #eee;
  margin: .6rem 0;
}
.activees{
  padding: 1rem;
  overflow: auto;
  border: 10px dashed #F4A460;
  margin: .6rem 0;
}
.name{
  font-weight: 600;
  font-size: 1rem;
  float: left;
}
.phone{
  font-size: .8rem;
  color: #aaaaaa;
  float: right;
}
</style>
