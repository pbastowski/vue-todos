<template lang="pug">
    div
        template(v-for="(todo, index) in todos")

            v-divider(v-if="index>0")

            .todo-row.px-3.py-1
                v-layout(align-center)
                    v-checkbox.shrink(v-model="todo.completed", hide-details)
                    v-text-field(v-model="todo.title", solo, flat)
                    v-btn.mr-0(flat, icon, @click="$emit('remove-item', todo)")
                        v-icon.delete-todo(color="red") delete
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
