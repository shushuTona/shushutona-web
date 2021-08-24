<template>
    <div class="m-btnLink" :class="{ 'is-emphasis': isEmphasis }">
        <a
            class="btnLink__inner"
            :href="linkHref"
            :target="isBlank ? '_blank' : false"
        ><span class="btnLink__innerText">{{ linkText }}</span></a>
    </div>
</template>

<script>
export default {
    name: 'Btn',
    props: {
        linkText: {
            type: String,
            required: true
        },
        linkHref: {
            type: String,
            required: true
        },
        isBlank: {
            type: Boolean,
            default: false
        },
        isEmphasis: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped lang="scss">
.m-btnLink {
    margin: 24px 0;
    text-align: center;

    .btnLink {
        &__inner {
            padding: 0;
            display: block;
            color: $MAIN_COLOR;
            background-color: #fff;
            border: none;
            overflow: hidden;
            transition:
                background-color $TRANSITION,
                color $TRANSITION;
            transition-delay: $TRANSITION * 0;
            text-decoration: none;
            position: relative;
            cursor: pointer;

            &::before,
            &::after {
                content: "";
                width: 100%;
                height: 1px;
                background-color: $MAIN_COLOR;
                transition: transform $TRANSITION;
                -webkit-backface-visibility: hidden; // borderがにじむ為
                backface-visibility: hidden;
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

                .btnLink__innerText {
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
            padding: 16px 24px 16px;
            display: block;
            position: relative;

            &::before,
            &::after {
                content: "";
                width: 1px;
                height: 100%;
                background-color: $MAIN_COLOR;
                transition: transform $TRANSITION;
                -webkit-backface-visibility: hidden; // borderがにじむ為
                backface-visibility: hidden;
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
        .btnLink {
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