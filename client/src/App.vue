<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <any msg="Welcome to Your Vue.js App" />
    <button class="btn btn-primary">test</button>
  </div>
</template>

<script>
import any from "./components/HelloWorld.vue";
export default {
  name: "app",
  components: {
    any
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
