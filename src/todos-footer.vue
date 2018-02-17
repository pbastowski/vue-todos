<template lang="pug">
    .grey--text.pl-3
        v-layout(justify-space-between, align-baseline)
            //span {{ remainingItems }} {{ remainingItems > 1 || remainingItems === 0 ? 'items' : 'item' }} left
            span {{ remainingItems | pluralize }} left
            span
                v-btn-toggle(v-model="selectedFilter")
                    v-btn(small, flat, to="/all", value='all') All
                    v-btn(small, flat, to="/active", value='active') Active
                    v-btn(small, flat, to="/completed", value='completed') Completed
            span
                v-btn.mr-0(flat, color="grey", @click="$emit('clear-completed')") Clear completed

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
            pluralize(v, singular = 'item', plural = singular +'s') {
                return v + ' ' + (v > 1 || v === 0 ? plural : singular)
            }
        }
    }
</script>
