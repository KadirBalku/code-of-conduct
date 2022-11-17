import { createRouter, createWebHistory } from "vue-router";
import ConductPage from "@/pages/ConductPage.vue";
import RoePage from "@/pages/RoePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: { name: "roe", params: { locale: "en" } },
    },
    {
      path: "/conduct/:locale",
      name: "conduct",
      component: ConductPage,
    },
    {
      path: "/roe/:locale",
      name: "roe",
      component: RoePage,
    },
  ],
});

export default router;
