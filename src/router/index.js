import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import HomeView from "../views/home/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: {
      title: "Home",
      visibale: false,
      layout: "auth",
    },
  },
  {
    path: "/login-signup",
    name: "LoginSignup",
    component: () => import("@/views/test/LoginSignup.vue"),
    meta: {
      title: "Login",
      visibale: true,
      layout: "auth",
    },
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/views/test/TestView.vue"),
    meta: {
      title: "Test",
      visibale: true,
      layout: "dashboard",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFoundView.vue"),
    meta: {
      title: "NotFound",
      visibale: false,
      layout: "auth",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | My Blog`;

  if (!store.state.users.userLogined && to.name !== "LoginSignup") {
    return next({ name: "LoginSignup" });
  }
  return next();
});

export default router;
