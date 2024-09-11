<script>
import AppNav from "@/components/AppNav.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "AuthLayout",
  components: {
    AppNav,
    AppFooter,
  },
};
</script>

<template>
  <div class="app-layout auth-layout">
    <div class="app-navbar auth-navbar">
      <AppNav />
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
