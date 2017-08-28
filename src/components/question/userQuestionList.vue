<template>
  <div>
    <p class="Warning">如果医生长时间没有回复您，可以申请退款拨打客服电话投诉</p>
    <div class="listContent" v-for="(item, i) in data" @click="go(item.status)">
      <img :src=item.img style="float:left;">
      <div class="textContent">
        <div>与{{item.name}}生的会话<small>（关联人:{{item.contact}}）</small></div>
        <div class="Blue" v-if="item.status == 1">正在进行
          <br/>
          <span class="op" @click="tksq(item.contactID, i)"> 退款 </span>
        </div>
        <div class="Success" v-if="item.status == 0">已完成</div>
        <div class="Warning" v-if="item.status == 3">退款中</div>
        <div class="danger" v-if="item.status == 4">已退款</div>
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
          {img: 'http://iph.href.lu/50x50', name: '张学友', status: 4, id: 3, contact: '王指纹', contactID: 12},

        ],
      };
    },
    methods: {
      go(status) {
        if(status === 1) {
          this.$router.push({ name: 'question' })
        }
      },
      tksq(id, index) {
        window.event.stopPropagation();
        const r = confirm("申请退款后，将关闭会话，是否确认？")
        if (r === true) {
          this.$message.error('对不起，该会话不满足退款条件');
          this.data[index].status = 3;
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
    overflow: auto;
  }
  .op{
    color: #aaaaaa;
    font-size: 12px;
  }
</style>
