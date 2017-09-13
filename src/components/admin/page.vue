<template>
  <div class="block">
    <el-pagination
      layout="prev, pager, next"
      :page-count = 'totalPage'
      :current-page = 'pageNow'
      :page-size = 50>
    </el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'app',
    props: [ 'page' ],
    data () {
      return {
        totalPage: this.page.totalPage,
        pageNow: this.page.page,
      }
    },
    created(){
    },
  };
</script>

<style scoped>
  .block{
    margin-top: 10px;;
    text-align: center;
  }
</style>
