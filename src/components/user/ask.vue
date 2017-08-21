<template>
  <div>
    <div style="text-align: right"><a href="" >历史咨询</a></div>
    <DocList />
  </div>
</template>

<script type="text/ecmascript-6">
  import DocList from '../doc/docList.vue';

  export default {
    name: 'ask',
    components:{ DocList },
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
      }
    }
  };
</script>

<style scoped>

</style>
