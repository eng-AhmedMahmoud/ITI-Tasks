<template>
    <div>
<h1>parentApp</h1>
<button @click="flag =! flag">show child</button>
<childApp :if="flag"/>
    </div>
</template>

<script>
import childApp from './child.vue'
    export default {
        name:'parentApp',
        components:{
            childApp
        },
        data(){
            return{
                flag:false
            }
        },
        beforeCreate(){
            console.log("parent beforeCreate")
        },
        created(){
            console.log("parent created")
        },
        beforeMount(){
            console.log("parent beforeMount")
        },
        mounted(){
            console.log("parent mounted")
        },
        beforeUpdate(){
            console.log("parent beforeUpdate")
        },
        updated(){
            console.log("parent updated")
        },
        beforeUnmount(){
            console.log("parent beforeUnmount")
        },
        unmounted(){
            console.log("parent nmounted")
        }
    }
</script>

<style scoped>

</style>