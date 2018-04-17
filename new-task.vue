<template>
    <!-- Task Input section -->
    <div>
        <input
                type="checkbox"
                v-model="completed"
                @change="$emit('complete-all', completed)"
        >
        <input
                v-model="newTask"
                type="text"
                placeholder="What needs to be done"
                @keyup.enter="newTask & $emit('add-task', newTask); newTask=''"
                style="width: 300px;"
        >
    </div>
</template>

<script>
    export default {
        props: {
            allCompleted: Boolean,
        },

        data() {
            return {
                newTask:   '',
                completed: this.allCompleted,
            }
        },

        watch: {
            allCompleted(nv) {
                this.completed = nv
            }
        },
    }
</script>

<style scoped>
    input {
        font-size: 16px;
    }
</style>
