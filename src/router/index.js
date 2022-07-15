import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import verSessiones from "../components/verSessiones";
import login from "../components/inicioSesion";
import registrarUsuario from "../components/registrarUsuario";
import ListaUsuariosView from "../views/ListaUsuariosView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect: "/login"
  },
  {
    path: "/listaUsuarios",
    name: "listaUsuarios",
    component: ListaUsuariosView,
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
