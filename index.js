import 'vuetify/dist/vuetify.min.css'

import Vue from 'vue'
import Vuetify from 'vuetify'

import router from './src/router'
import store from './src/store'

Vue.use(Vuetify)

console.clear()
Vue.config.productionTip = false
Vue.config.devtools = false

Vue.prototype.log = console.log.bind(console)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(require('./src/App.vue').default)
})
