<template>
    <div id="app">
        <Header class="app-grid1" />
        <Main class="app-grid2" />
        <Footer class="app-grid3" />
    </div>
</template>

<script>
import Header from '@/components/organisms/organisms.header.vue';
import Main from '@/components/organisms/organisms.main.vue';
import Footer from '@/components/organisms/organisms.footer.vue';

export default {
    components: {
        Header,
        Main,
        Footer
    },
    beforeCreate() {
        this.$store.dispatch('initUserObj');
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');

*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
    margin: 0;
    padding: 0;
    color: $FONT_COLOR;
    font-family: "Quicksand", "Helvetica Neue", "Helvetica", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Arial", "Yu Gothic", "Meiryo", sans-serif;
    font-display: optional;
    font-size: $SP_FONT_BASE;
    line-height: 1.5;
    word-break: break-word;

    @include breakPC() {
        font-size: $PC_FONT_BASE;
    }
}

a,
button {
    outline: none;
    text-decoration: none;
}

a:hover,
a:focus {
    text-decoration: underline;
}

p {
    margin: 0;
}

p + p {
    margin-top: 1em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    font-weight: 300;
}

ul,
ol {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}

img {
    max-width: 100%;
}

#app {
    height: 100vh;
    display: grid;
    grid-template-rows: fit-content(100%) 1fr fit-content(100%);
}

.app-grid1 {
    grid-row: 1 / 2;
}

.app-grid2 {
    grid-row: 2 / 3;
}

.app-grid3 {
    grid-row: 3 / 4;
}
</style>
