<template>
  <div>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="待收货" name="first">
        <div class="items">
          <el-row :gutter="10" v-for="(it, i) in listData" key="i">
            <el-col :span="6"><img src="http://iph.href.lu/80x80" width="100%"/></el-col>
            <el-col :span="18">
              <div class="name">{{it.name}}</div>
              <div class="danger" style="text-align: left">¥{{it.price}}</div>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已购买" name="second">
        <div class="items">
          <el-row :gutter="10" v-for="(it, i) in listData2" key="i">
            <el-col :span="6"><img src="http://iph.href.lu/80x80" width="100%"/></el-col>
            <el-col :span="18">
              <div class="name">{{it.name}}</div>
              <div class="danger" style="text-align: left">¥{{it.price}}</div>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'gmjl',
    data() {
      return {
        activeName: 'first',
        listData: [{name:'公牛抗电涌插座排插防雷保护接线板多功能电脑手机USB电源插排', price: 123.00}, {name:'公牛抗电涌插座排插防雷保护接线板多功能电脑手机USB电源插排', price: 123.00}, ],
        listData2: [{name:'阿斯顿发生的发生的发生的反', price: 123.00}, {name:'我儿砸收费的GV是的符合程序的是发给', price: 123.00}, ],
      };
    },
  };
</script>

<style scoped>
.items{
  padding: .4rem;
}
.name{
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
