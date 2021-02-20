<template>
    <span class="m-labelText">{{ labelText }}</span>
</template>

<script>
export default {
    name: 'LabelText',
    props: {
        labelText: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.m-labelText {
    padding: 8px 16px;
    display: inline-block;
    color: $MAIN_COLOR;
    border: 1px solid $MAIN_COLOR;
    line-height: 1;
    text-align: center;
}
</style>