<template>
    <main class="l-main">
        <router-view/>
        <canvas class="main__canvas"></canvas>
    </main>
</template>

<script>
export default {
    name: 'Main'
}
</script>

<style scoped lang="scss">
.l-main {
    grid-row: 2 / 3;

    & > [class^="views-"] {
        margin: 0 auto;
        padding: 0 24px;
        width: 100%;
        max-width: $CONTENT_WIDTH;
        position: relative;
        z-index: 1;
    }

    .main {
        &__canvas {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
    }
}
</style>
