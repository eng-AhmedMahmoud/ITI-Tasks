<template>
    <div>
<h1>childInject</h1>
<subchildInject/>
    </div>
</template>

<script>
import subchildInject from './subchildinject.vue'
    export default {
        name:'childInject',
        components:{
            subchildInject
        }
    }
</script>

<style scoped>

</style>