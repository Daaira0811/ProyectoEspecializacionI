<template>
  <header>
    <barraNavegacion />
  </header>
  <listaUsuarios />
</template>

<script>
import barraNavegacion from "../components/barraNavegacion.vue";
import listaUsuarios from "../components/listaUsuarios.vue";
export default {
  name: "UsuariosView",
  components: {
    barraNavegacion,
    listaUsuarios,
  },
};
</script>

<style></style>
