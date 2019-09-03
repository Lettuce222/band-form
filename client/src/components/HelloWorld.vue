<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="toggle">toggle</button>
    <children :text="text"></children>
  </div>
</template>

<script>
import Children from "./Children.vue";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      text: "Text Message is",
      showText: true
    };
  },
  methods: {
    toggle: function() {
      this.showText = !this.showText;
    }
  },
  components: {
    Children
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
