<template>
    <div style="background: #fafafa;height: 100%;padding-bottom: 4rem">
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
      <div class="footerd">------------ 我是有底线的 ------------</div>
      <footeres class="footeres"></footeres>
    </div>
</template>

<script type="text/ecmascript-6">
  import footeres from '../public/footer';
  import u_nav from './nav';
  import home from './home/m_home';

    export default {
      name: 'm_index',
      components:{ u_nav, home, footeres},
      data() {
        return {
          searchVal: '',
          navItems: [{id:0, name:'首页'}, {id:1, name:'设备'}, {id:2, name:'药品'}, {id:3, name:'其他'}],
        }
      },
      methods: {
        navClick() {
          this.$refs.u_nav.show();
        },
        handleIconClick() {
          if(this.$route.name=='m_home') {
            this.$router.push({ path: 'm_goodsList/1213800' });
          } else {
            this.$router.push({ path: '/m_index/m_goodsList/1213800' });
          }
        },
        user() {
          this.$router.push({ name: 'userInfo'})
        }
      }
    };
</script>

<style scoped>
  .head{
    background: #F37C3D;
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
  .footerd{
    text-align: center;
    padding: 2rem 0 .4rem 0;
    color: #e4e4e4;
  }
  .footeres{
    position: fixed;
    bottom: 0;
  }
</style>
