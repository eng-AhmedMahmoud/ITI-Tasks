<template>
    <div class="d-flex  align-items-center justify-content-around" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
">
        <Logo />
        <Icons />
    </div>
</template>

<script>
import Logo from './Logo.vue';
import Icons from './Icons.vue'
    export default {
        name: 'HeaderComponent',
        components: {
            Logo,
            Icons,
        }
    }
</script>

<style scoped>

</style>