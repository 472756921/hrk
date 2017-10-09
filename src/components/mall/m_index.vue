<template>
    <div>
      <div class="head">
        <el-row>
          <el-col :span="8">
            <i class="iconfont icon-caidan" @click="navClick"></i>
          </el-col>
          <el-col :span="8"><div class="title">和润康商城</div></el-col>
          <el-col :span="8">
            <div style="text-align: right">购物车</div>
          </el-col>
        </el-row>
      </div>
      <u_nav ref="u_nav"></u_nav>
      <carousel></carousel>
      <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
  import u_nav from './nav';
  import carousel from './carousel';

    export default {
      name: 'm_index',
      components:{ u_nav, carousel },
      methods: {
        navClick() {
          this.$refs.u_nav.show();
        },
      }
    };
</script>

<style scoped>
  .head{
    background: #1D8CE0;
    line-height: 2rem;
    color: #ffffff;
    padding: .4rem;
    z-index:999;
    position: relative;
  }
  .title{
    text-align: center;
    font-size: 1rem;
  }
</style>
