<template lang="pug">
    div
        app-title

        v-container(style="max-width: 800px;")

            v-card.app-font

                todos-new.py-2(
                v-model="newTodo",
                @add-item="addItem($event); newTodo = '';",
                @complete-all="completeAll"
                )

                v-divider
                v-divider

                todos-list(
                :todos="filteredTodos(visibility)",
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
    import { mapActions, mapGetters } from 'vuex'

    import AppTitle from './app-title'
    import TodosList from './todos-list'
    import TodosNew from './todos-new'
    import TodosFooter from './todos-footer'

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
                newTodo: '',
            }
        },

        computed: {
            ...mapGetters([
                'todos',
                'filteredTodos',
                'remainingItems'
            ]),
        },

        methods: {
            ...mapActions([
                'loadTodos',
                'saveTodos',
                'completeAll',
                'addItem',
                'removeItem',
                'clearCompleted',
            ]),

        },
    }
</script>
