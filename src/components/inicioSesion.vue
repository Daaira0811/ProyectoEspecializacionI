<template>
  <div class="container">
    <div class="row justify-content-md-center" id="login">
      <div class="col-8" id="form-container">
        <div id="header">
          <h1>Iniciar Sesión</h1>
          <p>Ingrese sus datos para iniciar sesión</p>
        </div>

        <form action class="form" @submit.prevent="login">
          <div class="mb-3">
            <label class="form-label">Usuario:</label>
            <input
              v-model="username"
              type="text"
              class="form-control"
              placeholder="usuario"
              :class="{ 'is-invalid': error && invalidUsuario }"
            />
          </div>

          <div class="mb-3">
            <label class="form-label">Contraseña:</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              placeholder="contraseña"
              :class="{ 'is-invalid': error && invalidContraseña }"
            />
          </div>
          <div class="mb3">
            <div v-if="error" class="alert alert-danger" role="alert">
              ¡Debes rellenar el campo!
            </div>
          </div>

          <div class="d-flex justify-content-center">
            <button class="btn btn-primary" type="submit">
              Iniciar Sesión
            </button>
          </div>
        </form>

        <div class="d-flex justify-content-center">
          <p id="pregunta">¿No tienes una cuenta?</p>
        </div>

        <div class="d-flex justify-content-center">
          <a type="button" class="btn btn-link" href="/registrar">Regístrate</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "inicioSesion",
  data: () => ({
    username: "",
    password: "",
    error: false,
  }),
  computed: {
    invalidUsuario() {
      return this.username.length < 1;
    },
    invalidContraseña() {
      return this.password.length < 1;
    },
  },
  methods: {
    login() {
      if (this.invalidUsuario || this.invalidContraseña) {
        this.error = true;
        return;
      } else {
        this.error = false;
        console.log(this.username);
        console.log(this.password);
      }
    },
  },
};
</script>

<style scoped>
#login {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
}
#form-container {
  width: 500px;
}
#pregunta {
  margin-top: 15px;
}
#header {
  text-align: center;
}
</style>
