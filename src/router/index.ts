import {createRouter, createWebHashHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue'
import ResourcesForm from '@/components/ResourcesForm.vue'
import TwitchInfo from '@/components/TwitchInfo.vue';

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
