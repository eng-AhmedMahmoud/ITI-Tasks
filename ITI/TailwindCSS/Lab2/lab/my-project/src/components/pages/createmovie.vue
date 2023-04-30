<template>
    <div>
        <h1 class="text-center border-b-2 m-auto my-4 text-red-600 w-72">
            Create Movie
        </h1>
        <form action="" @submit.prevent="createMovie">
            <div class="form-floating mb-3">
                <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="title"
                    v-model="title"
                />
                <label for="floatingInput">title</label>
                <!-- <label
                    for="title"
                    class="block text-sm font-medium  text-gray-900"
                    >Title</label
                >
                <div class="relative mt-2 rounded-md shadow-sm">
                    <input
                        type="text"
                        name="title"
                        id="title"
                        class="block w-full rounded-md border-0 py-1.5 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                        placeholder="title"
                    />
                </div> -->
            </div>
            <div class="form-floating mb-3">
                <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="popularity"
                    v-model="popularity"
                />
                <label for="floatingInput">popularity</label>
            </div>
            <div class="form-floating mb-3">
                <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="overview"
                    v-model="overview"
                />
                <label for="floatingInput">overview</label>
            </div>
            <button
                class="items-center rounded-md text-center bg-red-700 px-2 py-1 text-xl font-medium text-red-50 ring-1 ring-inset ring-slate-600/10 me-4 col-6 hover:bg-red-800"
            >
                submit
            </button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "createMovie",
    data() {
        return {
            title: "",
            popularity: "",
            overview: "",
        };
    },
    methods: {
        createMovie() {
            axios
                .post("http://localhost:2000/movies", {
                    title: this.title,
                    popularity: this.popularity,
                    overview: this.overview,
                })
                .then((res) => {
                    console.log(res.data);
                    this.$router.push("/");
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script>

<style scoped></style>
