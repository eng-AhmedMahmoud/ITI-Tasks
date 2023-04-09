<template>
  <div>
    <button class="btn btn-dark " @click="flag = true">review</button>
    <button class="btn btn-dark ms-3" @click="flag = false">update</button>
    <h1>userDetails</h1>
    <div class="card" v-if="flag">
  <div class="card-body">
    <h5 class="card-title">{{ id }}</h5>
    <h5 class="card-title">{{ first_name }}</h5>
    <h5 class="card-title">{{ last_name }}</h5>
    <h5 class="card-title">{{ gender }}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <button class="btn btn-dark" @click="back">back</button>
</div>
<div v-if="flag === false">
    <form action="" @submit.prevent="updateUser">
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "userDetails",
  data() {
    return {
      id: "",
      first_name:'',
      last_name:'',
      gender:'',
      flag:true
    };
  },
  created() {
    this.getUserById();
  },
  methods: {
    getUserById() {
      this.id = this.$route.params.id;
      // console.log(this.id)
      axios
        .get(`http://localhost:2000/users/${this.id}`)
        .then((res) => {
        //   console.log(res.data);
        this.first_name=res.data.first_name;
        this.last_name = res.data.last_name;
        this.gender = res.data.gender
        })
        .catch((err) => {
          console.log(err);
        });
    },
    back(){
        this.$router.push('/')
    },
    updateUser(){
        this.id = this.$route.params.id
        axios.put(`http://localhost:2000/users/${this.id}`,{
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
  },
};
</script>

<style scoped></style>
