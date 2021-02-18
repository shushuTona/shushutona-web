<template>
    <div class="m-linkPanel">
        <a
            class="linkPanel__link"
            :href="linkHref"
            :target="isBlank ? '_blank' : false"
        >
            <span
                v-if="subLinkText"
                class="linkPanel__subText"
            >{{ subLinkText }}</span>
            <span class="linkPanel__mainText">{{ mainLinkText }}</span>
        </a>
    </div>
</template>

<script>
export default {
    name: 'LinkPanel',
    props: {
        linkHref: {
            type: String,
            required: true
        },
        mainLinkText: {
            type: String,
            required: true
        },
        subLinkText: {
            type: String
        },
        isBlank: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped lang="scss">
.m-linkPanel {
    overflow: hidden;

    .linkPanel {
        &__link {
            padding: 16px 24px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            color: $FONT_COLOR;
            border: 1px solid $BORDER_COLOR;
            transition:
                border-color $TRANSITION,
                color $TRANSITION;
            text-decoration: none;
            position: relative;

            &::before {
                content: '';
                width: 10px;
                height: calc(100% + 10px);
                background-color: $MAIN_COLOR;
                transform: translateX(-15px);
                transition: transform $TRANSITION;
                position: absolute;
                top: -2px;
                left: 0;
            }

            @include hover() {
                color: $MAIN_COLOR;
                border-color: $MAIN_COLOR;

                &::before {
                    transform: translateX(0);
                }
            }
        }

        &__mainText {
            font-size: 1.6rem;
        }

        &__subText {
            flex-shrink: 0;
            position: relative;
            z-index: 1;

            & + .linkPanel__mainText {
                margin-left: $SP_FONT_BASE;

                @include breakPC() {
                    margin-left: $PC_FONT_BASE;
                }
            }
        }
    }
}
</style>