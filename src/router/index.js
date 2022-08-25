import { createRouter, createWebHashHistory } from "vue-router";
import HelloWorld from '@/components/HelloWorld'
import ResourcesForm from '@/components/ResourcesForm'
import TestComponent from "@/components/TestComponent";

const routes = [
    {path: '/', component: HelloWorld},
    {path: '/resources', component: ResourcesForm},
    {path: '/test', component: TestComponent}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
