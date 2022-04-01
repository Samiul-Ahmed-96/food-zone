import { createRouter, createWebHistory } from 'vue-router';
import Contact from './components/Contact/Contact.vue';
import Home from './components/Home/Home.vue';
import ItemDetails from './components/ItemDetails/ItemDetails.vue';


const routes = [
    {
        name : 'Home',
        path : '/',
        component : Home
    },
    {
        name : 'Details',
        path : '/details/:id',
        component : ItemDetails
    },
    {
        name : 'Contact',
        path : '/contact',
        component : Contact
    },
   
]

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router;