<template>
    <div style="padding: 0 .4rem;">
      <h4 class="item">{{goodsItemData.itemTitle}}</h4>
      <el-row :gutter="10" style="width: 100%;margin: 0">
        <el-col :span="6" v-for="(it, i) in goodsItemData.godds" key="i">
          <div class="bg-purple" @click="good_datile(it.id)">
            <img :src=it.img width="100%"/>
            <div style="text-align: center;font-size: .6rem">{{it.name}}</div>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props: ['goodsItemData'],
      name: 'm_index_item',
      methods: {
        good_datile(id){
          this.$router.push({ path: 'm_good/'+id });
        },
      },
    };
</script>

<style scoped>
.item{
  padding: .6rem 0;
  margin: 0;
  color: #1D8CE0;
  font-size: .9rem;
}
  .bg-purple{
    color: #666;
  }
</style>
