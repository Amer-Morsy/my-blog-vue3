import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS
import "@/assets/css/app.scss";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

// Import the icons you want to use (example: solid icons)
import {
  faSignIn,
  faCoffee,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

// Add the icons to the library
library.add(faSignIn, faCoffee, faUser, faHeart);

createApp(App)
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
