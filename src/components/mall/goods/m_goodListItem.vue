<template>
  <div>
    <el-row :gutter="8" v-for="(it, i) in itemData" class="ite" key="i">
      <div @click="datie(it.id)">
        <el-col :xs="6" :sm="4" :md="4">
          <img :src=it.img width="100%"/>
        </el-col>
        <el-col :span="18">
          <div class="prdName">{{it.name}}</div>
          <div class="pr"><span class="price">¥{{it.price}}</span>  <span class="priceOr">¥{{it.priceOr}}</span></div>
          <div class="datai">{{it.barnd}} - {{it.totle}}人付款</div>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name: 'm_goodListItem',
      data(){
        return {
          itemData: [
            { id: 1, barnd: '公牛', name: '公牛插座无线 不带线插排接线板排插插线板正品家用电源插板无线',priceOr: 500, price: 490, totle: 359, img: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/125333958/TB2M1LzaE3IL1JjSZFMXXajrFXa_!!0-saturn_solar.jpg_250x250.jpg_.webp'},
            { id: 3, barnd: '公牛', name: '驰伟创意插排多功能usb电源插座带线排插线板家用接线板拖线板胙',priceOr: 350, price: 320, totle: 563, img: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/45186646/TB2govyaqaIJuJjSZFLXXbcTXXa_!!0-saturn_solar.jpg_250x250.jpg_.webp'},
            { id: 2, barnd: '公牛', name: '公牛插座插排插板带线家用多孔电源接线板5/6/10插位多功能拖线板',priceOr: 520, price: 518, totle: 345, img: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/3081425699/TB1fvjejbsTMeJjy1zeXXcOCVXa_!!0-item_pic.jpg_250x250.jpg_.webp'},
          ],
        };
      },
      methods: {
        datie(id) {
          this.$router.push({ path: 'm_good/'+id });
        },
      }
    };
</script>

<style scoped>
  .prdName{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .pr{
    padding: .4rem 0;
  }
  .price{
    color: red;
    font-size: 1rem;
  }
  .priceOr{
    color: #aaaaaa;
    font-size: .6rem;
    text-decoration: line-through;
  }
  .datai{
    color: #aaaaaa;
    font-size: .6rem;
  }
  .ite:nth-child(1){
    border-top: 1px solid #e4e4e4;
  }
  .ite{
    border-bottom: 1px solid #e4e4e4;
    padding: .4rem 0;
  }
</style>
