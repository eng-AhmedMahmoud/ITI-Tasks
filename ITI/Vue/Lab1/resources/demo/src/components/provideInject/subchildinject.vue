<template>
    <div>
<h1>subchildInject</h1>
<h2>{{ staticName }}</h2>
<h2>{{ name }}</h2>
    </div>
</template>

<script>
    export default {
        name:'subchildInject',
        inject:['staticName','name']
    }
</script>

<style scoped>

</style>