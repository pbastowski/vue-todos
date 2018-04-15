<template lang="pug">
    v-app
        link(href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons', rel="stylesheet")
        router-view
</template>

<style>
    .b1 {
        border: 1px dashed red;
    }

    .grow {
        flex-grow: 1;
    }

    .btn__content {
        text-transform: none;
    }

    .app-font {
        font-family: 'Helvetica Neue';
    }
</style>
