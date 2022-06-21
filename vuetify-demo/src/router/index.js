import Vue from "vue";
import VueRouter from "vue-router";
import HomeComponent from "../views/Home.vue";
import UserLogin from "../views/UserLogin.vue";
import UserRegister from "../views/UserRegister.vue";
import carDetails from "../views/carDetails.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeComponent,
  },
  {
    path: "/register",
    name: "userregister",
    component: UserRegister,
  },
  {
    path: "/login",
    name: "userlogin",
    component: UserLogin,
  },
  {
    path: "/cardetails/:carId",
    name: "cardetails",
    component: carDetails,
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let isAuth = false;
  // const token = document.cookie.search("authUser");
  // if (token !== -1) {
  //   isAuth = true;
  // }
  if (window.$cookies.get("authUser")) {
    isAuth = true;
  }
  if (to.name === "userregister" && !isAuth) next();
  else if (to.name !== "userlogin" && !isAuth) next({ name: "userlogin" });
  else if ((to.name === "userlogin" || to.name === "userregister") && isAuth) {
    next({ name: "home" });
  } else next();
});

export default router;
