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
            <label class="form-label">Usuario</label>
            <input
              v-model="credenciales.username"
              type="text"
              class="form-control"
              placeholder="usuario"
              :class="{ 'is-invalid': error && invalidUsuario }"
            />
          </div>

          <div class="mb-3">
            <label class="form-label">Contraseña</label>
            <input
              v-model="credenciales.password"
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
import axios from "axios";
export default {
  name: "inicioSesion",
  data: () => ({
    credenciales: {
      username: "",
      password: "",
    },
    error: false,
  }),
  computed: {
    invalidUsuario() {
      return this.credenciales.username.length < 1;
    },
    invalidContraseña() {
      return this.credenciales.password.length < 1;
    },
  },
  methods: {
    login() {
      if (this.invalidUsuario || this.invalidContraseña) {
        this.error = true;
        return;
      } else {
        this.error = false;
        this.inicio();
      }
    },
    async inicio() {
      await axios
        .post("http://localhost:3000/login", this.credenciales)
        .then((response) => {
          const { user, token } = response.data;
          localStorage.setItem("user", JSON.stringify(user));
          console.log();
          localStorage.setItem("token", token);
          if (user.role === "Admin") {
            this.$router.push("/listaUsuarios");
          } else {
            this.$router.push({
              name: "verSessiones",
              params: {
                id: user._id,
              },
            });
          }
        })
        .catch((err) => console.log(err));
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
