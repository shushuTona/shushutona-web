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
.m-heading2 {
    @include createHeadingValue(2);

    .heading2 {
        &__inner {
            padding: 0 0 0 calc(#{$HEADING_FONT_BASE_VALUE} * 3);
            display: block;
            position: relative;
            z-index: 1;

            @include breakPC() {
                padding-left: calc(#{$HEADING_FONT_BASE_VALUE} * 4);
            }

            &::before {
                content: '';
                width: 5px;
                height: 100%;
                background-color: $MAIN_COLOR;
                position: absolute;
                top: 0;
                left: 0;

                @include breakPC() {
                    width: 10px;
                }
            }
        }
    }
}
</style>