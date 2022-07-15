<template>
  <barraNavegacion />
  <div class="container-md">
    <h1>{{ usuario.username }}</h1>
    <hr />

    <div class="row">
      <div class="col">
        <h5>Sesiones completadas</h5>
        <div class="container-cards">
          <div v-for="sesion in usuario.session" :key="sesion.id">
            <div class="card">
              <div class="card-header">ID: {{ sesion.id }}</div>
              <div class="card-body">
                Date: {{ sesion.date }}<br />
                Score: {{ sesion.score }}<br />
                Duration: {{ sesion.duration }}<br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="container-graphic">
          <canvas id="myChart" width="400" height="400"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Chart from "chart.js/auto";
import barraNavegacion from "../components/barraNavegacion.vue";

export default {
  data() {
    return {
      data: [],
      usuario: {
        id: null,
        username: null,
        session: [],
      },
      sesiones: [],
      scoreSesiones: [],
    };
  },
  components: {
    barraNavegacion,
  },
  methods: {
    separarDatos() {
      this.usuario.session.forEach((sesion) => {
        this.sesiones.push(String(sesion.id));
        this.scoreSesiones.push(String(sesion.score));
        console.log(this.sesiones);
      });
    },
  },

  async mounted() {
    let id = this.$route.params.id;
    await axios.get(`http://localhost:3000/Users/${id}`).then((response) => {
      this.usuario.username = response.data.username;
      this.usuario.session = response.data.session;
    });
    this.separarDatos();

    const ctx = document.getElementById("myChart");
    console.log(this.sesiones);
    const labels = this.sesiones;
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Puntaje",
          data: this.scoreSesiones,
          fill: false,
          borderColor: "rgb(255, 164, 032)",
          tension: 0.1,
        },
      ],
    };

    const myChart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    myChart;
  },
};
</script>

<style scoped>
.card {
  margin-top: 5vh;
}
.container-cards {
  height: 82vh;
  overflow-y: auto;
}
.container-graphic {
  align-items: center;
  margin-top: 5vh;
  height: 80vh;
}
</style>
