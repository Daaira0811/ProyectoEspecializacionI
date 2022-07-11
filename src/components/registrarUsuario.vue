<template>
  <div class="container">
    <div class="row justify-content-md-center" id="register">
      <div class="col-8" id="form-container">
        <div id="header">
          <h1>Registro Usuario</h1>
          <p>Ingrese sus datos para registrarse</p>
        </div>

        <form action class="form" @submit.prevent="registrar">
          <div class="col mb-3">
            <label class="form-label">Usuario</label>
            <input
              v-model="user.username"
              type="text"
              class="form-control"
              placeholder="usuario"
              :class="{ 'is-invalid': error && invalidUsuario }"
            />
          </div>

          <div class="col mb-3">
            <label class="form-label">Correo</label>
            <input
              v-model="user.email"
              type="email"
              class="form-control"
              placeholder="correo"
              :class="{ 'is-invalid': error && invalidCorreo }"
            />
          </div>

          <div class="col mb-3">
            <label class="form-label">Contraseña</label>
            <input
              v-model="user.password"
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
            <button class="btn btn-primary" type="submit">Registrarse</button>
          </div>
        </form>

        <div class="d-flex justify-content-center">
          <p id="pregunta">¿Ya tienes una cuenta?</p>
        </div>

        <div class="d-flex justify-content-center">
          <a type="button" class="btn btn-link" href="/login">Inicia Sesion</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "registrarUsuario",
  data: () => ({
    user: {
      id: "",
      username: "",
      email: "",
      password: "",
      sessions: {},
    },
    error: false,
  }),
  computed: {
    invalidUsuario() {
      return this.user.username.length < 1;
    },
    invalidCorreo() {
      return this.user.email.length < 1;
    },
    invalidContraseña() {
      return this.user.password.length < 1;
    },
  },
  methods: {
    registrar() {
      if (this.invalidUsuario || this.invalidCorreo || this.invalidContraseña) {
        this.error = true;
        return;
      } else {
        this.error = false;
        console.log(this.user.username);
        console.log(this.user.email);
        console.log(this.user.password);
        //window.location.href = "/login";
      }
    },
  },
};
</script>

<style scoped>
#register {
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
