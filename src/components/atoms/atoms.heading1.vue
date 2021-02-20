<template>
    <h1 class="m-heading1">
        <span class="heading1__inner">{{ headingText }}</span>
    </h1>
</template>

<script>
export default {
    name: 'Heading1',
    props: {
        headingText: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@keyframes initHeading {
    0% {
        width: 0;
    }

    100% {
        width: 100%;
    }
}

.m-heading1 {
    padding: 0 0 10px;
    font-family: "Quicksand", sans-serif;

    @include createHeadingValue(3);

    @include breakPC() {
        padding: 0 0 20px;
    }

    .heading1 {
        &__inner {
            display: block;
            position: relative;
            z-index: 1;

            &::before,
            &::after {
                content: "";
                width: 100%;
                height: 5px;
                position: absolute;
                bottom: 0;
                left: 0;
                z-index: -1;

                animation-name: initHeading;
                animation-duration: 1.5s;
                animation-fill-mode: both;

                @include breakPC() {
                    height: 10px;
                }
            }

            &::before {
                background-color: $MAIN_COLOR;
                bottom: -5px;
                max-width: 200px;

                animation-delay: .5s;

                @include breakPC() {
                    bottom: -10px;
                    max-width: 300px;
                }
            }

            &::after {
                background-color: $SUB_COLOR;
                bottom: -10px;
                max-width: 160px;

                animation-delay: .75s;

                @include breakPC() {
                    bottom: -20px;
                    max-width: 240px;
                }
            }
        }
    }
}
</style>