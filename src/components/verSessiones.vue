<template>
<div class="container-md">
        <h1 id="nombreUsuario">{{usuario.username}}</h1>
        <hr>

<div class="row">
    <div class="col">
         <h5 >Sesiones completadas</h5>
<div class="container-cards">
    <div v-for="sesion in usuario.sessions" :key="sesion.id">
    
    <div class="card ">
        <div class="card-header">ID: {{sesion.id}}</div>
        <div class="card-body">
            Date: {{sesion.date}}<br>
            Score: {{sesion.score}}<br>
            Duration: {{sesion.duration}}<br>
        </div>
        </div>
    </div>
    
</div>
    </div>
    <div class="col">
<div class="container-graphic">
    <canvas id="myChart" width="400" height="85vh"></canvas>
</div>
    </div>
</div>

</div>

</template>
<script>
import axios from 'axios'
import Chart from 'chart.js/auto';


export default {
    data() {
        return {
            data: [],
            usuario: {
                id: null,
                username: null,
                sessions:[]
            },
            sesiones: [],
            scoreSesiones:[]
        }
    },

    methods: {
        datosUsuario(data) {
            let id = this.$route.params.id
            console.log(id)
            
            data.find(user => {
                console.log(user.id)
                if (user.id == id) {
                    this.usuario.id = user.id;
                    this.usuario.username = user.username;
                    this.usuario.sessions = user.sessions;
                    console.log(this.usuario)
                    return true;
                }
            });
        },
        separarDatos() {
            this.usuario.sessions.forEach(sesion => {
                this.sesiones.push(String(sesion.id))
             //   console.log(this.sesiones)
                this.scoreSesiones.push(String(sesion.score))
           }
            )
        }

    },
  async mounted() {
      await axios
            .get('https://7qak3a37b4dh7kisebhllubdxq0dnehm.lambda-url.us-east-1.on.aws')
            .then((response) => {
                this.data = response.data
                this.datosUsuario(this.data)
                this.separarDatos()
            })

    

const ctx = document.getElementById('myChart');
console.log(this.sesiones)
const labels =this.sesiones;
const data = {
  labels: labels,
  datasets: [{
    label: 'Puntaje',
    data: this.scoreSesiones,
    fill: false,
    borderColor: 'rgb(255, 164, 032)',
    tension: 0.1
  }]
};

const myChart = new Chart(ctx, {
  type: 'line',
  data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
        myChart;
},
}




</script>

<style scoped>
.card {
    margin-top:5vh;
}
.container-cards{
     height: 75vh;
     overflow-y:auto
}
.container-graphic{
    align-items: center;
    margin-top:5vh;
    height: 70vh;
}
#nombreUsuario{
    margin:1em;
}

</style>