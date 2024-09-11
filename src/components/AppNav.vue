<script>
import AuthNav from "./AuthNav.vue";
import DashboardNav from "./DashboardNav.vue";

export default {
  name: "AppNav",
  components: {
    AuthNav,
    DashboardNav,
  },
  computed: {
    userLogined() {
      return this.$store.state.users.userLogined;
    },
  },
};
</script>
<template>
  <template v-if="!userLogined">
    <AuthNav />
  </template>
  <template v-else>
    <DashboardNav />
  </template>
</template>
