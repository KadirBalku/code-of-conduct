import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import Test from "@/pages/TestPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "locale",
    },
    {},
    {
      path: "/:locale",
      name: "locale",
      component: HomePage,
    },
    {
      path: "/test",
      name: "test",
      component: Test,
    },
  ],
});

export default router;
