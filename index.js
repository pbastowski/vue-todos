// import 'bootstrap/dist/css/bootstrap.min.css'

import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'

Vue.prototype.log = (...args) => console.log(
    ...args.map(i => JSON.stringify(i, null, 4))
)

window.log        = (...args) =>
    console.log(
        ...args.map(i => JSON.stringify(i, null, 4))
    )

new Vue({
    el: '#app',

    router,
    store,

    render: h => h(App)
})
