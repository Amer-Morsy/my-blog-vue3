import { createStore } from "vuex";
import posts from "./modules/posts";
import users from "./modules/users";
import settings from "./modules/settings";

export default createStore({
  modules: {
    posts,
    users,
    settings,
  },
});
