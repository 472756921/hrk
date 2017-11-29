<template>
  <div style="padding-bottom: 5rem" ref="content">
    <el-row>
      <el-col :span="24">
        <div class="shadow"></div>
        <div :class="type?'head2':'head'">
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="">
                <i class="iconfont icon-shouye3"></i>成都市
              </div>
            </el-col>
            <el-col :span="8"><div style="text-align: center"><img src="http://iph.href.lu/60x20?text=logo"/></div></el-col>
            <el-col :span="8"><div style="text-align: right"><i class="iconfont icon-serch"></i></div></el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="24">
        <img src="../../assets/indexbk.png" width="100%"/>
      </el-col>
      <el-col :span="24">
        <div class="btnU btn_main">
          <div class="btnIcon_content"><i class="btnIcon iconfont icon-shouye6"></i></div>
          <div class="btn_text" style="color: #EB8B71;">和润康</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="btnU" @click="push('famousDoctorStudio')">
          <div class="btnIcon_content red"><i class="btnIcon iconfont icon-shouye10"></i></div>
          <div class="btn_text" style="color: #F8937E;">儿科名医</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="btnU" @click="push('pneumonia')">
          <div class="btnIcon_content green"><i class="btnIcon  iconfont icon-shouye20"></i></div>
          <div class="btn_text" style="color: #32B9B5;">肺炎疫苗</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="btnU" @click="push('ask')">
          <div class="btnIcon_content yellow"><i class="btnIcon iconfont icon-shouye9"></i></div>
          <div class="btn_text" style="color: #F79D2D;">在线咨询</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="btnU" @click="push('reservation')">
          <div class="btnIcon_content bule"><i class="btnIcon iconfont icon-shouye8"></i></div>
          <div class="btn_text" style="color: #0B90AA;">预约面诊</div>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="adImg">
          <img src="http://iph.href.lu/400x140?text=AD" width="100%"/>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="prod"><i class="iconfont icon-hot1" style="font-size: 1.4rem"></i> 热门推荐</div>
      </el-col>
      <el-col :span="12">
        <div class="prList">
          <img src="http://iph.href.lu/200x200?text=商品" width="99.5%"/>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="prList">
          <img src="http://iph.href.lu/200x200?text=商品" width="99.5%"/>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="prod"><i class="iconfont icon-shouye3" style="font-size: 1.4rem"></i> 附近</div>
      </el-col>
      <el-col :span="24">
        <div class="positionL">
          <div>XXX医院</div>
          <div>XXX医院</div>
          <div>XXX医院</div>
        </div>
      </el-col>
    </el-row>
    <footeres class="footers"></footeres>
  </div>
</template>

<script type="text/ecmascript-6">
import footeres from './footer';

export default {
  name: 'indexes',
  components: {footeres},
  mounted() {
    window.addEventListener('scroll', ()=>{this.menu()})
  },
  data () {
    return {
      type: false,
    }
  },
  methods: {
    push(name){
      this.$router.push({name:name})
    },
    menu() {
      let scroll = document.documentElement.scrollTop || document.body.scrollTop;
      console.log(scroll)
      if(scroll < 20) {
        this.type = false;
      } else {
        this.type = true;
      }
    },
  },
}
</script>

<style scoped>
  .head{
    position: fixed;
    padding: .6rem .4rem;
    width: 100%;
    color: #ffffff;
    box-sizing: border-box;
    z-index: 99;
  }
  .head2{
    z-index: 99;
    position: fixed;
    padding: .6rem .4rem;
    width: 100%;
    color: #000;
    background-color: #fff;
    box-sizing: border-box;
  }
  .shadow{
    box-shadow: 1px 1px 70px 10px rgba(0,0,0,.8);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .btnU{
    width: 4.4rem;
    height: 4rem;
    margin: 0 auto;
  }
  .btnIcon_content{
    text-align: center;
    line-height: 3.4rem;
    border: 1px solid #f9e8ea;
    border-radius: 50%;
    width: 3.4rem;
    box-shadow: 0px 3px 5px #f2e1e3;
    height: 3.4rem;
    padding: .4rem;
    background: #ffffff;
  }
  .btnIcon{
    font-size: 2.6rem;
  }
  .btn_text{
    margin-top: .2rem;
    text-align: center;
    font-size: 1rem;
  }
  .btn_main{
    margin: 0 auto;
    position: relative;
    top: -3rem;
  }
  .btn_main i{
    color: #EB8B71;
  }
  .red{
    background: #F8937E;
    color: #ffffff!important;
  }
  .green{
    background: #32B9B5;
    color: #ffffff!important;
  }
  .yellow{
    background: #F79D2D;
    color: #ffffff!important;
  }
  .bule{
    background: #0B90AA;
    color: #ffffff!important;
  }
  .adImg{
    margin-top: 3rem;
  }
  .prod{
    padding: 1rem;
    text-align: center;
    font-size: 1.3rem;
    color: #F8937E;
  }
  .prList{
  }
  .footers{
    position: fixed;
    bottom: 0;
  }
  .positionL{
    width:100%;
    padding: .4rem;
    box-sizing: border-box;
    line-height: 2rem;
    overflow: auto;
  }
</style>
