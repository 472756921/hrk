<template>
  <div class="doccontent" ref="logonBG">
    <div class="infoContent">
      <input type="text" class="inputtype" placeholder="账号"/>
      <input type="password" class="inputtype" placeholder="密码"/>
      <el-radio class="radio" v-model="radio" label="1">管理员</el-radio>
      <el-radio class="radio" v-model="radio" label="2">专家</el-radio>
      <br/>
      <button class="loginBtn">登录</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'adminLogin',
    data() {
      return {
        radio: '1',
      };
    },
    mounted() {
      const w = document.body.clientWidth;
      const h = document.body.clientHeight;
      this.$refs.logonBG.style.height = h + 'px';
    },
  };
</script>

<style scoped>
  .doccontent{
    background: #aaa;
    color: #ffffff;
    font-size: 2rem;
    background: url("../../assets/login.jpg");
    background-repeat:no-repeat;
    background-size:100%;
    -moz-background-size:100%;
  }
  .infoContent{
    position: fixed;
    top: 50%;
    left: 50%;
    width:20%;
    height: 30%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    margin: 40px 0;
  }
  .inputtype{
    margin: 0 auto;
    border: 1px solid #888;
    border-radius: 5px;
    background: none;
    height: 30px;
    width: 100%;
    outline: none;
    padding-left: 5px;
    color: #ffffff;
    font-size: 14px;
  }
  .inputtype:focus{
    background-color: #777;
  }
  .loginBtn{
    color: #999;
    background: none;
    border: 1px solid #999;
    border-radius: 5px;
    padding: 8px 16px;
    font-size: 16px;
    margin-top: 20px;
    cursor: pointer;
  }
  .loginBtn:hover{
    border: 1px solid #ccc;
    color: #eee;
  }
  .radio{
    color: #ffffff;
  }
</style>
