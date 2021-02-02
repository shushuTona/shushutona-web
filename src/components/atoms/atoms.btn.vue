<template>
    <div class="m-btn" :class="{ 'is-emphasis': isEmphasis }">
        <button
            type="button"
            class="btn__inner"
        ><span class="btn__innerText">{{ btnText }}</span></button>
    </div>
</template>

<script>
export default {
    name: 'Btn',
    props: {
        btnText: {
            type: String,
            required: true
        },
        isEmphasis: {
            type: Boolean,
            default: false
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
            padding: 6px 15px 5px;
            color: #fff;
            background-color: $MAIN_COLOR;
            border: 1px solid $MAIN_COLOR;
            border-radius: 5px;
            transition: color $TRANSITION;
            cursor: pointer;
            overflow: hidden;
            position: relative;

            // スライド背景色表示
            &::before {
                content: "";
                width: 100%;
                height: 100%;
                background-color: #fff;
                transition: transform $TRANSITION;
                transform: translateX(-102%);
                position: absolute;
                top: 0;
                left: 0;
            }

            &:hover,
            &:focus {
                color: $MAIN_COLOR;

                &::before {
                    transform: translateX(0);
                }
            }
        }

        &__innerText {
            position: relative;
        }
    }

    // 強調ボタン表示
    &.is-emphasis {
        .btn {
            &__inner {
                color: $MAIN_COLOR;
                background-color: #fff;
                border: 1px solid $MAIN_COLOR;

                &::before {
                    background-color: $MAIN_COLOR;
                }

                &:hover,
                &:focus {
                    color: #fff;
                }
            }

            &__innerText {
                position: relative;
            }
        }
    }
}
</style>