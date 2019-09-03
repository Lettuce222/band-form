<template>
  <div class="hello">
    <input v-model="msg" placeholder="edit me" />
    <p>{{ text }}: {{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "Children",
  data() {
    return {
      msg: "Children"
    };
  },
  props: ["text"]
};
</script>
