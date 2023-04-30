<template>
  <div class="">
    <button class="inline-flex items-center rounded-md bg-slate-700 px-2 py-1 text-xl font-bold text-blue-50 ring-1 ring-inset ring-slate-600/10 me-4 mt-4" @click="flag = true">review</button>
    <button class="inline-flex items-center rounded-md bg-slate-700 px-2 py-1 text-xl font-bold text-blue-50 ring-1 ring-inset ring-slate-600/10 me-4 mt-4" @click="flag = false">update</button>
    <h1 class="text-danger mt-4 mb-3">MovieDetails</h1>
    <div class="p-4 rounded bg-slate-900 grid border " v-if="flag">
      <div class="card-body text-white">
        <span class="text-xl me-2">{{ title }}</span>
        <span class="card-title text-red-500">{{ popularity }}</span>
        <p class="text-slate-500">
          {{ overview }}
        </p>
      </div>
      <button class="items-center rounded-md text-center bg-red-700 px-2 py-1 text-xl font-medium text-red-50 ring-1 ring-inset ring-slate-600/10 m-4 hover:bg-red-800" @click="back">back</button>
    </div>
    <div v-if="flag === false" >
      <form action="" @submit.prevent="updateMovie">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="title"
            v-model="title"
          />
          <label for="floatingInput">title</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="popularity"
            v-model="popularity"
          />
          <label for="floatingInput">popularity</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="overview"
            v-model="overview"
          />
          <label for="floatingInput">overview</label>
        </div>
        <button class="items-center rounded-md text-center bg-red-700 px-2 py-1 text-xl font-medium text-red-50 ring-1 ring-inset ring-slate-600/10 me-4 col-6 hover:bg-red-800">submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "movieDetails",
  data() {
    return {
      id: "",
      title: "",
      popularity: "",
      overview: "",
      flag: true,
    };
  },
  created() {
    this.getMovieById();
  },
  methods: {
    getMovieById() {
      this.id = this.$route.params.id;
      // console.log(this.id)
      axios
        .get(`http://localhost:2000/movies/${this.id}`)
        .then((res) => {
          //   console.log(res.data);
          this.title = res.data.title;
          this.popularity = res.data.popularity;
          this.overview = res.data.overview;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    back() {
      this.$router.push("/");
    },
    updateMovie() {
      this.id = this.$route.params.id;
      axios
        .put(`http://localhost:2000/movies/${this.id}`, {
          title: this.title,
          popularity: this.popularity,
          overview: this.overview,
        })
        .then((res) => {
          console.log(res.data);
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped></style>
