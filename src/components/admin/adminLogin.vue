<template>
  <div class="doccontent" ref="logonBG">
    <div class="center titleA">和润康管理系统</div>
    <div class="infoContent">
      <input type="text" class="inputtype" placeholder="账号" v-model="u"/>
      <input type="password" class="inputtype" v-model="p" placeholder="密码"/>
      <el-radio class="radio" v-model="radio" label="1">管理员</el-radio>
      <el-radio class="radio" v-model="radio" label="2">专家</el-radio>
      <br/>
      <button class="loginBtn" @click="login">登录</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { userLogin } from '../interface';

  export default {
    name: 'adminLogin',
    data() {
      return {
        radio: '1',
        u: '',
        p: '',
      };
    },
    methods: {
      login() {
        if (this.u == '' || this.p == '') {
          this.$message.error('请输入账号和密码');
          return ;
        }
        const data = {
          account: this.u,
          pass_word: this.p,
          type: this.radio,
        };
        this.$ajax({
          method: 'post',
          url: userLogin(),
          data: data,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          sessionStorage.setItem('user', JSON.stringify(res.data));
          sessionStorage.setItem('type', this.radio);
          this.$router.push({ name: 'admin' });
        }).catch((error) => {
          this.$message.error('账号或密码错误');
        });
      },
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
    font-size: 2rem;
  }
  .titleA{
    padding: 40px;
  }
  .infoContent{
    width: 500px;
    padding: 60px;
    margin: 0 auto;
  }
  .inputtype{
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: none;
    height: 30px;
    width: 100%;
    outline: none;
    padding-left: 5px;
    color: #333;
    font-size: 14px;
  }
  .inputtype:focus{
    background-color: #eee;
  }
  .loginBtn{
    color: #666;
    background: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 8px 16px;
    font-size: 16px;
    margin-top: 20px;
    cursor: pointer;
  }
  .loginBtn:hover{
    border: 1px solid #aaa;
    color: #333;
  }
  .radio{
    color: #666;
  }
</style>
