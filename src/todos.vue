<template lang="pug">
    div
        app-title

        v-container(style="max-width: 800px;")

            v-card.app-font

                todos-new.py-2(
                v-model="newTodo",
                @add-item="addItem",
                @select-all="selectAll"
                )

                v-divider
                v-divider

                todos-list(
                :todos="filteredTodos",
                @remove-item="removeItem"
                )

                v-divider(v-if="filteredTodos.length>0")

                todos-footer.py-2(
                :remaining-items="remainingItems",
                @clear-completed="clearCompleted"
                )

            hr.mx-1
            hr.mx-2
            hr.mx-3


</template>

<script>
    import AppTitle from './app-title'
    import TodosList from './todos-list'
    import TodosNew from './todos-new'
    import TodosFooter from './todos-footer'

    // This will be used to store and retrieve the todos list from localStorage
    const STORAGE_KEY = 'vue-todos'

    export default {
        components: {
            AppTitle,
            TodosList,
            TodosNew,
            TodosFooter,
        },

        props: {
            visibility: { type: String, default: 'all' },
        },

        data() {
            return {
                newTodo:     '',
                todoCounter: 0,
                todos:       [],
            }
        },

        created() {
            this.loadTodos()
        },

        watch: {
            todos: {
                deep: true,
                handler(nv) {
                    if ( typeof nv !== 'undefined' ) {
                        this.saveTodos()
                    }
                }
            }
        },

        computed: {
            filteredTodos() {
                return this.visibility === 'all'
                    ? this.todos
                    : this.visibility === 'active'
                        ? this.todos.filter(todo => !todo.completed)
                        : this.todos.filter(todo => todo.completed)
            },

            remainingItems() {
                return this.todos.filter(todo => !todo.completed).length
            },
        },

        methods: {
            selectAll(completed) {
                this.todos = this.todos.map(x => ( { ...x, completed } ))
            },

            addItem() {
                this.todos.push({
                    id:        ++this.todoCounter,
                    title:     this.newTodo,
                    completed: false,
                })
                this.newTodo = ''
            },

            removeItem(todo) {
                this.todos = this.todos.filter(x => x.id !== todo.id)
            },

            clearCompleted() {
                this.todos = this.todos.filter(x => !x.completed)
            },

            saveTodos() {
                window.localStorage[ STORAGE_KEY ] = JSON.stringify(this.todos)
            },

            loadTodos() {
                if ( !window.localStorage[ STORAGE_KEY ] ) return
                let todos = JSON.parse(window.localStorage[ STORAGE_KEY ] || '{}')

                this.todos = todos

                // Preset the next todo id
                this.todoCounter =
                    this.todos.reduce((a, b) => ( a.id > b.id ? a : b ), { id: 0 }).id + 1
            },
        },
    }
</script>
