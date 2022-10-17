import { createApp } from "vue";
import { TroisJSVuePlugin } from "troisjs";

import App from "./App.vue";

import "./assets/main.css";

const app = createApp(App);
app.mount("#app");

// plugins
app.use(TroisJSVuePlugin);
