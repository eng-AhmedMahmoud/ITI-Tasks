import { createApp } from "vue";
import App from "./App.vue";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// Router
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/Home.vue";
import ErrorPage from "./views/Error.vue";
import DetailsPage from "./views/Details.vue";
import MostPopularPage from "./views/MostPopularPage.vue";
import MostRecommendedPage from "./views/MostRecommendedPage.vue";

// Slider
import VueSplide from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

// Pinia
import { createPinia } from "pinia";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/games/:id",
    component: DetailsPage,
  },
  {
    path: "/popular",
    component: MostPopularPage,
  },
  {
    path: "/recommended",
    component: MostRecommendedPage,
  },
  {
    path: "/:NotFound(.*)*",
    component: ErrorPage,
    meta: {
      hideHeader: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(VueSplide).use(createPinia()).mount("#app");
