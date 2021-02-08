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
@keyframes allowMove {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(20px);
    }

    100% {
        transform: translateY(0);
    }
}

.m-firstView {
    @include resetMargin();

    height: calc(100vh - 84px);
    position: relative;

    &::after {
        content: "";
        margin: 0 auto;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 40px 20px 0 20px;
        border-color: $MAIN_COLOR transparent transparent transparent;
        position: absolute;
        bottom: 64px;
        right: 0;
        left: 0;

        animation-name: allowMove;
        animation-delay: 1s;
        animation-duration: 1s;
        animation-fill-mode: backwards;
        animation-iteration-count: 3;
        animation-timing-function: ease-out;
    }
}
</style>