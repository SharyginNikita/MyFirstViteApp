import { createApp } from "vue";

import router from "./routers";
import apolloProvider from "./apollo";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.use(apolloProvider);
app.mount(".app");
