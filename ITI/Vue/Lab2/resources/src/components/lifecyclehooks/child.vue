<template>
    <div>
<h1>childApp</h1>
    </div>
</template>

<script>
    export default {
        name:'childApp',
        beforeCreate(){
            console.log("child beforeCreate")
        },
        created(){
            console.log("child created")
        },
        beforeMount(){
            console.log("child beforeMount")
        },
        mounted(){
            console.log("child mounted")
        },
        beforeUpdate(){
            console.log("child beforeUpdate")
        },
        updated(){
            console.log("child updated")
        },
        beforeUnmount(){
            console.log("child beforeUnmount")
        },
        unmounted(){
            console.log("child unmounted")
        }
    }
</script>

<style scoped>

</style>