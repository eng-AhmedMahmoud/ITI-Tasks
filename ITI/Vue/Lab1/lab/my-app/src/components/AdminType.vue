<template>
  <div>
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Role</th>
      </tr>
      <tr v-for="admin in adminsData" :key="admin.id">
        <td>{{ admin.id }}</td>
        <td>{{ admin.name }}</td>
        <td>{{ admin.role }}</td>
        <td>
          <button @click="$emit('deleteAdmin', admin.id)">
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "AdminType",
  props: ["adminsData"],
  emits: ["deleteAdmin"],
};
</script>

<style scoped></style>
