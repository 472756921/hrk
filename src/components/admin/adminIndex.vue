<template>
  <el-row>
    <el-col :span="4">
      <div class="side">
        <div class="sideHead">和润康管理系统</div>
        <el-row class="tac">
          <el-col :span="24">
            <el-menu default-active="2" class="el-menu-vertical-demo">
              <el-submenu index="1" v-if="type==1">
                <template slot="title"><i class="iconfont icon-icon-test"></i> 统计数据</template>
                <el-menu-item index="1-1"><router-link :to="{ name: 'allData' }">统计数据</router-link> </el-menu-item>
                <el-menu-item index="1-2">暂无</el-menu-item>
              </el-submenu>
              <el-submenu index="2" v-if="type==1">
                <template slot="title"><i class="iconfont icon-user"></i> 用户管理</template>
                <el-menu-item index="2-1"  v-if="adminType<=2"><router-link :to="{ name: 'userList' }">普通用户</router-link> </el-menu-item>
                <el-menu-item index="2-2"><router-link :to="{ name: 'userListb' }">黄金用户</router-link></el-menu-item>
                <el-menu-item index="2-3"><router-link :to="{ name: 'userListc' }">至尊用户</router-link></el-menu-item>
              </el-submenu>
              <el-submenu index="3" v-if="type==1">
                <template slot="title"><i class="iconfont icon-reservation"></i> 就诊管理</template>
                <el-menu-item index="3-1"  v-if="adminType<=2"><router-link :to="{ name: 'itemClass' }">列表项管理</router-link></el-menu-item>
                <el-menu-item index="3-2"><router-link :to="{ name: 'treatment' }">预约就诊</router-link></el-menu-item>
                <el-menu-item index="3-3"><router-link :to="{ name: 'treatmentS' }">已确定就诊</router-link></el-menu-item>
                <el-menu-item index="3-4"><router-link :to="{ name: 'treatmentF' }">就诊退款</router-link></el-menu-item>
              </el-submenu>
              <el-submenu index="4" v-if="type==1">
                <template slot="title"><i class="iconfont icon-iconfontyisheng"></i> 问诊管理</template>
                <el-menu-item index="4-3" v-if="adminType<=2"><router-link :to="{ name: 'docClass' }">医生管理</router-link></el-menu-item>
                <el-menu-item index="4-1"><router-link :to="{ name: 'askS' }">退款处理</router-link></el-menu-item>
                <el-menu-item index="4-2"><router-link :to="{ name: 'askF' }">退款记录</router-link></el-menu-item>
              </el-submenu>
              <el-submenu index="5" v-if="type==1">
                <template slot="title"><i class="iconfont icon-yimiao"></i> 肺炎疫苗</template>
                <el-menu-item index="5-1"><router-link :to="{ name: 'injection' }">第一针</router-link></el-menu-item>
                <el-menu-item index="5-2"><router-link :to="{ name: 'injectionB' }">第二针</router-link></el-menu-item>
                <el-menu-item index="5-3"><router-link :to="{ name: 'injectionC' }">第三针</router-link></el-menu-item>
                <el-menu-item index="5-5"><router-link :to="{ name: 'injectionD' }">第四针</router-link></el-menu-item>
                <el-menu-item index="5-4"><router-link :to="{ name: 'injectionO' }">完成记录</router-link></el-menu-item>
              </el-submenu>
              <el-submenu index="8" v-if="type==1">
                <template slot="title"><i class="iconfont icon-yisheng"></i> 名医工作室</template>
                <el-menu-item index="8-1"><router-link :to="{ name: 'famous' }">预约列表</router-link></el-menu-item>
              </el-submenu>
              <el-submenu index="9" v-if="type==1">
                <template slot="title"><i class="iconfont icon-shangcheng"></i> 商城管理</template>
                <el-menu-item index="9-1"><router-link :to="{ name: 'addGodds' }">添加商品</router-link></el-menu-item>
                <el-menu-item index="9-1"><router-link :to="{ name: 'mallIndex' }">商品列表</router-link></el-menu-item>
                <el-menu-item index="9-1"><router-link :to="{ name: 'headImg' }">商城录播图片设置</router-link></el-menu-item>
              </el-submenu>
              <el-submenu index="7" v-if="type==1&&adminType==1">
                <template slot="title"><i class="iconfont icon-guanliyuan"></i> 管理员管理</template>
                <el-menu-item index="7-1"><router-link :to="{ name: 'adminUserList' }">管理员列表</router-link></el-menu-item>
                <el-menu-item index="7-2"><router-link :to="{ name: 'addAdmin' }">新增管理员</router-link></el-menu-item>
              </el-submenu>
              <el-menu-item index="6" v-if="type==1"><i class="iconfont icon-dingdan-copy"></i> <router-link :to="{ name: 'oderList' }">订单查询</router-link></el-menu-item>
              <el-menu-item index="10"  v-if="type==2"><i class="iconfont icon-wenzhenzhong"></i> <router-link :to="{ name: 'docIndex' }">问诊列表</router-link></el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </el-col>
    <el-col :span="20">
      <div class="main">
        <div class="mainHead">用户，您好</div>
        <router-view></router-view>
      </div>
    </el-col>
  </el-row>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'docIndex',
    created() {
      const userdata = sessionStorage.getItem('user');
      if (userdata == null || userdata == '' || userdata == undefined){
        this.$router.push({ name: 'adminLogin' });
      } else {
        this.type = sessionStorage.getItem('type');
        this.adminType = JSON.parse(userdata).admin.admin_type;
      }
    },
    data() {
      return {
        type: '',
        adminType: '',
      };
    },
    methods: {
    }
  };
</script>

<style scoped>
  .mainHead{
    background: #5a6378;
    width: 100%;
    float: left;
    padding: 20px 10px;
    font-size: 20px;
    color: #ffffff;
    box-sizing:border-box;
  }
  .side{
    width: 100%;
    float: left;
  }
  .sideHead{
    background: #ff6b6b;
    color: #ffffff;
    padding: 20px 10px;
    font-size: 20px;
  }
  a{
    color: #777;
    text-decoration: none;
  }
</style>
