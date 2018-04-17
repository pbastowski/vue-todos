<template>
    <!-- Task List Section -->
    <div>
        <div v-for="task in tasks" :key="task.id">
            <input type="checkbox" v-model="task.done">
            <input
                    type="text"
                    v-model="task.title"
                    style="width: 300px;"
            >
            <button
                    @click="$emit('delete-task', task, 1, 2)"
                    style="margin-left: 15px;"
            >Delete
            </button>
        </div>
    </div>

</template>

<script>
    export default {
        props: {
            tasks: Array,
        }
    }
</script>