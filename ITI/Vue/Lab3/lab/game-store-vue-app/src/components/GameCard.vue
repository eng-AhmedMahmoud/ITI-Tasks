<template>
    <div class="card m-2" style="width: 18rem;">
  <img class="card-img-top object-fit-cover" :src="info.thumbnail" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{ info.title }}</h5>
    <div style="height: 120px">
        <p class="card-text">{{ info.short_description }}</p>
    </div>
    <button @click="onGetDetails(info.id)" class="btn btn-primary">MORE INFO</button>
  </div>
</div>
</template>

<script>
import { useRouter } from 'vue-router';
    export default {
        name: 'GameCard',
        props: ['cardInfo'],
        setup (props) {

          const router = useRouter();
          let info = {...props.cardInfo}

          function onGetDetails (id) {
          router.push('/games/' + id);
        }
          return {
            onGetDetails,
            info
          }
        }
    }
</script>

<style scoped>
button {
    margin-top: 20px;
    position: relative;
    bottom: 10px;
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