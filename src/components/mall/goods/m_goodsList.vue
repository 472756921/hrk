<template>
    <div style="padding: 0 .4rem">
      <h4 style="margin: .6rem 0">当前分类：设备</h4>
      <m_goodListItem></m_goodListItem>
    </div>
</template>

<script type="text/ecmascript-6">
  import m_goodListItem from './m_goodListItem';

  export default {
    name: 'm_goodsList',
    components: { m_goodListItem },
  };
</script>

<style scoped>

</style>
