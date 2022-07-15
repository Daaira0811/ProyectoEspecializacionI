<template>
  <div class="container-md">
    <div class="col-10">
      <div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">USERNAME :</th>
              <th scope="col">SESSIONS :</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="user in data" :key="user.id">
              <td>{{ user.username }}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-outline-success"
                  @click="this.mostrarSesiones(user)"
                >
                  Ver sesiones
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      info: [],
      data: [],
    };
  },
  components: {},
  methods: {
    mostrarSesiones(usuario) {
      this.$router.push({
        name: "verSessiones",
        params: {
          id: usuario._id,
        },
      });
    },
  },
  mounted() {
    axios.get("http://localhost:3000/getAll").then((response) => {
      this.data = response.data;
    });
  },
};
</script>
<style scoped>
.container-md {
  display: flex;
  justify-content: center;
}
</style>
