import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import Sklad from "../views/Sklad.vue";
import Recepies from "../views/Recepies.vue";
import Orders from "../views/Orders.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  { path: "/sklad", name: "Sklad", component: Sklad },
  { path: "/recepies", name: "Recepies", component: Recepies },
  { path: "/orders", name: "Orders", component: Orders }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
