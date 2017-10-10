<template>
    <div>
      <carousel :imgdata="imgdata"></carousel>
      <m_index_item v-for="(it,i) in goodsItemData" :goodsItemData="it" key="i"></m_index_item>
    </div>
</template>

<script type="text/ecmascript-6">
  import carousel from './carousel';
  import m_index_item from './m_index_item';

    export default {
      name: 'm_home',
      components:{ carousel, m_index_item },
      data() {
        return {
          imgdata: ['static/p1.jpg','static/p2.jpg','static/p3.jpg'],
          goodsItemData: [
            {
              itemTitle: '新品推荐',
              godds: [{img: 'http://iph.href.lu/100x100',name: '葵花宝典'},{img: 'http://iph.href.lu/100x100',name: '九阳神功'},{img: 'http://iph.href.lu/100x100',name: '九阴真经'},{img: 'http://iph.href.lu/100x100',name: '吸星大法'}],
            },
            {
              itemTitle: '酬宾优惠',
              godds: [{img: 'http://iph.href.lu/100x100',name: '倚天剑'},{img: 'http://iph.href.lu/100x100',name: '屠龙刀'},{img: 'http://iph.href.lu/100x100',name: '干将'},{img: 'http://iph.href.lu/100x100',name: '莫邪'}],
            },
            {
              itemTitle: '热销商品',
              godds: [{img: 'http://iph.href.lu/100x100',name: '红药水'},{img: 'http://iph.href.lu/100x100',name: '蓝药水'},{img: 'http://iph.href.lu/100x100',name: '敌敌畏'},{img: 'http://iph.href.lu/100x100',name: '九转还魂丹'}],
            },
          ],
        }
      },
    };
</script>

<style scoped>

</style>
