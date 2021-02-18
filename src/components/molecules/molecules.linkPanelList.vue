<template>
    <div class="m-linkPanelList">
        <ul class="linkPanelList__list">
            <li
                v-for="item of listArray"
                :key="item.id"
                class="linkPanelList__listItem"
            >
                <LinkPanel
                    :linkHref="item.linkHref"
                    :mainLinkText="item.mainLinkText"
                    :subLinkText="item.subLinkText"
                    :isBlank="true"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import LinkPanel from '@/components/atoms/atoms.linkPanel.vue';

export default {
    name: 'LinkPanelList',
    components: {
        LinkPanel
    },
    props: {
        listArray: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.m-linkPanelList {
    margin: 24px 0;

    .linkPanelList {
        &__listItem {
            & + .linkPanelList__listItem {
                margin-top: 8px;
            }
        }
    }
}
</style>>