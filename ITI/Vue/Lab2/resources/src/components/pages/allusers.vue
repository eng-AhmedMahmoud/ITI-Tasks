<template>
    <div>
<h1>allUsers</h1>
<table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">First_name</th>
      <th scope="col">Last_name</th>
      <th scope="col">gender</th>
    </tr>
  </thead>
  <tbody >
    <tr v-for="user in users" :key="user.id">
      <td >{{ user.id }}</td>
      <td>{{ user.first_name }}</td>
      <td>{{ user.last_name }}</td>
      <td>{{user.gender}}</td>
      <td><router-link :to="`/users/${user.id}`">see more</router-link></td>
      <td><button class="btn btn-sm btn-danger" @click="handleDelete(user.id)" >delete</button></td>
    </tr>

  </tbody>
</table>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name:'allUsers',
        data(){
            return{
                users:[]
            }
        },
        created(){
            this.getAllUsers()
        },
        methods:{
            getAllUsers(){
                axios.get('http://localhost:2000/users')
                .then((res)=>{
                    // console.log(res.data)
                    this.users = res.data
                })
                .catch((err)=>{
                    console.log(err)
                })
            },
            handleDelete(id){
                axios.delete(`  http://localhost:2000/users/${id}`)
                .then((res)=>{
                    console.log(res.data)
                    this.getAllUsers()
                }).catch((err)=>{
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>