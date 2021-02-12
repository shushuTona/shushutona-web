<template>
    <footer class="l-footer">
        <small>© 2020 shushutona-web.</small>
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
    text-align: center;
    position: relative;
    z-index: 1;

    @include breakPC() {
        padding: 24px 0;
    }
}
</style>
