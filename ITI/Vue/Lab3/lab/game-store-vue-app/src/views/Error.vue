<template>
    <div>
        <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold">404</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                <p class="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
                <button class="btn btn-primary" @click="backHome">Go Home</button>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'

    export default {
        name: 'ErrorPage',
        setup () {
            const router = useRouter();
            
            function backHome() {
                router.push('/');
            }
            return {
                backHome
            }
        }
    }
</script>

<style scoped>
    .btn-primary {
        background-color: #572589;
        border: solid #572589;
    }
    .btn-primary:active {
        background-color: #7847a9;
        border: solid #7847a9;
    }
</style>