<template>
    <div class="m-btn">
        <button
            type="button"
            class="btn__inner"
        >{{ btnText }}</button>
    </div>
</template>

<script>
export default {
    name: 'Btn',
    props: {
        btnText: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.m-btn {
    margin: 15px 0;
    text-align: center;

    .btn {
        &__inner {
            padding: 5px 15px;
            color: #fff;
            background-color: $MAIN_COLOR;
            border: 1px solid $MAIN_COLOR;
            border-radius: 5px;
            transition:
                background-color $TRANSITION,
                color $TRANSITION,
                border-color $TRANSITION;
            cursor: pointer;
            position: relative;

            &:hover,
            &:focus {
                background-color: #fff;
                color: $MAIN_COLOR;
                border-color: $MAIN_COLOR;
            }
        }

    }
}
</style>