// This file sets up the Vuex store for the app

import Vue from 'vue'
import Vuex from 'vuex'

// Tell Vue we want to use the Vuex plugin
Vue.use(Vuex)

// This key will be used to store and retrieve the todos list from localStorage
const STORAGE_KEY = 'vue-todos'


// The app state
const state = {
    todos:       [],
    todosCounter: 0,
}


// Mutations update the app state
const mutations = {
    // Replace the todos array completely
    SET_TODOS(state, todos) {
        state.todos = todos
    },

    // Add an item to the end of the todos array
    ADD_TODO(state, todo) {
        state.todos.push(todo)
    },

    // Update the todos counter
    SET_COUNTER(state, counter) {
        state.todosCounter = counter
    }
}


// Actions perform async tasks and then call mutations to update the state.
// Actions can also be used to simply retrieve data from async sources,
// without actually updating the state.
const actions = {
    saveTodos({ state: { todos, todosCounter } }) {
        window.localStorage[ STORAGE_KEY ] = JSON.stringify({
            todos,
            todosCounter,
        })
    },

    // Load todos and todosCounter from localStorage
    loadTodos({ commit }) {
        let todos = JSON.parse(
            window.localStorage[ STORAGE_KEY ]
            // If the key does not exist then we load these defaults
            || '{"todos": [], "todosCounter": 0}'
        )
        commit('SET_TODOS', todos.todos)
        commit('SET_COUNTER', todos.todosCounter)

    },

    // Mark all todos as completed
    completeAll({ state, commit }, completed) {
        commit('SET_TODOS', state.todos.map(x => ( { ...x, completed } )))
    },

    // Add a new item to the todos array
    addItem({ state, commit }, title) {
        commit('ADD_TODO', {
            id:        state.todosCounter,
            title,
            completed: false,
        })
        commit('SET_COUNTER', state.todosCounter+1)
    },

    // Remove an item from the todos array by replacing the
    // whole array with all items except the one being removed.
    removeItem({ state, commit }, todo) {
        commit('SET_TODOS', state.todos.filter(x => x.id !== todo.id))
    },

    // Remove all completed items from the todos array
    clearCompleted({ state, commit }) {
        commit('SET_TODOS', state.todos.filter(x => !x.completed))
    },
}


const getters = {
    // All items in the todos array
    todos: s => s.todos,

    // Count of items that are not completed
    remainingItems: s => s.todos.filter(todo => !todo.completed).length,

    // Filter todos by visibility.
    filteredTodos: state => function(visibility = 'all') {
        return visibility === 'all'
            ? state.todos
            : visibility === 'active'
                ? state.todos.filter(todo => !todo.completed)
                : state.todos.filter(todo => todo.completed)
    },

}


// Create the Vuex store
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
})


// Make the store available in the console for easy of testing
// This is not required for vue app, but it's usefull for testing during development
window.store = store


// Load the todos from localStorage on startup
store.dispatch('loadTodos')


// Save all changes to todos in localStorage
// This is achieved by watching the
store.watch(
    () => store.state.todos,
    () => store.dispatch('saveTodos'),
    { deep: true }
)


export default store