import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import PerpustakaanView from "../views/PerpustakaanView.vue";
import DashboardView from "../views/DashboardView.vue";
import FavoriteView from "../views/FavoriteView.vue";
import DetailView from "../views/DetailView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/perpustakaan",
    name: "perpustakaan",
    component: PerpustakaanView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/dashboard/favorite",
    name: "favorite",
    component: FavoriteView,
  },
  {
    path: "/detail",
    name: "detail",
    component: DetailView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
