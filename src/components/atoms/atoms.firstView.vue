<template>
    <div class="m-firstView">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'FirstView'
}
</script>

<style lang="scss" scoped>
.m-firstView {
    @include resetMargin();

    height: calc(100vh - 84px);
}
</style>