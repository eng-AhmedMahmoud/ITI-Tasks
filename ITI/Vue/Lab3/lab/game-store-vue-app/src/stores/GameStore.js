import { defineStore } from "pinia";
import axios from "axios";

export const useGameStore = defineStore("gameStore", {
  state: () => ({
    randomGame: "",
    loading: false,
    recommendedGames: "",
    popularGames: "",
  }),
  actions: {
    getRandomGame() {
      this.loading = true;
      const options = {
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
        params: { id: "500" },
        headers: {
          "X-RapidAPI-Key":
            "a9b8438c1cmshc8465468da9c36dp1e98d6jsn76d8e0b2fa77",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };
      axios
        .request(options)
        .then((response) => {
          this.randomGame = response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
      this.loading = false;
    },
    getRecommendedGames() {
      this.loading = true;
      const options = {
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
        params: {
          platform: "browser",
          category: "mmorpg",
          "sort-by": "release-date",
        },
        headers: {
          "X-RapidAPI-Key":
            "a9b8438c1cmshc8465468da9c36dp1e98d6jsn76d8e0b2fa77",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then((response) => {
          this.recommendedGames = response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
      this.loading = false;
    },
    getPopularGames() {
      this.loading = true;
      const options = {
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
        params: {
          platform: "browser",
          category: "mmorpg",
          "sort-by": "popularity",
        },
        headers: {
          "X-RapidAPI-Key":
            "a9b8438c1cmshc8465468da9c36dp1e98d6jsn76d8e0b2fa77",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then((response) => {
          this.popularGames = response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
      this.loading = false;
    },
  },
});
