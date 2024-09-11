<script>
import { mapGetters } from "vuex";
export default {
  name: "AuthNav",
  computed: {
    ...mapGetters(["userLogined"]),
  },
};
</script>
<template>
  <!-- Responsive navbar-->
  <nav class="navbar-container auth-container" ref="navbarContainer">
    <div class="prand">
      <div class="prand-container">
        <router-link class="link-with-icon" :to="{ name: 'Home' }">
          <img class="icon-lg logo-icon" src="@/assets/img/me.png" alt="" />
          <span class="link-title cut-1line">my blog</span></router-link
        >
      </div>
    </div>
    <div class="actions">
      <template v-if="!userLogined">
        <router-link class="actions-container" :to="{ name: 'LoginSignup' }">
          <div class="link-with-icon">
            <FontAwesomeIcon icon="sign-in" />
            <!-- <i class="fa fa-sign-in" aria-hidden="true"></i> -->
            <span class="link-title cut-1line">auth</span>
          </div>
        </router-link>
      </template>
      <template v-else>
        <router-link class="actions-container" :to="{ name: 'Dashboard' }">
          <div class="link-with-icon">
            <img class="icon-lg logo-icon" src="@/assets/img/me.png" alt="" />
            <span class="link-title cut-1line">dashboard</span>
          </div>
        </router-link>
      </template>
    </div>
  </nav>
</template>
