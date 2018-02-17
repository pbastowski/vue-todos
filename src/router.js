import Vue from 'vue'
import VueRouter from 'vue-router'

import Todos from './todos.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode:   'history',
    routes: [
        {
            path:     '/',
            redirect: '/all'
        },
        {
            path:      '/:visibility?',
            component: Todos,
            props:     true
        },
        {
            path:     '*',
            redirect: '/'
        }
    ]
})

export default router
