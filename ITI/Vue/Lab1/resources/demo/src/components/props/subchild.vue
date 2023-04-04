<template>
    <div>
<h1>subchildProps</h1>
<h2>from subchild {{ dynamicData }}</h2>
    </div>
</template>

<script>
    export default {
        name:'subchildProps',
        props:['dynamicData']
    }
</script>

<style scoped>

</style>