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
            display: block;
            color: $FONT_COLOR;
            border: 1px solid $BORDER_COLOR;
            text-decoration: none;

            @include breakPC() {
                display: flex;
                align-items: flex-start;
                transition:
                    border-color $TRANSITION,
                    color $TRANSITION;
                position: relative;
            }

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
            display: block;
            margin: 8px 0 0;

            @include breakPC() {
                margin: 0;
            }
        }

        &__subText {
            display: block;
            flex-shrink: 0;
            position: relative;
            z-index: 1;

            & + .linkPanel__mainText {
                @include breakPC() {
                    margin-left: $PC_FONT_BASE;
                }
            }
        }
    }
}
</style>