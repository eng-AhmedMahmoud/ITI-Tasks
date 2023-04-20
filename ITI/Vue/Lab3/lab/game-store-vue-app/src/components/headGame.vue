<template>
    <div class="card mb-3" style="max-width: 900px;">
  <div class="row no-gutters ">
    <div class="col-md-7">
      <img :src="gameStore.randomGame.thumbnail" class="card-img" alt="...">
    </div>
    <div class="col-md-4">
      <div class="card-body">
        <h5 class="card-title">{{ gameStore.randomGame.title }}</h5>
        <p class="card-text">{{ gameStore.randomGame.genre && gameStore.randomGame.genre.toUpperCase()  }}</p>
        <p class="card-text">{{ gameStore.randomGame.short_description }}</p>
        <p class="card-text"><small class="text-muted">Release Date: {{ gameStore.randomGame.release_date }}</small></p>
        <button @click="onGetDetails(gameStore.randomGame.id)" class="btn btn-primary">MORE INFO</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { useGameStore } from '@/stores/GameStore';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'

    export default {
        name: 'HeadGame',
        setup () {
          const gameStore = useGameStore();
          const router = useRouter();

          onMounted( () => {
            // fetch random Game
            gameStore.getRandomGame(); 
          })
          
          function onGetDetails (id) {
          router.push('/games/' + id);
        }
          return {
            gameStore,
            onGetDetails
          }
        }
    }
</script>

<style scoped>
button {
    margin-top: 20px;
    width: 100%;
    background: #572589;
    border: #572589 solid 1px;
}
button:hover {
    margin-top: 20px;
    width: 100%;
    background: #633d89;
    border: #572589 solid 1px;
}
button:active {
    margin-top: 20px;
    width: 100%;
    background: #633d89;
    border: #572589 solid 1px;
}
</style>