<script>
import AuthLayout from "@/layouts/AuthLayout.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";

export default {
  name: "App",
  components: {
    AuthLayout,
    DashboardLayout,
  },
  computed: {
    handleLayout: function () {
      if (this.$route.meta.layout === "auth") return "auth-layout";
      else return "dashboard-layout";
    },
  },
};
</script>

<template>
  <div id="app" ref="viewBox">
    <component id="app-container" :is="handleLayout">
      <router-view></router-view>
    </component>
  </div>
</template>

<style lang="scss"></style>
