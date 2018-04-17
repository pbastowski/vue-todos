import Vue from 'vue'
import VueRouter from 'vue-router'

import Tasks from './tasks'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/all' },
        { path: '/:visibility', component: Tasks, props: true },
        { path: '*', redirect: '/' },
    ]
})

export default router
