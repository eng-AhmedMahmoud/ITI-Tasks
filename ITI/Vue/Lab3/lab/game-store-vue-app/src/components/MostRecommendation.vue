<template>
        <div class="card mb-3 mx-auto" style="max-width: 900px;">
  <div class="row no-gutters p-4">
    <div class="d-flex justify-content-between">
      <h5 class="card-title">Most Recommendation</h5>
      <router-link to="/recommended" class="see">SEE ALL <svg xmlns="http://www.w3.org/2000/svg" width="7.41" height="12" viewBox="0 0 7.41 12">
        <path id="Shape" d="M-7.41,1.41-6,0,0,6l-6,6-1.41-1.41L-2.83,6Z" transform="translate(7.41)" fill="#572589"/>
        </svg>
    </router-link>
    </div>
  </div>
  <div class="cards d-flex">
    <GameCard v-for="game in gameStore.recommendedGames.slice(0,3)" :key="game.id" :cardInfo="game"/>
  </div>
</div>
</template>

<script>
import GameCard from './GameCard.vue';
import { useGameStore } from '@/stores/GameStore';
import { onMounted } from 'vue';
    export default {
        name: 'MostRecommendation',
        components: {
          GameCard
        },
        setup () {
          const gameStore = useGameStore();

          onMounted( () => {
            // fetch recommended Game
            gameStore.getRecommendedGames();
          })

          return {
            gameStore,
          }
        }
    }
</script>

<style scoped>
.see {
  color: #572589;
  cursor: pointer;
}
a{
  text-decoration: none;
}
</style>