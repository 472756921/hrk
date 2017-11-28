<template>
  <div style="padding-bottom: 5rem">
    <div class="title">消息中心</div>
    <p class="Warning center" style="font-size: 1rem">如果医生长时间未回复，可以拨打客服电话投诉和退款</p>
    <div class="line2"></div>
    <div class="listContent" v-for="(item, i) in data" @click="go(item.status, item)">
      <div class="redpointer"  v-if="item.customer_read == 1"></div>
      <img :src=item.icon style="float:left;">
      <div class="textContent">
        <div>与 <span class="Blue">{{item.real_name}}</span> 的会话<small>（关联人：<span style="color: red;">{{item.contact}}</span>）</small></div>
        <div style="font-size: 1rem">最后沟通时间：{{item.last_update_date}}</div>
        <div class="Success" v-if="item.status == 1">正在进行
          <span class="op" @click="tksq(item.contactID, i)"> 申请退款 </span>
        </div>
        <div class="Success" v-if="item.status == 2">已完成</div>
        <div class="Warning" v-if="item.status == 3">退款中</div>
        <div class="danger" v-if="item.status == 4">已退款</div>
      </div>
    </div>
    <footeres class="footers"></footeres>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getConsultingListByCustomer } from '../interface';
  import footeres from '../public/footer';

  export default {
    name: 'userQuestionList',
    components: {footeres},
    data() {
      return {
        data: '',
      };
    },
    methods: {
      go(status, item) {
        if(status === 1) {
          this.$router.push({ name: 'question', params: {id: item.id, docName:item.real_name } })
        }
      },
      tksq(id, index) {
        window.event.stopPropagation();
        const r = confirm("申请退款后，将关闭会话，是否确认？")
        if (r === true) {
//          this.$message.error('对不起，该会话不满足退款条件');
          this.data[index].status = 3;
          return;
        }
      },
      getList(){
        this.$ajax({
          method: 'GET',
          url: getConsultingListByCustomer() + '?customer_id=6&&page=1',
        }).then((res) => {
          this.data = res.data.consultings;
        }).catch((error) => {
          this.$message.error(error.message);
        });
      },
    },
    created() {
      this.getList();
    },
  };
</script>

<style scoped>
  .title{
    font-size: 1.4rem;
    text-align: center;
  }
  .listContent{
    padding: .8rem;
    margin-bottom: .2rem;
    border-bottom: 1px solid #eee;
  }
  .textContent{
    margin: 0 0 0 4rem;
    line-height: 1.8rem;
    overflow: auto;
  }
  .op{
    color: #aaaaaa;
    font-size: 12px;
  }
  .redpointer{
    float: right;
    border-radius: 5px;
    width: 10px;
    height: 10px;
    background: #FF4949;
  }
  .footers{
    position: fixed;
    bottom: 0;
    left: 0;
    overflow: auto;
  }
</style>
