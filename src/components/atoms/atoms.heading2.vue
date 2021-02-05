<template>
    <h2 class="m-heading2">
        <span class="heading2__inner">{{ headingText }}</span>
    </h2>
</template>

<script>
export default {
    name: 'Heading2',
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

.m-heading2 {
    margin: 48px 0 24px;
    padding: 0 0 15px;
    font-weight: bold;
    font-size: 3.6rem;

    @include breakPC() {
        margin: 60px 0 36px;
        padding: 0 0 25px;
        font-size: 4.8rem;
    }

    .heading2 {
        &__inner {
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
                animation-duration: 1s;
                animation-fill-mode: both;

                @include breakPC() {
                    height: 10px;
                }
            }

            &::before {
                background-color: $MAIN_COLOR;
                bottom: -10px;
                max-width: 200px;

                animation-delay: .5s;

                @include breakPC() {
                    bottom: -15px;
                    max-width: 300px;
                }
            }

            &::after {
                background-color: $SUB_COLOR;
                bottom: -15px;
                max-width: 160px;

                animation-delay: .75s;

                @include breakPC() {
                    bottom: -25px;
                    max-width: 240px;
                }
            }
        }
    }
}
</style>