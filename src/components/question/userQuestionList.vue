<template>
  <div>
    <div class="listContent">
      <img src="http://iph.href.lu/50x50" style="float:left;">
      <div class="textContent">
        <div>与周杰伦医生的会话</div>
        <div class="Blue">正在进行</div>
      </div>
    </div>
    <div class="listContent">
      <img src="http://iph.href.lu/50x50" style="float:left;">
      <div class="textContent">
        <div>与周杰伦医生的会话</div>
        <div class="Warning">已结束</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'userQuestionList',
  };
</script>

<style scoped>
  .listContent{
    padding: .8rem;
    background: #EFF2F7;
    margin-bottom: .2rem;
  }
  .textContent{
    margin: 0 0 0 4rem;
    line-height: 1.6rem;
  }
</style>
