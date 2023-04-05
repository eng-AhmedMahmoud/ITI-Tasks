<template>
  <table>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Role</th>
    </tr>
    <tr v-for="item in usersData" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.role }}</td>
      <td>
        <button @click="$emit('deleteUser', item.id)">
          Delete
        </button>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "UserType",
  props: ["usersData"],
  emits: ["deleteUser"],

  data() {
    return {};
  },
};
</script>

<style scoped></style>
