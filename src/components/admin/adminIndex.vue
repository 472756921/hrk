<template>
  <el-row>
    <el-col :span="4">
      <div class="side">
        <div class="sideHead">和润康管理系统</div>
        <el-row class="tac">
          <el-col :span="24">
            <el-menu default-active="2" class="el-menu-vertical-demo">
              <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>统计数据</template>
                <el-menu-item index="1-1">j</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-submenu>
              <el-menu-item index="2"><i class="el-icon-menu"></i>用户管理</el-menu-item>
              <el-submenu index="3">
                <template slot="title"><i class="el-icon-message"></i>就诊管理</template>
                <el-menu-item index="3-1"><a href="treatment">预约就诊</a></el-menu-item>
                <el-menu-item index="3-2"><a href="treatmentS">已确定就诊</a></el-menu-item>
                <el-menu-item index="3-3"><a href="treatmentF">就诊退款</a></el-menu-item>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title"><i class="el-icon-message"></i>问诊管理</template>
                <el-menu-item index="4-1"><a href="askS">退款处理</a></el-menu-item>
                <el-menu-item index="4-2"><a href="askF">退款记录</a></el-menu-item>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title"><i class="el-icon-message"></i>肺炎疫苗</template>
                <el-menu-item index="5-1"><a href="treatment">第一针</a></el-menu-item>
                <el-menu-item index="5-2"><a href="treatment">第二针</a></el-menu-item>
                <el-menu-item index="5-3"><a href="treatment">第三针</a></el-menu-item>
                <el-menu-item index="5-4"><a href="treatment">完成记录</a></el-menu-item>
              </el-submenu>
              <el-menu-item index="10"><i class="el-icon-setting"></i>问诊列表(DOC)</el-menu-item>
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
</style>
