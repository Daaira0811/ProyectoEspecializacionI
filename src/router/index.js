import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import listaUsuarios from "../components/listaUsuarios";
import verSessiones from "../components/verSessiones";
import login from "../components/inicioSesion";
import registrarUsuario from "../components/registrarUsuario";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/listaUsuarios",
    name: "listaUsuarios",
    component: listaUsuarios,
  },
  {
    path: "/verSessiones/:id",
    name: "verSessiones",
    component: verSessiones,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/registrar",
    name: "registrar",
    component: registrarUsuario,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
