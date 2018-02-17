import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// This will be used to store and retrieve the todos list from localStorage
const STORAGE_KEY = 'vue-todos'


const state = {
    todos:       [],
    todoCounter: 0,
}


const mutations = {
    SET_TODOS(state, todos) {
        state.todos = todos
    },

    ADD_TODO(state, todo) {
        state.todos.push(todo)
    },

    SET_COUNTER(state, counter) {
        state.todoCounter = counter
    }
}


const actions = {
    saveTodos({ state }) {
        window.localStorage[ STORAGE_KEY ] = JSON.stringify(state.todos)
    },

    loadTodos({ state, commit }) {
        if ( !window.localStorage[ STORAGE_KEY ] ) return
        let todos = JSON.parse(window.localStorage[ STORAGE_KEY ] || '{}')

        commit('SET_TODOS', todos)

        // Preset the next todo id
        let counter = state.todos.reduce((a, b) => ( a.id > b.id ? a : b ), { id: 0 }).id + 1
        commit('SET_COUNTER', counter)

    },

    completeAll({ state, commit }, completed) {
        commit('SET_TODOS', state.todos.map(x => ( { ...x, completed } )))
    },

    addItem({ state, commit }, title) {
        commit('ADD_TODO', {
            id:        ++state.todoCounter,
            title,
            completed: false,
        })
    },

    removeItem({ state, commit }, todo) {
        commit('SET_TODOS', state.todos.filter(x => x.id !== todo.id))
    },

    clearCompleted({ state, commit }) {
        commit('SET_TODOS', state.todos.filter(x => !x.completed))
    },
}


const getters = {
    todos: s => s.todos,

    remainingItems: s => s.todos.length > 0 ? s.todos.filter(todo => !todo.completed).length : '',

    filteredTodos: state => function(visibility = 'all') {
        return visibility === 'all'
            ? state.todos
            : visibility === 'active'
                ? state.todos.filter(todo => !todo.completed)
                : state.todos.filter(todo => todo.completed)
    },

}


const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
})


// Make the store available in the console for easy of testing
window.store = store
window.getters = store.getters


// Load the todos from localStorage on startup
store.dispatch('loadTodos')


// Save all changes to todos in localStorage
store.watch(
    () => store.state.todos,
    (nv, ov) => store.dispatch('saveTodos'),
    { deep: true }
)


export default store