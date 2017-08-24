<template>
  <div>
    <div class="listContent" v-for="(item, i) in data" @click="go(item.status)">
      <img :src=item.img style="float:left;">
      <div class="textContent">
        <div>与{{item.name}}生的会话<small>（关联人:{{item.contact}}）</small></div>
        <div class="Blue" v-if="item.status == 1">正在进行</div>
        <div class="Warning" v-if="item.status == 0">已完成</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'userQuestionList',
    data() {
      return {
        data: [
          {img: 'http://iph.href.lu/50x50', name: '周杰伦', status: 1, id: 1, contact: '王源', contactID: 12},
          {img: 'http://iph.href.lu/50x50', name: '刘德华', status: 0, id: 2, contact: '王宝强', contactID: 12},
          {img: 'http://iph.href.lu/50x50', name: '张学友', status: 0, id: 3, contact: '王指纹', contactID: 12},

        ],
      };
    },
    methods: {
      go(status) {
        if(status === 1) {
          this.$router.push({ name: 'question' })
        }
      },
    },
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
