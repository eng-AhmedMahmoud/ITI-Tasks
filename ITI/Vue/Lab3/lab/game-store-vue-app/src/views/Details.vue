<template>
    <div class="card mb-3 mx-auto my-5" style="max-width: 900px;">
  <div class="row no-gutters">
    <div class="col-md-12 mx-auto">
      <img :src="thumbnail" class="card-img" alt="game thumnail">
    </div>
    <div class="col-md-12">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ genre && genre.toUpperCase()  }}</p>
        <p class="card-text">{{ short_description }}</p>
        <p class="card-text"><small class="text-muted">Release Date: {{ release_date }}</small></p>
        <div @click="show = true" v-if="!show" class="more" href="#">Read more</div>
        <div class = "moreDetails col-md-12 mx-auto" v-if="show">
            <p class="card-text"> <strong>Game Description:</strong> {{ description }}</p>
            <div class="screen-shots">
                <p class="card-text"> <strong>Game Screen shots:</strong></p>
                <div v-for="screenshot in screenshots" :key="screenshot.id" class="col-md-12 mx-auto">
                <img :src="screenshot.image"  class="card-img" alt="game screenshots" style="margin: 10px 0px">
                </div>

            </div>
            <div @click="show = false" v-if="show" class="more" href="#">Read less</div>
        </div>
      </div>
    </div>
  </div>
</div>
<MostRecommendation />
</template>

<script>
import axios from 'axios';
import { useRoute } from 'vue-router'
import { onMounted, reactive, toRefs, ref } from 'vue';
import MostRecommendation from '@/components/MostRecommendation.vue';

    export default {
        name: 'DetailsPage',
        setup () {
            const route = useRoute();
            let show = ref(false);
            let game = reactive({
                id: 1,
                title: "",
                thumbnail:"",
                genre: "", 
                short_description: "",
                description: "",
                screenshots: [], 
                release_date: "" });

            onMounted(() => {
                getGameById();
            })

            function getGameById() {
            let id = route.params.id;
            const options = {
                method: "GET",
                url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
                params: { id: id },
                headers: {
                    "X-RapidAPI-Key":
                    "a9b8438c1cmshc8465468da9c36dp1e98d6jsn76d8e0b2fa77",
                    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
                }
            }
    
            axios
            .request(options)
            .then((response) => {
                game.id = response.data.id;
                game.title = response.data.title;
                game.thumbnail = response.data.thumbnail;
                game.genre = response.data.genre;
                game.short_description = response.data.short_description;
                game.description = response.data.description;
                game.release_date = response.data.release_date;
                game.screenshots = response.data.screenshots;

            })
            .catch(function (error) {
                console.error(error);
            });
            }
            return {
                getGameById,
                ...toRefs(game),
                show
            }
        },
        components: {
            MostRecommendation,
        }
    }
</script>

<style scoped>
.more {
    color: #572589;
    font-size: 0.8rem;
    cursor: pointer;
}
.moreDetails {
    margin-top: 20px;
}
</style>