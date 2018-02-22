<template lang="pug">
    v-layout(align-center).px-3

        v-checkbox.shrink(
        v-model="selectAll",
        hide-details,
        @change="$emit('complete-all', selectAll)",
        color="grey",
        )

        v-text-field.text(
        :value="title",
        @input="$emit('input', $event)"
        label="What needs to be done?",
        clearable,
        @keyup.enter="$emit('add-item', title)",
        solo,
        flat,
        )
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
    .text { font-style: italic; }
</style>