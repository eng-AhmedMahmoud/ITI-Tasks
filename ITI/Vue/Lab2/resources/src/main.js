import { createApp } from 'vue'
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createRouter , createWebHistory } from 'vue-router';
import allUsers from './components/pages/allusers.vue';
import createUser from './components/pages/createuser.vue';
import userDetails from './components/pages/userdetails.vue'
import errorApp from './components/pages/error.vue';

const routes = [
    {
        path:'/',
        component:allUsers,
        alias:'/users'
    },
    {
        path:'/users/:id',
        component:userDetails,
    },
    {
        path:'/create',
        component:createUser,
    },
    {
        path:'/:NotFound(.*)*',
        component:errorApp,
        meta:{
            hideNavbar:true
        }
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
