<template>
<div class="container">
    <h1>{{usuario.username}}</h1>
    <div v-for="sesion in usuario.sessions" :key="sesion.id">
    <div class="card w-25">
        <div class="card-header">ID: {{sesion.id}}</div>
        <div class="card-body">
            Date: {{sesion.date}}<br>
            Score: {{sesion.score}}<br>
            Duration: {{sesion.duration}}<br>
        </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            data: [],
            usuario: {
                id: null,
                username: null,
                sessions:[]
            }


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
        }
    },
    mounted() {
        axios
            .get('https://7qak3a37b4dh7kisebhllubdxq0dnehm.lambda-url.us-east-1.on.aws')
            .then((response) => {
                this.data = response.data
                this.datosUsuario(this.data)
            })
}
}
</script>

<style scoped>
.card {
    margin-top:5vh
}
.container{
    margin:5vh;
    text-align: center;
}

</style>