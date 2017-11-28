<template>
  <div style="padding-bottom: 5rem">
    <div class="userInfoHead">
      <el-row>
        <el-col :span="6">
          <div class="grid-content">
            <div>大众会员</div>
            <button class="czBtn" @click="updataLive">升级</button>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="">
            <div class="round" @click="head">
              <img src="http://iph.href.lu/98x98" width="100%" height="100%">
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <div>{{userInfo.real_name}}</div>
            <div>22岁 <i class="iconfont icon-nan sex" v-if="userInfo.gender == 1"></i><i class="iconfont icon-nv sex" v-if="userInfo.gender == 0"></i></div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="optionPlan">
      <el-row :gutter="10">
        <el-col :span="6">
          <div class="btnU" style="background-color: #5d9243;">
            <div class="btnIcon_content"><i class="iconfont icon-shouye10"></i></div>
            <div class="btn_text">名医</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="btnU" style="background-color: #c28913;">
            <div class="btnIcon_content"><i class="iconfont icon-shouye9"></i></div>
            <div class="btn_text">咨询</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="btnU" style="background-color: #fd4a76;">
            <div class="btnIcon_content"><i class="iconfont icon-shouye20"></i></div>
            <div class="btn_text">疫苗</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="btnU" style="background-color: #72486c;">
            <div class="btnIcon_content"><i class="iconfont icon-shouye8"></i></div>
            <div class="btn_text">面诊</div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="line2"></div>
    <div class="text">
      <span><i class="iconfont icon-shouye1" style="color: #f92731;font-size: 1.6rem"></i> 身份证号码</span>
      <span class="itemText">{{userInfo.id_number}}</span>
    </div>
    <div class="line2"></div>
    <div class="text" @click="show('phone')">
      <span><i class="iconfont icon-shouye11" style="color: #61327a;font-size: 1.6rem"></i> 联系电话</span>
      <span class="itemText">{{userInfo.phone}}</span>
    </div>
    <div class="line2"></div>
    <div class="text"  @click="show('address')">
      <span><i class="iconfont icon-shouye3" style="color: #4ed269;font-size: 1.6rem"></i> 联系地址</span>
      <span class="itemText">{{userInfo.address}}</span>
    </div>
    <div class="line2"></div>
    <div class="text"  @click="shdz">
      <span><i class="iconfont icon-shouye14" style="color: #b18190;font-size: 1.6rem"></i> 收货地址</span>
      <span class="itemText">
        <i class="iconfont icon-htbarrowright02"></i>
      </span>
    </div>
    <div class="line2"></div>
    <div class="text"  @click="jl">
      <span><i class="iconfont icon-shouye12" style="color: #f8cc8b;font-size: 1.6rem"></i> 购买记录</span>
      <span class="itemText">
        <i class="iconfont icon-htbarrowright02"></i>
      </span>
    </div>
    <div class="line2"></div>
    <div class="text"  @click="jl">
      <span> <i class="iconfont icon-shouye5" style="color: #0596f1;font-size: 1.6rem"></i> 联系人</span>
      <span class="itemText">
        <i class="iconfont icon-htbarrowright02"></i>
      </span>
    </div>
    <div class="line2"></div>
    <footeres class="footers"></footeres>

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
  import footeres from '../public/footer';
  import { getUserinfo, updateCustomerMessage } from '../interface';

  export default {
    name: 'userInfo',
    components: {footeres},
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
      shdz() {
        this.$router.push({ name: 'shdz'})
      },
      jl() {
        this.$router.push({ name: 'gmjl'})
      },
      head() {
        this.$router.push({ name: 'userHeadUplode', params: { src: 'benson' }})
      },
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
      updataLive() {
        this.$router.push({ name: 'updataLive' });
      },
    },
  };
</script>

<style scoped>
  .optionPlan{
    background: #ffffff;
    padding: 1rem;
  }
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
    padding: .2rem .4rem;
  }
  .text{
    padding: .4rem .6rem;
    line-height: 1.6rem;
    color: #777;
  }
  .itemText{
    float: right;
    color: #DCC6C6;
    font-size: .8rem;
  }
  .footers{
    position: fixed;
    bottom: 0;
    left: 0;
    overflow: auto;
  }
  .line2{
    border-top: 1px solid #eee;
  }

  .btnIcon_content i{
    font-size: 2rem;
  }
  .btnU{
    text-align: center;
    color: #fff;
    padding: .3rem 0;
    border-radius: 4px;
  }
  .btn_text{
    font-size: 1rem;
  }
</style>
