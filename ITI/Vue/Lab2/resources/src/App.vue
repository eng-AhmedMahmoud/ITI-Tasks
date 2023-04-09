<template>
  <div>
    <navBar v-if="!$route.meta.hideNavbar" />
    <div class="container">
      <router-view></router-view>
    </div>
    <!-- <parentApp/> -->
  </div>
</template>

<script>
import navBar from "../../resources/src/components/pages/navbar.vue";
// import parentApp from './components/lifecyclehooks/parent.vue'
export default {
  name: "App",
  components: {
    // parentApp,
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
  margin-top: 60px;
}
</style>
