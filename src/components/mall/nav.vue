<template>
    <div>
      <el-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">
            <div style="font-weight: bold;margin: 0 0 1rem 0">全部分类</div>
            <span v-for="i in navItems" class="item">药品</span>
          </div>
        </div>
      </el-collapse-transition>
      <transition name="el-fade-in-linear">
        <div v-show="show3" class="over">.el-fade-in-linear</div>
      </transition>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name: 'nav',
      data(){
        return {
          show3: false,
          navItems: ['药品','药品','药品','药品','药品','药品'],
        }
      },
      methods: {
        show() {
          this.show3 = !this.show3;
        }
      },
    };
</script>

<style scoped>
  .transition-box {
    background-color: #eee;
    color: #324057;
    padding: 1.3rem;
    position: relative;
    z-index:120;
  }
  .item{
    padding: 0 .2rem;
  }
  .over{
    background: #666;
    opacity: .4;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index:100;
  }
</style>
