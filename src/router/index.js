import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Demo1 from "../views/Demo1.vue";
import Demo2 from "../views/Demo2.vue";
import Demo3 from "../views/Demo3.vue";
import Demo4 from "../views/Demo4.vue";
import Demo5 from "../views/Demo5.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/demo1",
    name: Demo1,
    component: () =>
      import("../views/Demo1.vue")
  },
  {
    path: "/demo2",
    name: Demo2,
    component: () =>
      import("../views/Demo2.vue")
  },
  {
    path: "/demo3",
    name: Demo3,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Demo3.vue")
  },
  {
    path: "/demo4",
    name: Demo4,
    component: () =>
      import("../views/Demo4.vue")
  },
  {
    path: "/demo5",
    name: Demo5,
    component: () =>
      import("../views/Demo5.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
