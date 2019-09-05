<template>
  <div class="content">
    <div class="content-left">
      <div class="label" v-for="(item, index) in options" :key="index + `a`" @click="select(item)">
        {{ item.label }}
      </div>
    </div>
    <div class="content-right">
      <div class="label" v-for="(item, index) in lists" :key="index + `a`">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CascaderItem",
  data() {
    return {
      currentSeletecd: null
    };
  },
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    lists() {
      return this.currentSeletecd && this.currentSeletecd.children;
    }
  },
  methods: {
    select(item) {
      this.currentSeletecd = item;
      // 把当前左边选中的那一项赋值给current
    }
  }
};
</script>

<style lang="stylus" scoped>
.content
    display flex
</style>
