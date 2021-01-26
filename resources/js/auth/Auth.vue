<template>
  <router-view></router-view>
</template>

<script>
import { ref } from "vue";
import Login from "./Login.vue";
import Registration from "./Registration.vue";
export default {
  components: { Login, Registration },
};
</script>

<style></style>
