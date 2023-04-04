<template>
 <div>
   <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
 </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      users: [
        {
          id: 1,
          role: "user",
          name: "ali",
          age: 30,
        },
        {
          id: 2,
          role: "user",
          name: "mahmoud",
          age: 40,
        },
        {
          id: 3,
          role: "user",
          name: "ashraf",
          age: 50,
        },
      ],
      Admins: [
        {
          id: 1,
          role: "admin",
          name: "ahmed",
          age: 30,
        },
        {
          id: 2,
          role: "admin",
          name: "mahmoud",
          age: 40,
        },
        {
          id: 3,
          role: "admin",
          name: "ashraf",
          age: 50,
        },
      ],
    };
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
