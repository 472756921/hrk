<template>
  <div>
    <div class="userInfoHead">
      <el-row>
        <el-col :span="6">
          <div class="grid-content">
            <div>{{userInfo.beans}}</div>
            <div>余额</div>
            <button class="czBtn">充值</button>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="">
            <div class="round">
              <img src="http://iph.href.lu/98x98">
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <div>{{userInfo.real_name}}</div>
            <div>22岁 <i class="iconfont icon-nan sex" v-if="userInfo.gender == 0"></i><i class="iconfont icon-nv sex" v-if="userInfo.gender == 1"></i></div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="line"></div>

    <br/>
    <div class="text">
      <span>身份证号码</span>
      <span class="itemText">{{userInfo.id_number}}</span>
    </div>
    <div class="line2"></div>
    <div class="text">
      <span>联系电话</span>
      <span class="itemText">{{userInfo.phone}}</span>
    </div>
    <div class="line2"></div>
    <div class="text">
      <span>联系地址</span>
      <span class="itemText">{{userInfo.address}}</span>
    </div>
    <div class="line2"></div>
    <div class="text">
      <span>优惠券</span>
      <span class="itemText">
        <i class="iconfont icon-htbarrowright02"></i>
      </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getUserinfo } from '../interface';

  export default {
    name: 'userInfo',
    data() {
      return {
        userInfo: '',
      };
    },
    created() {
      this.getUserInfo();
    },
    methods: {
      getUserInfo() {
        this.$ajax({
          method: 'GET',
          url: getUserinfo(),
        }).then((res) => {
          this.userInfo = res.data;
        }).catch((error) => {
          console.log(error);
        });
      },
    },
  };
</script>

<style scoped>
  .userInfoHead{
    text-align: center;
    padding: 4rem 1rem;
    color: #fff;
    background: url("../../assets/userInfo.jpg");
  }
  .round{
    border: 1px solid #000;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    margin: 0 auto;
    overflow: hidden;
  }
  .grid-content{
    padding-top: 1.3rem;
  }
  .sex{
    font-size: .6rem;
  }
  .czBtn{
    background: #FF4949;
    border: none;
    color: #fff;
    border-radius: .2rem;
    padding: .1rem .4rem;
  }
  .text{
    padding: 0 .6rem;
    line-height: 1.6rem;
    color: #324057;
  }
  .itemText{
    float: right;
    color: #999;
    font-size: .8rem;
  }
</style>
