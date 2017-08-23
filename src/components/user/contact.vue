<template>
  <div class="contentes">
    <div class="contacts">
      <div>姓名：刘德华</div>
      <div>年龄：23</div>
      <div>性别：23</div>
      <div>地址：成都</div>
      <div class="del">删除</div>
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
          if (e.targetTouches.length == 1) {
            e.preventDefault(); // 阻止浏览器默认事件，重要
            let touch = e.targetTouches[0];
            let x = touch.pageX ;
            let mr = window.getComputedStyle(item.children[4]).marginRight;
            let mrV = mr.substring(0, mr.length-2);
            if (mrV < -10) {
              item.addEventListener('touchmove', function abc(e2) {
                e2.preventDefault();
                if (e2.targetTouches.length == 1) {
                  let mov = e2.targetTouches[0].pageX - x;
                  if (mov < Math.abs(mrV)) {
                    item.children[4].style.marginRight = parseInt(mrV) + parseInt(mov) + 'px';
                  }
                }
              }, false)
              item.addEventListener('touchend', function abcd(e3) {
                e3.preventDefault();
                let mr2 = window.getComputedStyle(item.children[4]).marginRight;
                let mrV2 = mr2.substring(0, mr2.length-2);
                if (mrV2 > -20) {
                  item.children[4].style.marginRight = 0;
                } else {
                  item.children[4].style.marginRight = mrV;
                }
              }, false)
            }
          }
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
    position: relative;
    overflow: hidden;
  }
  .del{
    position: absolute;
    background: red;
    right: 0;
    top: 0;
    padding: 2.5rem 1.5rem;
    color: #fff;
    font-size: 1rem;
    margin-right: -5rem;
  }
</style>
