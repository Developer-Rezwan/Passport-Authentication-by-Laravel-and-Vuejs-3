<template>
  <admin v-if="isLoggedIn"></admin>
  <auth v-else></auth>
</template>

<script>
import Admin from "./back-end/Admin.vue";
import Auth from "./auth/Auth.vue";
import { onMounted, reactive, ref } from "vue";
import { useStore } from "vuex";

export default {
  components: { Admin, Auth },
  setup() {
    const store = useStore();
    const isLoggedIn = ref(false);
    const data = reactive({});
    onMounted(() => {
      isLoggedIn.value = store.state.auth.isLoggedIn;
    });
    // All returned data goes here
    return { data, isLoggedIn };
  },
};
</script>

<style></style>
