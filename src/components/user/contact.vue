<template>
  <div class="contentes">
    <div class="contacts">
      <div>姓名：刘德华</div>
      <div>年龄：23</div>
      <div>性别：23</div>
      <div>地址：成都</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'contact',
    mounted() {
      let items = document.getElementsByClassName('contacts');
      items =  Array.prototype.slice.call(items);
      items.map((item,i) => {
        item.addEventListener('touchstart', (e) => {
          let touch = event.targetTouches[0];
          let left = parseInt(item.style.left);
        }, false)
      })
    },
  };
</script>

<style scoped>
  .contentes{
    overflow: auto;
  }
  .contacts{
    padding: 1rem;
    background: #EFF2F7;
    border-bottom: 1px solid #E5E9F2;
    font-size: .8rem;
  }
</style>
