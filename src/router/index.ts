import { createRouter, createWebHistory } from "vue-router";

import StarshipPage from "../views/[slug].vue";
import Home from "../views/index.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/views/:slug",
        name: "StarshipPage",
        component: StarshipPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
