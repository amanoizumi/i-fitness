<script>
import { onMounted } from "vue";

export default {
  setup() {
    const getList = () => {};

    onMounted(() => {
      getList();
    });
  },
};
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <WelcomeItem></WelcomeItem>
  </div>
</template>

<style></style>
