<template>
  <HeaderComponent v-if="!$route.meta.hideHeader" />
  <router-view></router-view>
</template>

<script>
import HeaderComponent from './components/Header.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
  }
}
</script>

<style>
</style>
