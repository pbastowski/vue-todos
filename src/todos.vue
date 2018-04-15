<template>
    <div>
        <app-title/>
        <v-container style="max-width: 800px;">
            <v-card class="app-font">

                <todos-new
                        v-model="newTodo"
                        @add-item="addItem($event); newTodo = '';"
                        @complete-all="completeAll"
                        class="py-2"/>

                <v-divider/>
                <v-divider/>

                <todos-list
                        :todos="filteredTodos(visibility)"
                        @remove-item="removeItem"/>
                <v-divider v-if="filteredTodos.length > 0"/>

                <todos-footer
                        :remaining-items="remainingItems"
                        @clear-completed="clearCompleted"
                        class="py-2"/>
            </v-card>

            <hr class="mx-1"/>
            <hr class="mx-2"/>
            <hr class="mx-3"/>

        </v-container>
    </div>

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
                'remainingItems',
            ]),
        },

        methods: {
            ...mapActions([
                'completeAll',
                'addItem',
                'removeItem',
                'clearCompleted',
            ]),

        },
    }
</script>
