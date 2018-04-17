import Vue from 'vue'
import Vuex from 'vuex'

import tasks from './tasks'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        tasks,
    },

})

store.dispatch('tasks/loadTasks')

store.watch(
    () => store.state.tasks.tasks,
    () => store.dispatch('tasks/saveTasks'),
    { deep: true },
)

window.store = store

export default store
