<template>
    <div class="m-panelArea">
        <h2 class="panelArea__title">{{ panelContents.productTitle }}</h2>

        <h3 class="panelArea__hdg">作ったもの説明</h3>
        <p>{{ panelContents.productDesc }}</p>

        <h3 class="panelArea__hdg">使ったもの</h3>
        <LabelList
            class="panelArea__list"
            :itemList="panelContents.skillList"
        />

        <p class="panelArea__link">
            <a
                :href="panelContents.reposUrl"
                target="_blank"
            >GitHubリポジトリのURL</a>
        </p>
    </div>
</template>

<script>
import LabelList from '@/components/molecules/molecules.labelList.vue';

export default {
    name: 'PanelArea',
    props: {
        panelContents: {
            type: Object,
            required: true
        }
    },
    components: {
        LabelList
    }
}
</script>

<style scoped lang="scss">
.m-panelArea {
    margin: 24px 0;
    padding: 16px 24px;
    width: 100%;
    display: block;
    border: 1px solid $BORDER_COLOR;

    @include resetMargin();

    .panelArea {
        &__title {
            margin: 0 0 16px;
            padding: 0 0 8px;
            font-size: 2.4rem;
            font-weight: normal;
            position: relative;

            &::after {
                content: "";
                width: 100%;
                height: 1px;
                background-color: $BORDER_COLOR;
                position: absolute;
                bottom: 0;
                left: 0;
            }
        }

        &__hdg {
            margin: 16px 0 8px;
            padding: 0 0 0 16px;
            font-size: 1.6rem;
            font-weight: normal;
            position: relative;

            &::before {
                content: "";
                width: 8px;
                height: 4px;
                background-color: $SUB_COLOR;
                position: absolute;
                top: 9px;
                left: 0;
            }
        }

        &__link {
            text-align: right;

            a {
                color: $SUB_COLOR;
                text-decoration: underline;

                @include hover() {
                    text-decoration: none;
                }
            }
        }

        &__list {
            margin: 0 0 16px;
        }
    }
}
</style>