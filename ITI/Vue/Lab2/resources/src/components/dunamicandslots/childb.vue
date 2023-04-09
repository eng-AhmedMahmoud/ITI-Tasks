<template>
  <div>
    <slot name="header"></slot>
    <h1>childB</h1>
    <input type="text" />
    <div class="header"></div>
    <div>
      <slot></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "childB",
};
</script>

<style scoped></style>
