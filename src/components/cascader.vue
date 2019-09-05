<template>
  <div class="cascader" v-click-outside="close">
    <div class="title" @click="toggle"></div>
    <div v-if="isVisible">
      <CascaderItem :options="options"></CascaderItem>
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

import util from "../directives/clickOutside";
import CascaderItem from "./CascaderItem.vue";

export default {
  components: {
    CascaderItem
  },
  directives: {
    clickOutside: util.clickOutside
  },
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    close() {
      this.isVisible = false;
    },
    toggle() {
      this.isVisible = !this.isVisible;
    }
  },
  data() {
    return {
      isVisible: false,
      currentSeletecd: null
    };
  }
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
