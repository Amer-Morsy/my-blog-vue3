<script>
import DashboardNav from "@/components/DashboardNav.vue";
import AppFooter from "@/components/AppFooter.vue";
import generalMixins from "@/utils/generalMixins";

export default {
  name: "DashboardLayout",
  mixins: [generalMixins],
  components: {
    DashboardNav,
    AppFooter,
  },
};
</script>
<template>
  <div class="app-layout dashboard-layout">
    <div class="app-navbar dashboard-navbar">
      <DashboardNav />
    </div>
    <div class="app-content dashboard-content">
      <div class="app-content-container">
        <div
          class="dashboard-content-container"
          :class="isSidebarOpened ? 'sidebar-opend' : 'sidebar-closed'"
        >
          <div
            class="dashboard-sidebar"
            :class="isSidebarOpened ? 'sidebar-opend' : 'sidebar-closed'"
          >
            <div class="sidebar-container">
              <ul class="sidebar-list">
                <li class="sidebar-item">
                  <router-link
                    title="my blog"
                    class="link-with-icon"
                    :to="{ name: 'test' }"
                  >
                    <img
                      class="icon-lg logo-icon"
                      src="@/assets/img/me.png"
                      alt=""
                    />
                    <span class="link-title cut-1line">Test</span></router-link
                  >
                </li>
                <li class="sidebar-item">
                  <router-link
                    title="my blog"
                    class="link-with-icon"
                    :to="{ name: 'Home' }"
                  >
                    <img
                      class="icon-lg logo-icon"
                      src="@/assets/img/me.png"
                      alt=""
                    />
                    <span class="link-title cut-1line"
                      >my blog</span
                    ></router-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <router-view
            class="main-content-container"
            :class="isSidebarOpened ? 'sidebar-opend' : 'sidebar-closed'"
          />
        </div>

        <div class="app-footer">
          <AppFooter />
        </div>
      </div>
    </div>
  </div>
</template>
