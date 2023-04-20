<template>
    <div>
        <SliderComponent />
        <HeadGame class="mx-auto my-5"/>
        <MostRecommendation class="mx-auto my-5"/>
        <MostPopular class="mx-auto my-5"/>
        <!-- <div>hi {{ gameStore.randomGame }}</div> -->
        
    </div>
    
</template>

<script>
import SliderComponent from '../components/Slider.vue'
import HeadGame from '../components/headGame.vue';
import MostRecommendation from '@/components/MostRecommendation.vue';
import MostPopular from '@/components/MostPopular.vue';

    export default {
        name: 'HomePage',
        components: {
            SliderComponent,
            HeadGame,
            MostRecommendation,
            MostPopular
        },
        setup() {
            
            return {
            }
        }
    }
</script>

<style scoped>

</style>