<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Input />
    <div @click="HandleClick(`desc | user`)" :data="desc | user">{{ desc | user }}</div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

import { Input } from "element-ui";

export default {
  name: "app",
  data() {
    return {
      desc: "这个是"
    };
  },
  methods: {
    HandleClick(value) {
      let app = value;
      return app;
    }
  },
  components: {
    HelloWorld,
    Input
  },
  filters: {
    user(value) {
      return value;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
