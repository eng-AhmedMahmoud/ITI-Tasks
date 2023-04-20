<template>
    <div>
        <!-- <CategoryComponent v-for="category in categories" :key="category" :category="category" /> -->
        <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
    <SplideSlide class="d-flex m-4 flex-wrap">
        <CategoryComponent class="my-2 mx-sm-4 my-sm-1" @click="genreClicked" v-for="category in categories1" :key="category" :category="category" />
    </SplideSlide>
    <SplideSlide class="d-flex m-4 flex-wrap">
        <CategoryComponent class="my-2 mx-sm-4 my-sm-1" @click="genreClicked" v-for="category in categories2" :key="category" :category="category" />
    </SplideSlide>
    <SplideSlide class="d-flex m-4 flex-wrap">
        <CategoryComponent class="my-2 mx-sm-4 my-sm-1" @click="genreClicked" v-for="category in categories3" :key="category" :category="category" />
    </SplideSlide>
    <SplideSlide class="d-flex m-4 flex-wrap">
        <CategoryComponent class="my-2 mx-sm-4 my-sm-1" @click="genreClicked" v-for="category in categories4" :key="category" :category="category" />
    </SplideSlide>
  </Splide>
    </div> 
    
</template>

<script>
import CategoryComponent from "./Category.vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide';

    export default {
        name: 'SliderComponent',
        components: {
            CategoryComponent,
            Splide,
            SplideSlide
        },
        setup(){
            let categories1 = ['mmorpg', 'shooter', 'strategy', 'moba', 'racing', 'sports', 'social', 'sandbox', 'open-world', 'survival', 'pvp', 'pve',];
            let categories2 = ['pixel', 'voxel', 'zombie', 'turn-based', 'first-person', 'third-Person', 'top-down', 'tank', 'space', 'sailing', 'side-scroller'];
            let categories3 = ['superhero', 'permadeath', 'card', 'battle-royale', 'mmo', 'mmofps', 'mmotps', '3d', '2d', 'anime', 'fantasy', 'sci-fi'];
            let categories4 = ['fighting', 'action-rpg', 'action', 'military', 'martial-arts', 'flight', 'low-spec', 'tower-defense', 'horror', 'mmorts'];

            function genreClicked (event) {
                event.target.classList.toggle('clicked');
            }
        return {
            categories1,
            categories2,
            categories3,
            categories4,
            genreClicked
        }
        }
    }
</script>

<style scoped>
div {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background: white;
}
</style>