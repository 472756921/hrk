<template>
  <div style="margin-bottom: 3.4rem">
    <el-carousel height="20rem" arrow="never">
      <el-carousel-item v-for="item in goodDatile.img" :key="item">
        <img :src=item width="100%"/>
      </el-carousel-item>
    </el-carousel>
    <div class="datile">
      <h4 style="margin: .2rem 0">{{goodDatile.name}}</h4>
      <div>
        <span class="price">¥{{goodDatile.price}} </span>
        <span class="priceOr"> ¥{{goodDatile.priceOr}}</span>
      </div>
      <el-tag type="primary" v-show="goodDatile.isNew">新品</el-tag>
      <el-tag type="danger" v-show="goodDatile.hot">热卖</el-tag>
      <el-tag type="danger" v-show="goodDatile.promotion">促销</el-tag>
    </div>

    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="商品信息" name="first">商品信息</el-tab-pane>
      <el-tab-pane label="商品详情" name="second">商品详情</el-tab-pane>
      <el-tab-pane label="用户评价" name="third">用户评价</el-tab-pane>
    </el-tabs>

    <div  class="option">
      <el-row>
        <el-col :span="6" style="text-align: center;background: #1D8CE0;">
          <i class="iconfont icon-customservice" style="font-size: 2rem"  @click="kefu"></i>
        </el-col>
        <el-col :span="9" style="background: #F7BA2A;text-align: center;"><div @click="joinCar">加入购物车</div></el-col>
        <el-col :span="9" style="background: #FF4949;text-align: center;"><div @click="buyNow">立即购买</div></el-col>
      </el-row>
    </div>

    <div class="pridInfo" v-if="pridInfo">
      <i class="el-icon-close" style="float: right;" @click="close"></i>
      <h4>请选择购买数量</h4>
      <el-input-number size="small" v-model="num6" :min="1" :max="10"></el-input-number>
      <div class="btn" @click="pay">立即付款</div>
    </div>
    <div class="over" v-if="pridInfo"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import carousel from '../home/carousel';

  export default {
    name: 'm_good',
    data() {
      return {
        pridInfo: false,
        activeName: 'first',
        goodID: '',
        num6: 1,
        goodDatile: {
          img: ['https://img.alicdn.com/imgextra/i3/3316594860/TB2gBk5bUFWMKJjSZFvXXaenFXa_!!3316594860.jpg_640x640Q50s50.jpg','https://img.alicdn.com/bao/uploaded/TB16QvdNpXXXXaaXpXXXXXXXXXX_!!0-item_pic.jpg_320x320Q50s50.jpg_.webp', 'https://img.alicdn.com/bao/uploaded/TB1vvlzJXXXXXbmapXXXXXXXXXX_!!0-item_pic.jpg_320x320Q50s50.jpg_.webp'],
          price: 399,
          priceOr: 510,
          brand: '公牛',
          hot: true,
          isNew: true,
          promotion: true,
          name: '公牛抗电涌插座排插防雷保护接线板多功能电脑手机USB电源插排',
          totle: 203,
        },
      };
    },
    created() {
      this.goodID = this.$route.params.id;
    },
    methods: {
      handleClick(tab, event) {
      },
      kefu() {
        this.$message.warning('请在微信聊天框中直接输入您的问题！');
      },
      buyNow() {
        this.pridInfo = true;
      },
      pay() {
        this.$router.push({ name: 'gmjl'})
      },
      joinCar() {
        const va = confirm('确认将该商品加入购物车？');
        if (va) {

        }
      },
      close() {
        this.pridInfo = false;
      },
    },
  };
</script>

<style scoped>
  .datile{
    padding: .4rem;
  }
  .price{
    color: red;
    font-size: 1.2rem;
  }
  .priceOr{
    color: #999;
    text-decoration: line-through;
    font-size: .8rem;
  }
  .option{
    position: fixed;
    bottom: 0;
    width: 100%;
    color: #ffffff;
    height: 3.4rem;
    border-top: 1px solid #F7BA2A;
    line-height: 3.4rem;
  }
  .pridInfo{
    width: calc(100% - .8rem);
    background: #fff;
    position: fixed;
    padding: .4rem .4rem 1rem .4rem;
    bottom: 0;
    z-index: 3;
  }
  .btn{
    width:100%;
    margin-top: 3rem;
    background: red;
    color: #ffffff;
    text-align: center;
    font-size: 1.1rem;
    padding: .6rem 0;
  }
  .over{
    position: fixed;
    z-index: 2;
    background: #666;
    opacity: .7;
    width: 100%;
    height: 100%;
    top: 0;
  }
</style>
