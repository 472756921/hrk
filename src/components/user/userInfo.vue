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
    <div class="text" @click="show('phone')">
      <span>联系电话</span>
      <span class="itemText">{{userInfo.phone}}</span>
    </div>
    <div class="line2"></div>
    <div class="text"  @click="show('address')">
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


    <el-dialog title="提示" :visible.sync="dialogVisible" size="large">
      <el-input  v-model="val" size="small">
        <template slot="prepend">{{text}}</template>
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="change">确 定</el-button>
      </span>
    </el-dialog>


  </div>
</template>

<script type="text/ecmascript-6">
  import { getUserinfo, updateCustomerMessage } from '../interface';

  export default {
    name: 'userInfo',
    data() {
      return {
        userInfo: '',
        dialogVisible: false,
        text: '',
        phone: '',
        address: '',
        val: '',
      };
    },
    created() {
      this.getUserInfo();
    },
    methods: {
      change() {
        let data;
        if(this.text === '电话号码') {
          data = {phone: this.val};
        }
        if(this.text === '联系地址') {
          data = {address: this.val};
        }
        if(this.val === '') {
          return;
        }
        this.$ajax({
          method: 'POST',
          data: data,
          url: updateCustomerMessage(),
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          if (res.data === 1) {
            this.$message.success('修改成功');
          }
          if(this.text === '电话号码') {
            this.userInfo.phone = this.val;
          }
          if(this.text === '联系地址') {
            this.userInfo.address = this.val;
          }
        }).catch((error) => {
          this.$message.error(error.message);
        });
        this.dialogVisible = false
      },
      show(val) {
        if (val === 'phone') {
          this.text = '电话号码';
          this.val = this.userInfo.phone;
        } else {
          this.text = '联系地址';
          this.val = this.userInfo.address;
        }
        this.dialogVisible = true;
      },
      getUserInfo() {
        this.$ajax({
          method: 'GET',
          url: getUserinfo(),
        }).then((res) => {
          this.userInfo = res.data;
        }).catch((error) => {
          this.$message.error(error.message);
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
