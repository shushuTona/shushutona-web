<template>
    <div class="views-home">
        <FirstView>
            <Heading1 :headingText="'Shushutona-web'" />
        </FirstView>

        <Heading2 :headingText="'最近のGitHub更新履歴'" />

        <p>最近はこんなかんじのコードを書いています。</p>

        <LinkPanelList
            :listArray="commitLinkArray"
        />

        <BtnLink
            :linkText="'GitHubアカウント'"
            :linkHref="'https://github.com/shushuTona'"
            :isBlank="true"
            :isEmphasis="true"
        />
    </div>
</template>

<script>
import Heading1 from '@/components/atoms/atoms.heading1.vue';
import Heading2 from '@/components/atoms/atoms.heading2.vue';
import FirstView from '@/components/atoms/atoms.firstView.vue';
import BtnLink from '@/components/atoms/atoms.btnLink.vue';
import LinkPanelList from '@/components/molecules/molecules.linkPanelList.vue';

export default {
    name: 'Home',
    components: {
        Heading1,
        Heading2,
        FirstView,
        BtnLink,
        LinkPanelList
    },
    created() {
        document.title = 'shushutona-web';
    },
    computed: {
        commitLinkArray() {
            return this.$store.state.commitLinkArray;
        }
    }
}
</script>

<style scoped lang="scss">
.views-home {
    @include resetMargin();
}
</style>
