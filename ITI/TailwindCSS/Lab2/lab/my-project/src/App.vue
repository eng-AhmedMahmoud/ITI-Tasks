<template>
  <div>
    <navBar v-if="!$route.meta.hideNavbar" />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navBar from "./components/pages/navbar.vue";

export default {
  name: "App",
  components: {
    navBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
