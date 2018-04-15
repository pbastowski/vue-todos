<template>
    <div>
        <template v-for="todo in todos">
            <div class="todo-row px-3 py-1">

                <v-layout align-center="align-center">

                    <v-checkbox
                            v-model="todo.completed"
                            hide-details="hide-details"
                            class="shrink"/>

                    <v-text-field v-model="todo.title" solo flat/>

                    <v-btn flat icon
                           @click="$emit('remove-item', todo)"
                           class="mr-0">
                        <v-icon color="red" class="delete-todo">delete</v-icon>
                    </v-btn>

                </v-layout>

            </div>

            <v-divider/>

        </template>
    </div>
</template>

<script>
    export default {
        props: {
            todos: Array,
        },
    }
</script>


<style lang="scss" scoped>
    .delete-todo {
        opacity: 0;
        .todo-row:hover & {
            opacity: 1;
        }
    }
</style>
