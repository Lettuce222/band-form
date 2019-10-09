<template>
  <div>
    <b-button v-on:click="onMakeForm" variant="outline-primary">フォームの作成</b-button>
    <b-button v-on:click="onAnswerForm" variant="outline-primary">フォームの回答</b-button>
  </div>
</template>

<script>
export default {
  methods: {
    onMakeForm() {
      router.push("make");
    },
    onAnswerForm() {
      router.push("answer");
    }
  }
};
</script>
