<template>
  <div>
    <h1>createUser</h1>
    <form action="" @submit.prevent="createUser">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="first_name"
          v-model="first_name"
        />
        <label for="floatingInput">first_name</label>
      </div>  <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="last_name"
          v-model="last_name"
        />
        <label for="floatingInput">last_name</label>
      </div>  <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="gender"
          v-model="gender"
        />
        <label for="floatingInput">gender</label>
      </div>
      <button class="btn btn-dark">submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "createUser",
  data(){
    return{
        first_name:'',
        last_name:'',
        gender:''
    }
  },
  methods:{
    createUser(){
        axios.post("http://localhost:2000/users",{
            first_name :this.first_name,
            last_name :this.last_name,
            gender :this.gender,
        }).then((res)=>{
            console.log(res.data)
            this.$router.push('/')
        }).catch((err)=>{
            console.log(err)
        })
    }
  }
};
</script>

<style scoped></style>
