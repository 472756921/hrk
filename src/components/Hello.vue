<template>
  <div class="hello">
    <ul>
      <li><a href="#/public/reg">注册会员</a></li>
      <li><a href="user/reservation">预约就诊</a></li>
      <li><a href="user/ask">寻医问诊</a></li>
      <li><a>名医工作站</a></li>
    </ul>
    <ul>
      <li><a href="#/user/userInfo">会员信息</a></li>
      <li><a href="user/pneumonia">小儿肺炎疫苗</a></li>
      <li><a href="user/reservationStatus">查看预约状态</a></li>
      <li><a href="user/contact">管理关联联系人</a></li>
    </ul>
    <ul>
      <li><a>公司介绍</a></li>
      <li><a>健康知识</a></li>
      <li><a>更多功能</a></li>
      <li><a>网上商城</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
