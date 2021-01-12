<template>
  <dashboard></dashboard>
  <button @click="toastr">Toastr</button>
  <button @click="swal">Sweet Alert</button>
</template>

<script>
import dashboard from "./components/Dashboard.vue";
export default {
  components: { dashboard },
  methods: {
    toastr() {
      toastr.error("Successsfully Included");
    },
    swal() {
      Swal.fire({
        title: "Error!",
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Cool",
      });
    },
  },
};
</script>

<style></style>
