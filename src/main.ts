// import axios from "axios";
import { createApp } from 'vue'
import { createRouter, createWebHashHistory, Router } from "vue-router";
import App from "./App.vue";

import Home from "./pages/Home.vue";
import Cocktail from "./pages/Cocktail.vue";
import Cantina from "./pages/Cantina.vue";
import Caffe from "./pages/Caffe.vue";
import Ristorante from "./pages/Ristorante.vue";
import NotFound from "./pages/Notfound.vue";

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: "/", component: Home},
        {path: "/cocktail", component: Cocktail},
        {path: "/wine", component: Cantina},
        {path: "/coffee", component: Caffe},
        {path: "/rist", component: Ristorante},
        { path: "/:pathMatch(.*)*", component: NotFound },
    ],
});

createApp(App).use(router).mount("#app");