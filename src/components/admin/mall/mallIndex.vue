<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="名称" > </el-table-column>
      <el-table-column prop="date" label="上架日期" > </el-table-column>
      <el-table-column prop="u_leve" label="优惠价"> </el-table-column>
      <el-table-column prop="u_leve" label="原价"> </el-table-column>
      <el-table-column prop="staus" label="状态"> </el-table-column>
      <el-table-column prop="staus" label="是否首页展示"> </el-table-column>
      <el-table-column prop="tag" label="标签">
        <template scope="scope">
          <el-tag type="success">促销</el-tag>
          <el-tag type="warning">新品</el-tag>
          <el-tag type="danger">热卖</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="tag" label="操作">
        <template scope="scope">
          <el-button type="primary" size="small">编辑</el-button>
          <el-button type="warning" size="small">下架</el-button>
          <el-button type="success" size="small">上架</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Page :page="page" v-if="over" v-on:pageChange="getList"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import Page from '../page';

  export default {
    name: 'mallIndex',
    components: { Page },
    data(){
      return {
        page: '',
        over: false,
        tableData: [
          {
            name: '公牛插座',
            date: '2015-12-12',
            classes: 1,
            u_leve: 1,
          },{
            name: '美的电饭煲',
            date: '2015-12-12',
            classes: 1,
            u_leve: 3,
          },{
            name: '松下冰箱',
            date: '2015-12-12',
            classes: 2,
            u_leve: 2,
          },
        ],
      }
    },
    methods:{
      filterTag(value, row) {
        return row.tag === value;
      }
    },
    getList(page) {},
  };
</script>

<style scoped>

</style>
