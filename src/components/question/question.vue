<template>
  <div>
    <div class="head center">
      <div class="titleB">吴刚</div>
      <div>主治医生</div>
    </div>
    <div class="talk">

    </div>
    <div class="ask">
      <textarea rows="4" maxlength="200"></textarea>
      <button class="send"  @click="send">发送</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import userSay from './userSay.vue';
  import docSay from './docSay.vue';

  export default {
    name: 'question',

    data() {
      return {
        sendMessage: '',
      };
    },
    methods: {
      send() {
        if (sendMessage === '') {
          return;
        }
      },
    },
  };
</script>

<style scoped>
  .head{
    background-color: #1D8CE0;
    color: #fff;
    padding: .6rem 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    margin: 0;
    height: 2.6rem;
  }
  .talk{
    margin-top: 4rem;
    width: 100%;
    overflow: auto;
    margin-bottom: 4.5rem;
  }
  .talkinfo{
    width: 65%;
    margin: 0 1rem;
    word-break: break-all;
    background-color: #D3DCE6;
    padding: .6rem;
    border-radius: .4rem;
    font-size: .8rem;
  }
  .doctalkinfo{
    float: left;
  }
  .doctalkinfo:before{
    position: absolute;
    margin-left: -1.2rem;
    content: ' ';
    display:block;
    width: 0;
    height: 0;
    border-width: 10px 10px 10px 0;
    border-style: solid;
    border-color: transparent #D3DCE6 transparent transparent;
  }
  .docSay{
    overflow: auto;
    margin-bottom: .6rem;
  }
  .usertalkinfo{
    float: right;
    background: #8492A6;
    color: #fff;
  }
  .usertalkinfo:before{
    float: right;
    margin-right: -1.1rem;
    content: ' ';
    display:block;
    width: 0;
    height: 0;
    border-width: 10px 0 10px 10px;
    border-style: solid;
    border-color: transparent transparent transparent #8492A6;
  }
  .userSay{
    overflow: auto;
    margin-bottom: .6rem;
  }
  .ask{
    position: fixed;
    width: 100%;
    left: 0;
    padding: 0;
    margin: 0;
    height: 4.1rem;
    border-top: 1px solid #D3DCE6;
    bottom: 0;
    background: #fff;
  }
  textarea{
    width: 68%;
    resize: none;
    border: none;
  }
  .send{
    font-family: Microsoft YaHei;
    width: 30%;
    float: right;
    height: 4.1rem;
    background: #1D8CE0;
    color: #fff;
    font-size: 1rem;
    border: none;
  }
  .send:active{
    background: #F7BA2A;
  }
</style>
