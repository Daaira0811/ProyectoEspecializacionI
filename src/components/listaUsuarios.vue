<template>
<div class="container-md">
<div class="col-10">
<div>
    <table class="table table-hover">
        <thead>
<tr>
<!-- <th scope="col"> ID :</th>     -->
<th scope="col"> USERNAME :</th>    
<th scope="col"> SESSIONS :</th>      
</tr>
        </thead>
       <!--<tbody id="cuerpoTabla"> --> 
            <tbody>
                <tr v-for="user in data" :key="user.id">
                    <!-- <td>{{user.id}}</td> -->
                    <td>{{user.username}}</td>
                    <td><button type="button" class="btn btn-outline-success" @click="this.mostrarSesiones(user)">Ver sesiones</button></td>
                </tr>
        </tbody>
    </table>
</div>
</div>
</div>

</template>
<script>
import axios from 'axios';
//import verSessiones from '../components/verSessiones'
export default {
    data() {
        return {
            info: [],
            data:[]
        }
    },
    components: {
 //       verSessiones,
    },
    methods: {
        mostrarSesiones(usuario) {
            this.$router.push({
                name:  'verSessiones',
                params: {
                    id: usuario._id
                }
            });
           

        }

       /* rellenarTabla(data) {
            console.log(this.data)
            let tabla = document.getElementById('cuerpoTabla');
            data.forEach(element => {
                console.log(element)
               let id = element.id;
                console.log(id)
                let fila = '<tr>' +
                    '<td>' + element.id + '</td>' +
                    '<td>' + element.username + '</td>' +
                    '<td>' + '<button type="button" class="btn btn-outline-success" onclick="this.mostrarSesiones(id)">Success</button>'+ '</td>' +
                    '</tr>'
                   console.log(element.id)
                tabla.innerHTML += fila;
            });
            */
      
    },
    mounted() {
     axios
            .get('http://localhost:8080/getAll')
            .then((response) => {
              //  console.log("GET Response");
                this.data = response.data
             //   this.rellenarTabla(this.data)
            })
        //(this.info = response))
        //  console.log(JSON.stringify(this.info.data))
        // }
        
    },
}
</script>
<style scoped>
.container-md{
    display:flex;
    justify-content: center;
}

</style>