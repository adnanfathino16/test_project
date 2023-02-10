import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/blog/Index.vue";
import ArtikelDetail from "../views/blog/Detail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/blog",
    name: "blog",
    component: Index,
  },
  {
    path: "/artikel/:id",
    name: "artikel-detail",
    component: ArtikelDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
