<template>
    <div class="m-btnLinkList">
        <ul class="btnLinkList__inner">
            <li
                v-for="item of itemList"
                :key="item.linkText"
                class="btnLinkList__item"
            >
                    <BtnLink
                        :linkText="item.linkText"
                        :linkHref="item.linkHref"
                        :isBlank="item.isBlank"
                        :isEmphasis="item.isEmphasis" />
            </li>
        </ul>
    </div>
</template>

<script>
import BtnLink from '@/components/atoms/atoms.btnLink.vue';

export default {
    name: 'BtnLinkList',
    props: {
        itemList: {
            type: Array,
            required: true
        }
    },
    components: {
        BtnLink,
    },
}
</script>

<style scoped lang="scss">
.m-btnLinkList {
    margin: 30px 0;

    .btnLinkList__inner {
        display: grid;
        grid-auto-rows: 1fr;
        justify-content: center;
        grid-gap: 10px 20px;

        @include breakPC() {
            grid-template-columns: 1fr 1fr;
        }

        .btnLinkList__item {
            display: inline-block;

            .m-btnLink {
                margin: 0;
            }
        }
    }
}
</style>
