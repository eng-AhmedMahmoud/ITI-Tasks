<template>
  <div>
    <h2>{{ shownComponent }}</h2>
    <button @click="shownComponent = 'Form'">Form</button>
    <button @click="shownComponent = 'Admin'">Admin</button>
    <button @click="shownComponent = 'User'">User</button>
    <template v-if="shownComponent == 'Form'">
      <form @submit.prevent="submitData">
        <label for="id">ID</label>
        <input
          type="number"
          id="id"
          v-model="currentData.id"
          name="id"
          placeholder="Enter id"
        />
        <br />
        <label for="name">Name</label>
        <input
          type="text "
          id="name"
          v-model="currentData.name"
          name="name"
          placeholder="Enter name"
        />
        <br />
        <label for="role">Role </label>
        <select
          name="role"
          id="role"
          v-model="currentData.role"
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button type="submit">Send</button>
      </form>
    </template>
    <template v-else-if="shownComponent == 'Admin'">
      <AdminType
        v-bind:adminsData="adminsData"
        @deleteAdmin="deleteAdmin"
      >
      </AdminType>
    </template>
    <template v-else>
      <UserType
        v-bind:usersData="usersData"
        @deleteUser="deleteUser"
      >
      </UserType>
    </template>
  </div>
</template>

<script>
import AdminType from "./components/AdminType.vue";
import UserType from "./components/UserType.vue";

export default {
  name: "App",
  components: { AdminType, UserType },
  data() {
    return {
      shownComponent: "Form",
      currentData: {
        id: 0,
        name: "",
        role: "",
      },
      adminsData: [],
      usersData: [],
    };
  },
  methods: {
    submitData() {
      // this.allData.push(this.currentData);
      if (this.currentData["role"] === "admin") {
        console.log("admin entered");
        this.adminsData.push(this.currentData);
      } 
      else {
        console.log("user entered");
        this.usersData.push({ ...this.currentData });
      }
      console.log("this is users data", this.usersData);
      console.log("this is admins data", this.adminsData);
    },
    deleteUser(id) {
      let user = this.usersData.find((el) => el.id == id);
      this.usersData = this.usersData.splice(
        this.usersData.indexOf(user),
        1
      );
      console.log("user deleted");
    },
    deleteAdmin(id) {
      let admin = this.adminsData.find((el) => el.id == id);
      this.adminsData = this.adminsData.splice(
        this.adminsData.indexOf(admin),
        1
      );
      console.log("admin deleted");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
div {
  margin: 0px 20px;
}
button {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #62e762;
  box-shadow: #2c3e50 1px 1px 1px 1px;
}
button:hover {
  background-color: #2c3e50;
  color: #62e762;
}
input {
  margin: 10px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #9beb9b;
  box-shadow: #2c3e50 1px 1px 1px 1px;
}
input:hover {
  background-color: #2c3e50;
  color: #62e762;
}
select {
  margin: 10px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #9beb9b;
  box-shadow: #2c3e50 1px 1px 1px 1px;
}
select:hover {
  background-color: #2c3e50;
  color: #62e762;
}
label {
  font-weight: bold;
  font-size: 20px;
  text-align: start;
}

</style>
