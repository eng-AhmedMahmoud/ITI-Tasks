<template>
    <div>
<h1 v-bind="$attrs">parentProvide</h1>
<childInject/>
    </div>
</template>

<script>
import childInject from './childinject.vue'
    export default {
        name:'parentProvide',
        // provide:{
        //    staticName:'smart'
        // },
        provide(){
            return{
                staticName:'smart',
               name: this.dynamicData 
            }
        },
        inheritAttrs:false,
        components:{
            childInject
        },
        data(){
            return{
                dynamicData : 'SD'
            }
        }
    }
</script>

<style scoped>

</style>