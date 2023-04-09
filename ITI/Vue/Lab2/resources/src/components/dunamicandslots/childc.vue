<template>
  <div>
    <h1>childC</h1>
    <div v-for="name in names" :key="name">
      <slot :fname="name.fname" :lname="name.lname"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "childC",
  data() {
    return {
      names: [
        {
          fname: "ali",
          lname: "omar",
        },
        {
          fname: "mhmd",
          lname: "ahmd",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
