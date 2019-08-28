<template>
  <div class="cascader" v-click-outside="close">
    <div class="title" @click="toggle">

    </div>
    <div class="content" v-if="isVisble">
      现实的内容
    </div>
  </div>
</template>
<script>
/**
 * 可以在全局上挂在一个方法,当点击的时候校验一下点击的是否是cascade中  的内容
 *
 * 判断当前点击的是否存在耨个元素
 *
 * 如果你对某个元素拥有一系列的操作,可以封装一个指令来
 * click-outside
 */

import util from '../directives/clickOutside';

console.log(util);
export default {
  directives: {
    clickOutside: util.clickOutside,
  },
  methods: {
    close() {
      this.isVisble = false;
    },
    toggle() {
      this.isVisble = !this.isVisble;
    },
  },
  data() {
    return {
      isVisble: false,
    };
  },
};
</script>
<style lang="stylus">
  .cascader
    display inline-block
  .title
    width:150px
    height:30px
    border:1px solid red
</style>
