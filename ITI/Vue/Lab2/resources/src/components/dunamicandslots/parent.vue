<template>
  <div>
    <h1>parentApp</h1>
    <button @click="active = 'childA'">childA</button>
    <button @click="active = 'childB'">childB</button>
    <button @click="active = 'childC'">childC</button>
    <childA v-if="active === 'childA'">
      <template #default>
        <div>
          <h1>slot from parent</h1>
        </div>
      </template>
    </childA>
    <childB v-if="active === 'childB'">
      <template v-slot:header>
        <h3>header</h3>
      </template>
      <template v-slot:default>
        <h3>unname</h3>
      </template>
      <template #footer>
        <h3>footer</h3>
      </template>
    </childB>
    <childC v-if="active === 'childC'">
      <template v-slot:default="slotProps">
        <div>
          <h2>{{ slotProps.fname }} {{ slotProps.lname }}</h2>
        </div>
      </template>
    </childC>
    <!-- <keep-alive>
      <component :is="active" />
    </keep-alive> -->
  </div>
</template>

<script>
import childA from "./childa.vue";
import childB from "./childb.vue";
import childC from "./childc.vue";
export default {
  name: "parentApp",
  components: {
    childA,
    childB,
    childC,
  },
  data() {
    return {
      active: "childA",
    };
  },
};
</script>

<style scoped></style>
