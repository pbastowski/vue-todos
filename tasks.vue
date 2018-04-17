<template>
    <div class="todos-app">
        <h1 style="text-align: center;">Tasks</h1>
        <hr>

        <new-task
                :all-completed="tasksRemaining===0"
                @complete-all="setAllDone"
                @add-task="$event && addTask($event)"
        />

        <hr>

        <task-controls
                :tasks-remaining="tasksRemaining"
                @set-visibility="setVisibility"
                @clear-completed="clearCompleted"
        />

        <hr>

        <task-list
                :tasks="filteredTasks(visibility)"
                @delete-task="log"
        />
    </div>
</template>

<script>
    import NewTask from './new-task'
    import TaskControls from './task-controls'
    import TaskList from './task-list'
    import {mapActions, mapGetters} from 'vuex'

    export default {

        props: {
            visibility: { type: String, default: 'all' },
        },

        components: {
            NewTask,
            TaskControls,
            TaskList,
        },

        data() {
            return {}
        },

        computed: {
            ...mapGetters('tasks', [
                'filteredTasks',
                'tasksRemaining',
            ])
        },

        methods: {
            setVisibility(visibility) {
                this.$router.push(`/${visibility}`)
            },

            ...mapActions('tasks', [
                'addTask',
                'setAllDone',
                'clearCompleted',
                'deleteTask',
                'clear-completed',
            ])
        }

    }

</script>

<style scoped>
    .todos-app {
        padding: 5px 20px;
    }
</style>