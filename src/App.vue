<script>
import { inject, onMounted } from "vue";

export default {
  setup() {
    const axios = inject("axios"); // inject axios

    const getList = () => {
      axios.get("https://randomuser.me/api/").then((response) => {
        console.log(response.data);
      });
    };

    onMounted(() => {
      getList();
    });
  },
};
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
