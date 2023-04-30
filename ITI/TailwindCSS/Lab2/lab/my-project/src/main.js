import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import { createRouter, createWebHistory } from "vue-router"
import allMovies from './components/pages/allmovies.vue';
import createMovie from './components/pages/createmovie.vue';
import movieDetails from './components/pages/moviedetails.vue'
import errorApp from './components/pages/error.vue';

const routes =
  [
    {
      path: '/',
      component: allMovies,
      alias: "/movies"
    },
    {
      path: '/movies/:id',
      component: movieDetails
    },
    {
      path: '/create',
      component: createMovie
    },
    {
      path: '/:Notfound(.*)*',
      component: errorApp,
      meta: {
        hideNavbar: true
      }
    },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount('#app')
