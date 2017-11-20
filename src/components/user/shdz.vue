<template>
  <div>
    <div :class="it.active==1?'activees':'item'" v-for="(it, i) in data">
      <div class="name">{{it.name}} 收</div>
      <div class="phone">{{it.phone}}</div>
      <br/>
      <br/>
      <div>{{it.address}}</div>
      <div>{{it.yb}}</div>
      <el-button v-if="it.active==0" type="primary" size="mini" style="float: right"  @click="setMR(i)">设为默认</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'shdz',
    data() {
      return {
        data: [
          {active: 1, name: '刘德华', phone: 18837746362, address: '四川省 成都市 天府三街益州大道332号', yb: 610000},
          {active: 0, name: '刘德华', phone: 18837746362, address: '四川省 成都市 天府三街益州大道332号', yb: 610000},
          {active: 0, name: '刘德华', phone: 18837746362, address: '四川省 成都市 天府三街益州大道332号', yb: 610000}
        ],
      };
    },
    methods: {
      setMR(i) {
        const va = confirm('确认将该地址作为默认收货地址？');
        if (va) {
          this.data.map((item)=>{item.active = 0})
          this.data[i].active = 1;
        }
      },
    },
  };
</script>

<style scoped>
.item{
  padding: 1rem;
  overflow: auto;
  border: 8px dashed #eee;
  margin: .6rem 0;
}
.activees{
  padding: 1rem;
  overflow: auto;
  border: 8px dashed #F4A460;
  margin: .6rem 0;
  background: #eee;
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
