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
            padding: 0;
            color: $MAIN_COLOR;
            background-color: #fff;
            border: none;
            overflow: hidden;
            transition:
                background-color $TRANSITION,
                color $TRANSITION;
            transition-delay: $TRANSITION * 0;
            position: relative;
            cursor: pointer;

            &::before,
            &::after {
                content: "";
                width: 100%;
                height: 1px;
                background-color: $MAIN_COLOR;
                transition: transform $TRANSITION;
                position: absolute;
                left: 0;
            }

            // 上
            &::before {
                transform-origin: right;
                transition-delay: $TRANSITION * 4;
                top: 0;
            }

            // 下
            &::after {
                transform-origin: left;
                transition-delay: $TRANSITION * 2;
                bottom: 0;
            }

            @include hover() {
                transition-delay: $TRANSITION * 4;
                color: #fff;
                background-color: $MAIN_COLOR;

                // 上
                &::before {
                    transform-origin: right;
                    transition-delay: $TRANSITION * 0;
                    transform: scaleX(0);
                }

                // 下
                &::after {
                    transform-origin: left;
                    transition-delay: $TRANSITION * 2;
                    transform: scaleX(0);
                }

                .btn__innerText {
                    // 右
                    &::before {
                        transform-origin: bottom;
                        transition-delay: $TRANSITION * 1;
                        transform: scaleY(0);
                    }

                    // 左
                    &::after {
                        transform-origin: top;
                        transition-delay: $TRANSITION * 3;
                        transform: scaleY(0);
                    }
                }
            }
        }

        &__innerText {
            padding: 11px 15px 10px;
            display: block;
            position: relative;

            &::before,
            &::after {
                content: "";
                width: 1px;
                height: 100%;
                background-color: $MAIN_COLOR;
                transition: transform $TRANSITION;
                position: absolute;
                top: 0;
            }

            // 右
            &::before {
                transform-origin: bottom;
                transition-delay: $TRANSITION * 3;
                right: 0;
            }

            // 左
            &::after {
                transform-origin: top;
                transition-delay: $TRANSITION * 1;
                left: 0;
            }
        }
    }

    // 強調ボタン表示
    &.is-emphasis {
        .btn {
            &__inner {
                color: $SUB_COLOR;
                background-color: #fff;

                &::before,
                &::after {
                    background-color: $SUB_COLOR;
                }

                @include hover() {
                    color: #fff;
                    background-color: $SUB_COLOR;
                }
            }

            &__innerText {
                &::before,
                &::after {
                    background-color: $SUB_COLOR;
                }
            }
        }
    }
}
</style>