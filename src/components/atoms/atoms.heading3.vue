<template>
    <h3 class="m-heading3">
        <span class="heading3__inner">{{ headingText }}</span>
    </h3>
</template>

<script>
export default {
    name: 'Heading3',
    props: {
        headingText: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.m-heading3 {
    font-weight: bold;

    @include createHeadingValue(1);

    .heading3 {
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
                height: 10px;
                background-color: $SUB_COLOR;
                position: absolute;
                top: calc(1em * 1.5 / 2 - 5px);
                left: 0;

                @include breakPC() {
                    width: 10px;
                }
            }
        }
    }
}
</style>