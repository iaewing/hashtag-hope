import {createRouter, createWebHashHistory} from "vue-router";
import HomeView from '@/views/HomeView'
import ResourcesForm from '@/components/ResourcesForm'
import TwitchInfo from "@/components/TwitchInfo";

const routes = [
    {path: '/', component: HomeView},
    {path: '/resources', component: ResourcesForm},
    {path: '/twitch', component: TwitchInfo}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
