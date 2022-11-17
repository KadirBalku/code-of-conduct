import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import Test from "@/pages/TestPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: { name: "main", params: { locale: "en" } },
    },
    {
      path: "/:locale",
      name: "main",

      component: HomePage,
    },
    {
      path: "/roe/:locale",
      name: "roe",
      component: Test,
    },
  ],
});

export default router;
