<template>
    <div class="grey--text pl-3">
        <v-layout justify-space-between align-baseline>

            <span>{{ remainingItems | pluralize }} left</span>

            <span>
                <v-btn-toggle v-model="selectedFilter">
                    <v-btn small flat to="/all" value="all">All</v-btn>
                    <v-btn small flat to="/active" value="active">Active</v-btn>
                    <v-btn small flat to="/completed" value="completed">Completed</v-btn>
                </v-btn-toggle>
            </span>

            <span>
                <v-btn flat
                       color="grey"
                       @click="$emit('clear-completed')">Clear completed
                </v-btn>
            </span>

        </v-layout>
    </div>
</template>

<script>
    export default {
        props: {
            remainingItems: Number,
        },

        data() {
            return {
                selectedFilter: 0,
            }
        },

        filters: {
            pluralize(v, singular = 'item', plural = singular + 's') {
                return v + ' ' + (v > 1 || v === 0 ? plural : singular)
            },
        },
    }
</script>
