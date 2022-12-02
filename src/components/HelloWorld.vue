<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <input class="" type="text" />
    <h3 class="text-[20px]">You’ve successfully created a project with</h3>
  </div>
</template>

<style scoped></style>
