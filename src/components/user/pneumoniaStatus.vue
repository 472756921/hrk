<template>
  <div class="content">
    <h3>肺炎接种记录</h3>
    <div class="card" v-for="(item, i) in data">
      <div class="name">{{item.name}}</div>
      <div><span>{{item.age}}月龄</span> - <span>共{{item.totle}}针</span></div>
      <div>预约地点：{{item.address}}</div>
      <div>注射记录：</div>
      <div>
        <span class="indate" v-for="(di, dindex) in item.indat">{{di}}</span>
      </div>
      <div class="create">创建时间：{{item.createDate}}</div>
      <i class="iconfont icon-jinhangzhong2 icons"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'pneumoniaStatus',
    data() {
      return {
        data: [
          { id: 1, name: '王源', age: 7, totle: 3, address: '成都', indat: ['2015-12-12', '2016-02-12', '2016-04-12'], createDate: '2015-12-01'},
        ],
      };
    },
    methods: {
    }
  };
</script>

<style scoped>

  .demonstration{
    color: #1D8CE0;
    margin-bottom: .3rem;
  }
  .name{
    font-size: 1.1rem;
    color: #1D8CE0;
  }
  .card{
    font-size: .8rem;
    background-color: #EFF2F7;
    padding: .8rem;
    position: relative;
  }
  .create{
    color: #aaa;
    font-size: .6rem;
    text-align: right;
  }
  .indate{
    margin: 0 .4rem;
    line-height: 1.5rem;
    color: #1D8CE0;
  }
  .icons{
    font-size: 5rem;
    position: absolute;
    right: .2rem;
    top: .2rem;
  }
</style>
