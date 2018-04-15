<template>
    <v-layout align-center class="px-3">

        <v-checkbox
                v-model="selectAll"
                hide-details
                @change="$emit('complete-all', selectAll)"
                color="grey"
                class="shrink"/>

        <v-text-field
                :value="title"
                label="What needs to be done?"
                @input="$emit('input', $event)"
                @keyup.enter="$emit('add-item', title)"
                clearable
                solo
                flat
                class="text"/>

    </v-layout>
</template>

<script>
    export default {
        props: {
            value: { type: String, default: '' },
        },

        data() {
            return {
                title:     this.value,
                selectAll: false,
            }
        },

        watch: {
            value(nv) {
                this.title = nv
            },
        },
    }
</script>

<style scoped lang="scss">
    .text {
        font-style: italic;
    }
</style>