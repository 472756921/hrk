<template>
  <div class="content">
    <div class="back"><i class="iconfont icon-back"></i> 返回</div>
    <br/>
    <el-row :gutter="10">
      <el-col :span="16">
        <div class="chart" id="chart">
          <span  v-for="(o, index) in egData">
            <UserSay v-if="o.re === 0" :content="o.content"></UserSay>
            <DocSay v-if="o.re === 1" :content="o.content"></DocSay>
          </span>
          <span id="nn"></span>
        </div>
        <div class="message">
          <el-row>
            <el-col :span="20">
              <textarea rows="4" maxlength="200" v-model="sendMessage"></textarea>
            </el-col>
            <el-col :span="2">
              <button class="send"  @click="send">发送</button>
            </el-col>
            <el-col :span="2">
              <button class="colse"  @click="colse">结束问题</button>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="userData">
          <div class="plan">
            <h4 class="center">生理指标</h4>
          </div>
          <el-row class="card" v-for="(o, index) in data" key="index">
            <el-col :span="12"><div>日期：{{o.date}}</div></el-col>
            <el-col :span="12"><div>月龄：{{o.age}}</div></el-col>
            <el-col :span="12"> <div>体重：{{o.weight}} KG</div></el-col>
            <el-col :span="12"><div>体温：{{o.temperature}} ℃</div></el-col>
            <el-col :span="12"><div>奶量：{{o.volume}} ML</div></el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import UserSay from '../question/userSay';
  import DocSay from '../question/docSay';

  export default {
    components: { UserSay, DocSay},
    name: 'chart',
    mounted(){
      const scrollDiv = document.getElementById('chart');
      const anchor = document.getElementById('nn').offsetTop;
      scrollDiv.scrollTop = anchor;
    },
    data() {
      return {
        sendMessage: '',
        egData: [
          {content: '你好问一下', re: 1},
          {content: '很好很好在那里', re: 0},
          {content: '很好很好在那里', re: 0},
          {content: '很好很好在那里', re: 0},
          {content: '很好很好在那里', re: 0},
          {content: '很好很好在那里', re: 0},
          {content: '很好很好在那里', re: 0},
          {content: '很好很好在那里', re: 0},
          {content: '很好很好在那里', re: 0},
          {content: '很好很好在那里', re: 0},
          {content: '很好很好在那里', re: 0},
          {content: '很好很好在那里', re: 0},
        ],
        data: [
          {age: 12, weight: 22, temperature: 36.3, volume: 124, date: '2012-12-13'},
          {age: 12, weight: 22, temperature: 36.3, volume: 124, date: '2012-12-12'},
          {age: 12, weight: 22, temperature: 36.3, volume: 124, date: '2012-12-11'},
          {age: 12, weight: 22, temperature: 36.3, volume: 124, date: '2012-12-10'},
        ],
      };
    },
    methods: {
      send() {
        if (this.sendMessage === '') {
          return;
        } else {
          const message = { content: this.sendMessage, re: 0};
          this.egData = [...this.egData, message];
          this.sendMessage = '';
          let anchor = document.getElementById('nn').offsetTop;
          console.log(anchor)
          anchor += 100;
          document.getElementById('chart').scrollTop = 2000;
        }
      },
      colse() {
        const r = confirm("确认关闭？关闭后用户将无法继续向您提问")
        if (r === true) {
          const id = rows[index].id;
          rows.splice(index, 1);
        }
      },
    },
  };
</script>

<style scoped>
  .content{
    overflow: auto;
  }
  .back:hover{
    cursor: pointer;
    color: #1D8CE0;
  }
  .chart{
    border: 1px solid #aaa;
    height: 500px;
    padding: 20px;
    overflow: auto;
    position: relative;
    padding-bottom: 60px;
  }
  .message  textarea{
    width: 100%;
    box-sizing:border-box;
    resize: none;
    height: 70px;
    font-size: 16px;
    padding: 4px;
    outline: none;
  }
  .send{
    color: #ffffff;
    font-size: 18px;
    width: 100%;
    background: #1D8CE0;
    border: none;
    height: 70px;
    outline: none;
    cursor: pointer;
  }
  .userData{
    border: 1px solid #aaa;
    height: 650px;
    overflow: auto;
  }
  .plan{
    background: #5a6378;
    color: #ffffff;
    padding: 10px;
  }
  .colse{
    background-color: #FF4949;
    color: #ffffff;
    font-size: 18px;
    width: 100%;
    border: none;
    outline: none;
    height: 70px;
    cursor: pointer;
  }
  .card{
    font-size: .8rem;
    background: #EFF2F7;
    padding: 1rem .6rem;
    border-radius: .2rem;
    margin-bottom: .2rem;
    line-height: 1.3rem;
  }
</style>
