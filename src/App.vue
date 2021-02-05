<template>
    <div id="app">
        <Header />
        <Main />
        <Footer />
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
    }
}
</script>

<style lang="scss">
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
    font-size: 1.4rem;
    font-family: "Helvetica Neue", "Helvetica", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Arial", "Yu Gothic", "Meiryo", sans-serif;

    @include breakPC() {
        font-size: 1.6rem;
    }
}

a,
button {
    outline: none;
    text-decoration: none;
}

a:hover,
a:focus {
    text-decoration: underline;;
}

p {
    margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
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
</style>
