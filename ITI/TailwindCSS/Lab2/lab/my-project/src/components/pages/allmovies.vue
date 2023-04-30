<template>
  <div>
    <h1 class="text-center border-b-2 m-auto my-4 text-red-600 w-48">All Movies</h1>
    <div class="grid grid-cols-6">
      <div v-for="movie in movies" :key="movie.id" class="m-2 col-span-6 md:col-span-3 lg:col-span-2">
        <div class="p-6 bg-slate-900 rounded h-[100%] shadow">
          <div class="border-red-600">
            <h5 class="text-slate-200 mb-2 font-mono">{{ movie.title }}</h5>
            <img class="rounded" :src=" 'https://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="poster">
            <h6 class="my-2 text-red-300">
              {{ movie.popularity?.toFixed(2) }}
            </h6>
            <p class="text-slate-400">
              {{ movie.overview }}
            </p>
            <button
              class="inline-flex items-center rounded-md bg-red-700 px-2 py-1 text-xs font-medium text-red-50 ring-1 ring-inset ring-red-600/10 me-4"
              @click="handleDelete(movie.id)"
            >
              delete
            </button>
            <router-link :to="`/movies/${movie.id}`" class="text-blue-400"
              >see more...</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "allMovies",
  data() {
    return {
      movies: [],
    };
  },
  created() {
    this.getAllMovies();
  },
  methods: {
    getAllMovies() {
      axios
        .get("http://localhost:2000/movies")
        .then((res) => {
          // console.log(res.data)
          this.movies = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleDelete(id) {
      axios
        .delete(`  http://localhost:2000/movies/${id}`)
        .then((res) => {
          // console.log(res.data)
          this.getAllMovies();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped></style>
