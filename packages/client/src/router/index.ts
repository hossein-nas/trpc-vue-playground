import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/my-name",
      name: "name",
      component: () => import("@/views/NameView.vue"),
    },
    {
      path: "/sum",
      name: "sum",
      component: () => import("@/views/SumView.vue"),
    },
    {
      path: "/todo",
      name: "todo",
      component: () => import("@/views/TodoView.vue"),
    },
  ],
});

export default router;
