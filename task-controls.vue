<template>
    <!-- Task filters and controls -->
    <div style="text-align: center;">
        <span style="float: left;">
            {{ tasksRemaining | pluralize('task', 'tasks') }} left
        </span>

        <span>
            <button @click="$emit('set-visibility', 'all')">All</button>
            <button @click="$emit('set-visibility', 'active')">Active</button>
            <button @click="$emit('set-visibility', 'completed')">Completed</button>
        </span>

        <button
            @click="$emit('clear-completed')"
            style="float: right;">
            Clear completed
        </button>
    </div>
</template>

<script>
    import { pluralize } from './filters'

    export default {

        props: {
            tasksRemaining: Number,
        },

        filters: { pluralize },
    }
</script>