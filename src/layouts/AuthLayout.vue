<script>
import AuthNav from "@/components/AuthNav.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "AuthLayout",
  components: {
    AuthNav,
    AppFooter,
  },
};
</script>

<template>
  <div class="app-layout auth-layout">
    <div class="app-navbar auth-navbar">
      <AuthNav />
    </div>

    <div class="app-content auth-content">
      <div class="app-content-container">
        <router-view class="main-content-container" />
        <div class="app-footer">
          <AppFooter />
        </div>
      </div>
    </div>
  </div>
</template>
