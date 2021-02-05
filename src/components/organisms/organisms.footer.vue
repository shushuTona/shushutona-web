<template>
    <footer class="l-footer">
        <p>copy right. shushutona-web.</p>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped lang="scss">
.l-footer {
    padding: 12px 0;
    grid-row: 3 / 4;
    text-align: center;
    position: relative;
    z-index: 1;

    @include breakPC() {
        padding: 24px 0;
    }
}
</style>
