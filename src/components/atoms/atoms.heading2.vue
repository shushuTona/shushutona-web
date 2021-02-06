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
            display: block;
            position: relative;
            z-index: 1;
        }
    }
}
</style>