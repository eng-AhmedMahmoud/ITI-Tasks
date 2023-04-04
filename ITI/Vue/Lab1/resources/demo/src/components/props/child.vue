<template>
    <div>
<h2>childProps</h2>
<h2>track {{ staticData }}</h2>
<h2>{{ dynamicData }}</h2>
<subchildProps :dynamicData="dynamicData"/>
<button @click="$emit('send',name)">send data</button>
<input type="text" v-model="name">
    </div>
</template>

<script>
import subchildProps from './subchild.vue'
    export default {
        name:'childProps',
        components:{
            subchildProps
        },
        emits:['send'],
        props:['staticData','dynamicData'],
        data(){
            return{
                name:''
            }
        }
    }
</script>

<style scoped>

</style>b