<template>
  <div>
    <h1>parent props</h1>
    <childProps
      staticData="ui"
      :dynamicData="dynamicData"
      @send="receivedData"
    />
  </div>
</template>

<script>
import childProps from "./child.vue";
export default {
  name: "parentProps",
  components: {
    childProps,
  },
  data() {
    return {
      dynamicData: "SD",
    };
  },
  methods: {
    receivedData(data) {
      alert(`data from child to parent ${data}`);
    },
  },
};
</script>

<style scoped></style>
