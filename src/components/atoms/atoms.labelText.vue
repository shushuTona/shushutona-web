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
    padding: 4px 8px;
    display: inline-block;
    color: $MAIN_COLOR;
    border: 1px solid $MAIN_COLOR;
    text-align: center;
}
</style>