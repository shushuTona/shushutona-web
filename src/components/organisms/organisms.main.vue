<template>
    <main class="l-main">
        <transition
            name="fade"
            mode="out-in"
        >
            <router-view/>
        </transition>

        <canvas
            class="main__canvas"
            ref="canvas"
        ></canvas>
    </main>
</template>

<script>
import * as THREE from "three";

export default {
    name: 'Main',
    mounted() {
        console.log(THREE);
    }
}
</script>

<style scoped lang="scss">
.fade {
    &-enter-active,
    &-leave-active {
        transition: opacity .5s;
    }

    &-enter,
    &-leave-to {
        opacity: 0;
    }
}

.l-main {
    & > [class^="views-"] {
        margin: 0 auto;
        padding: 0 24px 64px;
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
