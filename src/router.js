// This file configures the routes for the app
import Vue from 'vue'
import VueRouter from 'vue-router'

import Todos from './todos.vue'             //

Vue.use(VueRouter)                          // Tell Vue we want to use the VueRouter plugin

const router = new VueRouter({
    //mode:   'history',                    // We will use hash "#/" routing, because it works everywhere.
    routes: [
        {
            path:     '/',                  // The root route redirects to "/all"
            redirect: '/all'
        },
        {
            path:      '/:visibility?',     // this route accepts a parameter called "visibility"
            component: Todos,               // it routes to the Todos component
            props:     true                 // inject "visibility" as a prop on the Todos component
        },
        {
            path:     '*',                  // All routes not specifically mentioned above shall redirect to "/"
            redirect: '/'
        }
    ]
})

// We export the fully configured router object
export default router
