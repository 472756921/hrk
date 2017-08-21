<template>
  <div>
    <img src="http://iph.href.lu/150x200" class="center_block" />
    <br/>
    <h3 class="center">吴刚</h3>
    <div class="center">广寒宫医院</div>
    <div class="center">院长</div>
    <br/>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="简介" name="1">
        <div>吴刚，男，教授，主任医师，肝胆外科暨器官移植科副主任，1968年9月出生，博士，硕士生导师。中华医学会移植学分会青年委员，辽宁省医学会器官移植学分会、肝病学分会委员，辽宁省医学会外科学分会肝脏外科学组副组长。中国实用外科杂志编委。主要从事肝胆外科和器官移植的基础和临床研究，对普外科疾病特别是肝胆胰外科疾病诊断和治疗有一定造诣，能独立完成肝移植，胰肾联合移植，肾移植手术和各种复杂的肝胆胰外科手术。曾赴台湾高雄长庚纪念医院进修活体肝移植。近5年主持承担辽宁省科委和教育厅课题各1项、沈阳市科委课题1项，参加国家自然科学基金和省级课题6项。以第一作者在中华核心杂志上发表论文20余篇。参加编写《实用肝脾外科学》、翻译《肝脏移植》、《胰腺移植》等著作多部。作为第三完成人获教育部科技进步一等奖和辽宁省科技进步一等奖各1项。</div>
      </el-collapse-item>
    </el-collapse>
    <br/>
    <div>收费标准：<span class="danger">每次￥220.00</span></div>
    <br/>
    <br/>
    <br/>
    <br/>
    <el-button type="primary" class="center_block" @click="yy">立即付款咨询</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'docInfo',
  };
</script>

<style scoped>

</style>
