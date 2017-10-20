<template>
    <div style="background: #fafafa;height: 100%">
      <div class="head">
        <el-row>
          <el-col :span="4">
            <i class="iconfont icon-caidan" @click="navClick"></i>
          </el-col>
          <el-col :span="16">
            <div class="title">
              <el-input placeholder="憋说话，搜我" icon="search" size="small" v-model="searchVal" :on-icon-click="handleIconClick"></el-input>
            </div>
          </el-col>
          <el-col :span="4">
            <div style="text-align: right">
              <i class="iconfont icon-user1" @click="user"></i>
            </div>
          </el-col>
        </el-row>
      </div>
      <u_nav ref="u_nav" :itemData="navItems"></u_nav>
      <router-view></router-view>
      <div class="footer">------------ 我是有底线的 ------------</div>
    </div>
</template>

<script type="text/ecmascript-6">
  import u_nav from './nav';
  import home from './home/m_home';

    export default {
      name: 'm_index',
      components:{ u_nav, home},
      data() {
        return {
          searchVal: '',
          navItems: ['药品','器械','仪器','其他'],
        }
      },
      methods: {
        navClick() {
          this.$refs.u_nav.show();
        },
        handleIconClick() {
          alert('搜索');
        },
        user() {
          this.$router.push({ name: 'userInfo'})
        }
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
  .footer{
    text-align: center;
    padding: 2rem 0 .4rem 0;
    color: #e4e4e4;
  }
</style>
