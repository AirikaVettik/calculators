import Vue from "vue";
import VueRouter from "vue-router";
import Calculator from "../views/Calculator.vue";
import fuelCal from "../views/fuelCal.vue";
import salaryCal from "../views/salaryCal.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Kalkulaator",
    component: Calculator
  },
  {
    path: "/kütusekalkulaator",
    name: "Kütte kalkulaator",
    component: fuelCal
  },
  {
    path: "/palgakalkulaator",
    name: "Palga kalkulaator",
    component: salaryCal
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
